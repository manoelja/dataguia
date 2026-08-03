import { useSyncExternalStore } from 'react';

function subscribeToQuery(query: string, onStoreChange: () => void): () => void {
  const mql = window.matchMedia(query);
  mql.addEventListener('change', onStoreChange);
  return () => mql.removeEventListener('change', onStoreChange);
}

function getQuerySnapshot(query: string): boolean {
  return window.matchMedia(query).matches;
}

/**
 * Tracks whether a CSS media query currently matches the viewport.
 * Re-renders the component whenever the match state changes (e.g. on resize).
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onStoreChange) => subscribeToQuery(query, onStoreChange),
    () => getQuerySnapshot(query),
    () => false
  );
}
