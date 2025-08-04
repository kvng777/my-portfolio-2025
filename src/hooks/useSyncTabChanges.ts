import { useEffect, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setBookmark,
  removeBookmark,
  setBookmarkListIds,
  updateBookmarkNote as updateBookmarkNoteAction,
  setNoteSavingStatus,
  updateNoteLastUpdated,
} from "@/redux/bookmarkSlice";
import { markArticleUpdated } from "@/redux/bookmarkUpdate";

export const useSyncTabChanges = (pageId?: string) => {
  const dispatch = useDispatch();
  const currentHref = useRef(
    typeof window !== "undefined" ? window.location.href : ""
  ).current;
  const lastUpdate = useRef(0);

  const handleStorageChange = useCallback(
    (event: StorageEvent) => {
      if (
        !pageId ||
        event.key !== `bookmark-update-${pageId}` ||
        !event.newValue
      ) {
        return;
      }

      try {
        const data = JSON.parse(event.newValue);

        // Skip if from same tab or stale data (older than 5 seconds)
        if (
          data.origin === currentHref ||
          Date.now() - (data.timestamp || 0) > 5000
        ) {
          return;
        }

        // Skip if we've already processed this update
        if (data.timestamp <= lastUpdate.current) {
          return;
        }
        lastUpdate.current = data.timestamp;

        if (!data.type || typeof data.type !== "string") return;

        switch (data.type) {
          case "update":
            if (data.bookmarkId) {
              dispatch(
                setBookmark({
                  articleId: pageId,
                  bookmarkId: data.bookmarkId,
                  note: data.note || "",
                  listIds: data.listIds || [],
                })
              );
            }
            break;

          case "remove":
            dispatch(removeBookmark(pageId));
            break;

          case "update-lists":
            if (Array.isArray(data.listIds)) {
              dispatch(
                setBookmarkListIds({
                  articleId: pageId,
                  listIds: data.listIds,
                })
              );
            }
            break;

          case "update-note":
            if (typeof data.note === "string") {
              dispatch(
                updateBookmarkNoteAction({
                  articleId: pageId,
                  note: data.note,
                })
              );
            }
            break;

          case "new-list":
            // Handle new list creation if needed
            break;

          case "update-note":
            if (typeof data.note === "string" && data.bookmarkId) {
              dispatch(
                updateBookmarkNoteAction({
                  articleId: pageId,
                  note: data.note,
                })
              );
              // Add visual indication that note was updated from another tab
              dispatch(
                setNoteSavingStatus({
                  articleId: pageId,
                  isSaving: false,
                })
              );
              dispatch(
                updateNoteLastUpdated({
                  articleId: pageId,
                })
              );
            }
            break;

          default:
            // console.warn(`Unknown sync type: ${data.type}`);
        }

        // Only mark as updated for known types
        if (
          [
            "update",
            "remove",
            "update-lists",
            "update-note",
            "new-list",
          ].includes(data.type)
        ) {
          dispatch(markArticleUpdated());
        }
      } catch (error) {
        // console.error("Error parsing sync data:", error);
      }
    },
    [pageId, dispatch, currentHref]
  );

  useEffect(() => {
    if (!pageId || typeof window === "undefined") return;

    // Wrap in requestAnimationFrame to throttle updates
    const listener = (e: StorageEvent) => {
      requestAnimationFrame(() => handleStorageChange(e));
    };

    window.addEventListener("storage", listener);
    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [pageId, handleStorageChange]);

  const notifyOtherTabs = useCallback(
    (type: string, payload: any = {}) => {
      if (!pageId || typeof window === "undefined") return;

      try {
        const syncData = {
          type,
          ...payload,
          origin: currentHref,
          timestamp: Date.now(),
        };

        // Set item briefly then remove to prevent storage buildup
        localStorage.setItem(
          `bookmark-update-${pageId}`,
          JSON.stringify(syncData)
        );

        // Clean up after a short delay
        setTimeout(() => {
          try {
            localStorage.removeItem(`bookmark-update-${pageId}`);
          } catch (cleanupError) {
            // console.error("Error cleaning up sync data:", cleanupError);
          }
        }, 100);
      } catch (error) {
        // console.error("Error notifying other tabs:", error);
      }
    },
    [pageId, currentHref]
  );

  return { notifyOtherTabs };
};
