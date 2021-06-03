import * as db from './data/storage';

import * as quoteUI from './ui/handleQuote';
import * as tagsUI from './ui/handleTags';

const likeBtn    = document.querySelector('.btn-like'),
      dislikeBtn = document.querySelector('.btn-dislike');

function init() {
  db.init()
  tagsUI.displayTags()
  quoteUI.displayQuote()
}

init()

likeBtn.addEventListener('click', (e) => {
  e.preventDefault()
  quoteUI.like()
})

dislikeBtn.addEventListener('click', (e) => {
  e.preventDefault()
  quoteUI.dislike()
})