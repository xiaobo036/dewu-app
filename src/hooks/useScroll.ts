import { useState, useEffect } from "react";

export const useScroll = (distance: number = 400) => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > distance) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // 初始化时同步一次

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [distance]);

  return isScrolled;
};