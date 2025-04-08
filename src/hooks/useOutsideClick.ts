import { useEffect, useRef } from "react";

function useOutsideClick<T extends HTMLElement>(
  handler: () => void,
  listenCapuring: boolean = true
) {
  const ref = useRef<T | null>(null);

  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapuring);

      return () =>
        document.removeEventListener("click", handleClick, listenCapuring);
    },
    [handler, listenCapuring]
  );

  return ref;
}

export default useOutsideClick;
