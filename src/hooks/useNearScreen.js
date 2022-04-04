import { useEffect, useState, useRef } from "react";

export const useNearScreen = () => {
  const [show, setShow] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    Promise.resolve(
      typeof IntersectionObserver !== undefined
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
  }, [element]);

  return [show, element];
};
