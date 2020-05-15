export default function sortByHealth(sqaude) {
  const copyOfSquade = sqaude.slice();
  copyOfSquade.sort((a, b) => (a.health < b.health ? 1 : -1));
  return copyOfSquade;
}
