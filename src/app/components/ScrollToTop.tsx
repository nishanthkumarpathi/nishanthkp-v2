import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets the scroll position to the top whenever the route changes, so
 * navigating to a sub-page (or between papers) always starts at the top
 * instead of inheriting the previous page's scroll position.
 *
 * Navigations that target a specific home section carry a `sectionId` in
 * router state — those are skipped here because App scrolls to that element.
 */
export function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if ((state as { sectionId?: string } | null)?.sectionId) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, state]);

  return null;
}
