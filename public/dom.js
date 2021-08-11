const searchInput = document.getElementById("searchInput");
const btnSearch = document.querySelector('#btn-search');
 const content =document.querySelector('.content');

 const showImage = (response)=>{
   const image = document.createElement('img')
   image.src= response.results[1].urls.small
   content.appendChild(image)
}

btnSearch.addEventListener('click',()=>{
  fetch(`/input/${searchInput.value}`)
  .then((response) => response.json())
  .then(showImage)
  
    })


  

