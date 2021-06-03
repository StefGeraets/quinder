import * as db from '../data/storage'
import * as tagsData from '../data/tags'

const tagList = document.querySelector('.tags-list');

export function displayTags() {
  tagsData.setTags()
  showTags()
}

function showTags() {
  const allTags = db.getTags()
  tagList.insertAdjacentHTML('afterbegin', allTags.map(tag => `<li>${tag}</li>`).join(''))
}

export function removeTag(tags) {
  const currentTags = db.getTags()
  let tagsRemoved = currentTags
  if (currentTags.length != 1) {
    tagsRemoved = currentTags.filter(val => !tags.includes(val))
  }

  localStorage.setItem('tags', JSON.stringify(tagsRemoved))
  tagList.innerHTML = ''
  showTags()
}
