import { useState } from 'react';

const STORAGE_KEY = 'sectionState';

/**
 * Tracks per-section "show all" state and per-card "expanded" state.
 * State is persisted to sessionStorage so the user's view (which sections
 * were expanded, which cards were open) is restored when they return
 * from a detail page.
 *
 * Why sessionStorage: it lives only for the tab session, matching the
 * existing scroll-memory pattern in this app. A page reload resets,
 * which feels right for navigation flow.
 */

type SectionStateMap = Record<string, boolean>;

type CardStateMap = Record<string, boolean>;

function readMap<T>(key: 'sections' | 'cards'): T {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {} as T;
    const parsed = JSON.parse(raw);
    return (parsed?.[key] ?? {}) as T;
  } catch {
    return {} as T;
  }
}

function writeMap(key: 'sections' | 'cards', value: unknown): void {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    parsed[key] = value;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
  } catch {
    // Ignore quota / serialization errors — non-critical UX.
  }
}

export function useSectionShowAll(sectionId: string): [boolean, (next: boolean) => void] {
  // Read the initial value from storage once. Subsequent navigation
  // back to the same section will mount a fresh component, so the
  // initializer runs again with the up-to-date stored value.
  const [showAll, setShowAllState] = useState<boolean>(() => {
    const map = readMap<SectionStateMap>('sections');
    return Boolean(map[sectionId]);
  });

  const setShowAll = (next: boolean) => {
    setShowAllState(next);
    const map = readMap<SectionStateMap>('sections');
    map[sectionId] = next;
    writeMap('sections', map);
  };

  return [showAll, setShowAll];
}

export function useCardExpanded(itemId: string): [boolean, (next: boolean) => void] {
  const [isExpanded, setExpandedState] = useState<boolean>(() => {
    const map = readMap<CardStateMap>('cards');
    return Boolean(map[itemId]);
  });

  const setIsExpanded = (next: boolean) => {
    setExpandedState(next);
    const map = readMap<CardStateMap>('cards');
    map[itemId] = next;
    writeMap('cards', map);
  };

  return [isExpanded, setIsExpanded];
}
