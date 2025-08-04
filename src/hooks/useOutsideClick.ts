import { useEffect, RefObject } from "react";

const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  dropdownOpen: boolean,
  setDropdownOpen: (open: boolean) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.body.classList.add("dropdown-open");
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.classList.remove("dropdown-open");
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen, ref, setDropdownOpen]);
};

export default useOutsideClick;
