const likeBtn     = document.querySelector('.btn-like'),
      dislikeBtn  = document.querySelector('.btn-dislike');

export function handleError(err) {
  console.error("OH NO!")
  console.log(err)
  return
}

export function disableButtons() {
  likeBtn.disabled = true;
  dislikeBtn.disabled = true;
}

export function enableButtons() {
  likeBtn.disabled = false;
  dislikeBtn.disabled = false;
}