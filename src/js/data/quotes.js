const quoteApiUrlRandom = "https://api.quotable.io/random",
      maxLength = 100

export async function getQuote(length = maxLength) {
  const response = await fetch(`${quoteApiUrlRandom}?${length}`)
  const data = await response.json()

  return data
}

