export function observeSection(
  element: HTMLElement,
  onReveal: () => void,
  options: { threshold?: number } = {}
): () => void {
  if (typeof IntersectionObserver === 'undefined') {
    onReveal();
    return () => {};
  }
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        onReveal();
        observer.unobserve(element);
      }
    },
    { threshold: options.threshold ?? 0.15 }
  );
  observer.observe(element);
  return () => observer.disconnect();
}
