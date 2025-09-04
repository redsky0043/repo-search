// Search constants
export const SEARCH_CONSTANTS = {
  MIN_QUERY_LENGTH: 3,
  DEBOUNCE_DELAY: 500,
  PER_PAGE: 10,
  INTERSECTION_THRESHOLD: 0.3,
} as const

// Scroll constants
export const SCROLL_CONSTANTS = {
  SHOW_BUTTON_OFFSET: 300,
} as const

// UI constants
export const UI_CONSTANTS = {
  SKELETON_COUNT: {
    INITIAL_LOADING: 5,
    INFINITE_LOADING: 3,
  },
} as const
