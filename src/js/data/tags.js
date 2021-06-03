import * as db from './storage'

import { handleError } from '../utils/utils'

const quoteApiUrlTags = "https://api.quotable.io/tags"

async function getTags() {
  const response = await fetch(quoteApiUrlTags)
  const data = await response.json()

  return data
}

export async function setTags() {
  await getTags()
    .then((data) => {
      db.setTags(data)
    })
    .catch(handleError)
}

