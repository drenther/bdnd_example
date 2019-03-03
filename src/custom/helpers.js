// the Knuth shuffle algorithm
export function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function calculatePoints(heroes, comic) {
  const groupingPoints = heroes.reduce(
    (score, hero) => (hero.comic === comic ? score + 10 : score),
    0
  );

  const sortedHeroes = heroes.sort((a, b) => (a.name < b.name ? -1 : 1));

  // crude sorting score evaluator
  const sortingPoints = heroes.reduce((score, { name }, index) => {
    const idealScore = 10;
    const penalty = Math.abs(index, sortedHeroes.findIndex(hero => hero.name === name));
    return score + (idealScore - penalty);
  }, 0);

  return groupingPoints + sortingPoints;
}
