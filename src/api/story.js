const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query=';

/**
 * Fetch stories from the Hacker News API.
 *
 * @param {string} query - Search query.
 * @returns {Promise<Object>} The parsed JSON result.
 */
const fetchStories = async query => (await fetch(HN_BASE_URL + query)).json();

export { fetchStories };
