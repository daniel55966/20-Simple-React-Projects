import { useLayoutEffect, useState } from "react";

export default function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  function handleResponsive() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  useLayoutEffect(() => {
    handleResponsive();

    window.addEventListener('resize', handleResponsive);

    return () =>
    {
      window.removeEventListener('resize', handleResponsive)
    };
  }, []);

  return windowSize;
}