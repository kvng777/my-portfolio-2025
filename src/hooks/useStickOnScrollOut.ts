// hooks/useStickOnScrollOut.ts
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  stick,
  unStick,
} from "@/redux/StickyProgressBar/stickyUnstickProgressBar";

const useStickOnScrollOut = (ref: React.RefObject<HTMLElement>) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          dispatch(stick());
        } else {
          dispatch(unStick());
        }
      },
      {
        threshold: 0,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, dispatch]);
};

export default useStickOnScrollOut;
