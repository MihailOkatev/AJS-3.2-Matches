import sortByHealth from '../func';

test('squad sorting', () => {
  const result = sortByHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);

  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});

test('similar health', () => {
  const result = sortByHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 10 },
  ]);

  expect(result).toEqual([
    { name: 'лучник', health: 10 },
    { name: 'маг', health: 10 },
    { name: 'мечник', health: 10 },
  ]);
});
