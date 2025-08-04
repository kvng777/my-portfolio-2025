// hooks/useDeviceType.ts
import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 767);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return { isDesktop };
};

export default useDeviceType;
