const quoteTitle  = document.querySelector('.quote-title'),
      quoteAuthor = document.querySelector('.quote-author'),
      quoteTags   = document.querySelector('.quote-tag');

export function buildCard(result) {
  renderQuote(result.content)
  renderAuthor(result.author)
  renderTags(result.tags)
}

function renderQuote(content) {
  quoteTitle.innerHTML = content
}

function renderAuthor(content) {
  quoteAuthor.innerHTML = content
}

function renderTags(tags) {
  quoteTags.innerHTML = ''
  tags.map(tag => quoteTags.innerHTML += `<span>${tag}</span>`)
}