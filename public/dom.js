const searchInput = document.getElementById("searchInput");
const btnSearch = document.querySelector('#btn-search');
 const content =document.querySelector('.content');


 const showImage = (response)=>{
   content.innerHTML=''
   const image = document.createElement('img')
   image.src= response.results[1].urls.small
   image.classList='img'
   content.appendChild(image)
}

btnSearch.addEventListener('click',()=>{
  fetch(`/input/${searchInput.value}`)
  .then((response) => response.json())
  .then(showImage)
  
    })


  

