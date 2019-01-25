/**
 * Get a function that checks whether a story is not archived.
 *
 * @param {string[]} archivedIds - Archived story IDs.
 * @returns {Function} A function that checks whether a story is not archived.
 */
const isNotArchived = archivedIds => story =>
  archivedIds.indexOf(story.objectID) === -1;

/**
 * Get all readable stories.
 *
 * @param {Object} states - Object containing states.
 * @param {Object} states.storyState - Story state.
 * @param {Object[]} states.storyState.stories - All stories.
 * @param {string[]} states.archiveState - Archived story IDs.
 * @returns {Object[]} Stories that are not archived.
 */
const getReadableStories = ({ storyState, archiveState }) =>
  storyState.stories.filter(isNotArchived(archiveState));

/**
 * Get the stories fetch error.
 *
 * @param {Object} storyState - Story state.
 * @returns {Error} The story state, if any.
 */
const getFetchError = ({ storyState }) => storyState.error;

export { getReadableStories, getFetchError };
