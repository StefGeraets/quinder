
import * as db from './storage'

const quoteApiUrlAll = "https://private-anon-15123e31ff-goquotes.apiary-proxy.com/api/v1/all?",
      quoteApiUrlRandom = "https://api.quotable.io/random",
      maxLength = 100

export async function getQuote(length = maxLength) {
  const response = await fetch(`${quoteApiUrlRandom}?${length}`)
  const data = await response.json()

  return data
}

