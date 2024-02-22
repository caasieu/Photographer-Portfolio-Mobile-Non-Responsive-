'use client'

export const breakpoints = {
  'xs': '(max-width: 639px)',
  'sm': '(min-width: 640px) and (max-width: 767px)',
  'md': '(min-width: 768px) and (max-width: 1023px)',
  'lg': '(min-width: 1024px) and (max-width: 1279px)',
  'xl': '(min-width: 1280px)',
} as any;

export function gettingActiveBreakpoint() {
  for (const breakpoint in breakpoints) {
    if (window.matchMedia(breakpoints[breakpoint]).matches) {
      console.log(breakpoint);
      return breakpoint;
    }
  }
}


window.addEventListener('resize',gettingActiveBreakpoint);
gettingActiveBreakpoint();