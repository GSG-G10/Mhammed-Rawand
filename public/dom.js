const searchInput = document.getElementById("searchInput");
const btnSearch = document.querySelector('#btn-search');
const content = document.querySelector('.content');

const showImage = (response) => {
  content.innerHTML = "";
  const renderedIndices = [];
  for (let i = 0; i < 9; i++) {
    const image = document.createElement('img')
    let uniqueKey;
    do {
      uniqueKey = Math.floor(Math.random() * 10)
    } while (renderedIndices.includes(uniqueKey))
    renderedIndices.push(uniqueKey)
    image.src = response.results[uniqueKey].urls.small
    image.classList.add('img');
    image.setAttribute( "alt" , "your image");
    content.appendChild(image)
  }
}

btnSearch.addEventListener('click', () => {
  fetch(`/input/${searchInput.value}`)
    .then((response) => response.json())
    .then(showImage)

})
