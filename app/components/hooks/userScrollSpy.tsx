import { useEffect, useState, useRef } from "react";

export function useScrollSpy(
  selectors: string[],
  options?: IntersectionObserverInit,
) {
  const [activeId, setActiveId] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      options ?? { rootMargin: "-25% 0% -75% 0%" },
    );

    selectors.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.current?.observe(el);
    });

    return () => observer.current?.disconnect();
  }, [selectors, options]);

  return activeId;
}
