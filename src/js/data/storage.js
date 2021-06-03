export function init() {
  localStorage.setItem('liked', JSON.stringify([]))
  localStorage.setItem('disliked', JSON.stringify([]))
}

export function setCurrent(quote) {
  localStorage.setJSON('current', quote)
}

export function getCurrent() {
  return localStorage.getJSON('current')
}

export function saveQuote(quote) {
  const likes = localStorage.getJSON('liked')
  likes.push(quote);
  localStorage.setJSON('liked', likes)
}

export function rejectQuote(tags) {
  const dislikes = localStorage.getJSON('disliked');
  
  tags.map(tag => {
    const existingTag = dislikes.find((obj) => obj.name === tag);
    let object = {
      name: tag,
      count: 1
    }

    if (existingTag) {
      const index = dislikes.findIndex(obj => obj.name === tag)
      dislikes[index].count++
    } else {
      dislikes.push(object)
    }
  })

  localStorage.setJSON('disliked', dislikes)
}

export function getDisliked() {
  return localStorage.getJSON('disliked')
}

export function setTags(tags) {
  const tagsArray = tags.map(tag => tag.name)
  localStorage.setJSON('tags', tagsArray)
}

export function getTags() {
  return localStorage.getJSON('tags')
}

Storage.prototype.setJSON = function(key, value) {
  this.setItem(key, JSON.stringify(value))
}

Storage.prototype.getJSON = function(key) {
  let value = this.getItem(key)
  return value && JSON.parse(value)
}