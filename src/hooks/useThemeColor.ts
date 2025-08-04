// hooks/useDeviceType.ts
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const useThemeColor = () => {

  const {theme} = useTheme();

  const [themeColor, setThemeColor] = useState('');

  useEffect(() => {
    if(theme) {
      setThemeColor(theme)
    }
  }, [theme]);

  return themeColor ;
};

export default useThemeColor;
