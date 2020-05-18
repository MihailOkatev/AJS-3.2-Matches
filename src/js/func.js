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
      let aName = a.name;
      let bName = b.name;
      if (aName > bName) {
        return 1;
      }
      if (aName < bName) {
        return -1;
      }
    }
  });
  return copyOfSquade;
}
