import * as db from './data/storage';

import * as handle from './ui/handleQuote';

const likeBtn    = document.querySelector('.btn-like'),
      dislikeBtn = document.querySelector('.btn-dislike');

db.init()
handle.displayQuote()

likeBtn.addEventListener('click', (e) => {
  e.preventDefault()
  handle.like()
})

dislikeBtn.addEventListener('click', (e) => {
  e.preventDefault()
  handle.dislike()
})