import { animate, stagger } from 'animejs';

export type MotionPreset = 'ceremonial' | 'gentle' | 'functional';

interface PresetConfig {
  duration: number;
  ease: string;
  parallax: number;
}

const PRESETS: Record<MotionPreset, PresetConfig> = {
  ceremonial: { duration: 800, ease: 'inOutCubic', parallax: 30 },
  gentle: { duration: 600, ease: 'outCubic', parallax: 15 },
  functional: { duration: 300, ease: 'outCubic', parallax: 0 },
};

const REDUCED: PresetConfig = { duration: 1, ease: 'linear', parallax: 0 };

export function checkReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

export function createSectionReveal(
  element: HTMLElement,
  preset: MotionPreset,
): () => void {
  const inner = element.querySelector<HTMLElement>('[class$="__inner"]');
  if (!inner) return () => {};

  const children = Array.from(inner.children) as HTMLElement[];
  if (children.length === 0) return () => {};

  if (checkReducedMotion()) {
    for (const child of children) {
      child.style.setProperty('opacity', '1', 'important');
    }
    return () => {};
  }

  const cfg = PRESETS[preset];

  const animation = animate(children, {
    translateY: [cfg.parallax, 0],
    opacity: [0, 1],
    delay: stagger(100, { start: 0 }),
    duration: cfg.duration,
    ease: cfg.ease,
    autoplay: true,
  });

  return () => {
    try {
      animation.cancel();
    } catch {
      // Animation may already be finished when cancel is called
    }
    for (const child of children) {
      child.style.removeProperty('opacity');
    }
  };
}
