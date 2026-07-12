const SCROLL_KEY = 'home_scroll_position';

/**
 * Saves the current window.scrollY to sessionStorage.
 * Must be called at the exact moment the user triggers navigation away
 * from the Home page (e.g., in the Card's onClick), before any routing
 * or React lifecycle runs and can alter the scroll position.
 */
export function saveHomeScrollPosition(): void {
  sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
}

/**
 * Reads the saved scroll position and scrolls to it.
 * Called inside Home's useEffect (mount). Defers the actual scrollTo
 * via setTimeout(0) so that it runs after the current call stack
 * (React commit + browser layout) is fully complete.
 */
export function restoreHomeScrollPosition(): void {
  const saved = sessionStorage.getItem(SCROLL_KEY);
  if (!saved) return;
  sessionStorage.removeItem(SCROLL_KEY);
  const y = Number(saved);
  if (!y) return;

  setTimeout(() => {
    window.scrollTo(0, y);
  }, 0);
}
