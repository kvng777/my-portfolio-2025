// usePersistedState.ts
import { useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setClickedId } from "@/redux/ClickedIdSlice/clickedIdSlice";
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";

export const usePersistedClickedId = () => {
  const clickedId = useSelector(
    (state: RootState) => state.clickedId.clickedId
  );
  const dispatch = useDispatch();
  const hasInitialized = useRef(false);
  const router = useRouter();

  const updateIdFromUrl = useCallback(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const idFromUrl = urlParams.get("list_id");
      if (idFromUrl) {
        const parsed = parseInt(idFromUrl, 10);
        if (!isNaN(parsed) && parsed !== clickedId) {
          dispatch(setClickedId(parsed));
        }
      }
    }
  }, [dispatch, clickedId]);

  useEffect(() => {
    if (!hasInitialized.current && clickedId === null) {
      let parsed = NaN;
      const savedId = localStorage.getItem("clickedId");
      parsed = parseInt(savedId ?? "", 10);

      if (isNaN(parsed)) {
        updateIdFromUrl();
      } else if (!isNaN(parsed)) {
        dispatch(setClickedId(parsed));
      }
      hasInitialized.current = true;
    }
  }, [dispatch, clickedId, updateIdFromUrl]);

  // Add effect to listen to URL changes
  useEffect(() => {
    const handleRouteChange = () => {
      updateIdFromUrl();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router, updateIdFromUrl]);

  useEffect(() => {
    if (typeof window !== "undefined" && clickedId !== null) {
      localStorage.setItem("clickedId", clickedId.toString());
    }
  }, [clickedId]);

  return clickedId;
};
