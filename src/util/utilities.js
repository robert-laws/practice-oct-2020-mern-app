export const checkGroupNameMatch = (groupName) => {
  if (
    groupName !== 'equipment' &&
    groupName !== 'software' &&
    groupName !== 'learning'
  ) {
    return true;
  } else {
    return false;
  }
};
