/**
 * Scrolls to the top of the page with the specified behavior
 * @param behavior 'auto' | 'smooth' | 'instant' - defaults to 'instant' for best UX
 */
export const scrollToTop = (behavior: ScrollBehavior = 'instant') => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior
  });
};

/**
 * Scrolls to a specific element by ID
 * @param elementId The ID of the element to scroll to
 * @param behavior 'auto' | 'smooth' | 'instant' - defaults to 'smooth' for in-page navigation
 */
export const scrollToElement = (elementId: string, behavior: ScrollBehavior = 'smooth') => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior, block: 'start' });
  }
};