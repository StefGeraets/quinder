import * as db from '../data/storage';
import * as quotes from '../data/quotes';

import * as utils from '../utils/utils'

import * as quoteUI from './quoteDisplay'
import * as tagUI from './handleTags'

export async function displayQuote() {
  await quotes.getQuote()
    .then((data) => {
      db.setCurrent(data)
      quoteUI.buildCard(data)
      utils.enableButtons()
    })
    .catch(utils.handleError)
}

export function like() {
  utils.disableButtons()
  const currentQuote = db.getCurrent()
  db.saveQuote(currentQuote)
  displayQuote()
  quoteUI.addQuoteItem(currentQuote)
}

export function dislike() {
  utils.disableButtons()
  const currentQuote = db.getCurrent()
  db.rejectQuote(currentQuote.tags)
  tagUI.removeTag(currentQuote.tags)
  displayQuote()
}