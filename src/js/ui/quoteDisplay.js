const quoteTitle  = document.querySelector('.quote-title'),
      quoteAuthor = document.querySelector('.quote-author'),
      quoteTags   = document.querySelector('.quote-tag'),
      quoteList   = document.querySelector('.quote-list');

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

export function addQuoteItem(content) {
  const template = quoteListTemplate(content)
  quoteList.insertAdjacentHTML('afterbegin', template)
}

function quoteListTemplate(content) {
  return `
    <article class="quote-item">
      <h3>${content.content}</h3>
      <footer>
        <em>${content.author}</em>
        <ul>
          ${content.tags.map(tag => `<li>${tag}</li>`)}
        </ul>
      </footer>
    </article>
  `
}