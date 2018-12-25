const isNotArchived = archivedIds => story =>
  archivedIds.indexOf(story.objectId) === -1;

const getReadableStories = ({ storyState, archiveState }) =>
  storyState.filter(isNotArchived(archiveState));

export { getReadableStories };
