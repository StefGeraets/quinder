import * as db from '../data/storage';
import * as quotes from '../data/quotes';

import { handleError } from '../utils/utils'

import * as ui from './quoteDisplay'

export async function displayQuote() {
  await quotes.getQuote(100)
    .then((data) => {
      db.setCurrent(data)
      ui.buildCard(data)
    })
    .catch(handleError)
}

export function like() {
  const currentQuote = db.getCurrent()
  db.saveQuote(currentQuote)
  displayQuote()
}

export function dislike() {
  const currentQuote = db.getCurrent()
  db.rejectQuote(currentQuote.tags)
  displayQuote()
}