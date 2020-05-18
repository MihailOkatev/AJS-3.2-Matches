export default function sortByHealth(sqaude) {
  const copyOfSquade = sqaude.slice();
  copyOfSquade.sort((a, b) => {
    if (a.health < b.health) {
      return 1;
    }
    if (a.health > b.health) {
      return -1;
    }
    if (a.health === b.health) {
      const aName = a.name;
      const bName = b.name;
      if (aName > bName) {
        return 1;
      }
      if (aName < bName) {
        return -1;
      }
    }
    return 'finish';
  });
  return copyOfSquade;
}
