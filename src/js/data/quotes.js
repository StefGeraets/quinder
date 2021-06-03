import { getTags } from './storage';

const quoteApiUrlRandom = "https://api.quotable.io/random"

export async function getQuote() {
  const tagsQuery = getTags()
  const response = await fetch(`${quoteApiUrlRandom}?tags=${tagsQuery.map(tag => tag).join('|')}`)
  const data = await response.json()

  return data
}

