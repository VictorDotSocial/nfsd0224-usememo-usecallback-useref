const shuffle = (array) => {
  const shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements shuffledArray[i] and shuffledArray[j]
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default shuffle;
