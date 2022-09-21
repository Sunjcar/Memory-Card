function RandomizeArray(array) {
  return [...array].sort(() => Math.random() -.5)
}

export default RandomizeArray