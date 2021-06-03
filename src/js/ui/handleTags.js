import * as db from '../data/storage'
import * as tagsData from '../data/tags'

const tagList = document.querySelector('.tags-list');

export function displayTags() {
  tagsData.setTags()
  addTags()
}

function addTags() {
  const allTags = db.getAllTags()
  tagList.insertAdjacentHTML('afterbegin', allTags.map(tag => `<li>${tag}</li>`).join(''))
}
