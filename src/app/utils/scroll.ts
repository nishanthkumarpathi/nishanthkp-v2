/**
 * Smoothly scroll the element with the given id into view.
 * Centralizes the `getElementById` + `scrollIntoView` pattern used by the
 * header, hero, and section navigation so the behavior stays consistent.
 */
export function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
