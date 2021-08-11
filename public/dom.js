const searchInput = document.getElementById("searchInput");
const btnSearch = document.querySelector('#btn-search');
 const content =document.querySelector('.content');

 const showImage = (results)=>{
  const result =results.urls.raw;
  for(let i =0 ; i<10 ;i++){
  const image = document.createElement('img')
  age.src= result[i].urls.raw
  content.appendChild('image')
}

}

btnSearch.addEventListener('click',()=>{
 // e.preventDefault();
  fetch(`/input?query=${searchInput.value}`)
  .then((response) => response.json())
 .then(showImage)
 .catch((err)=>console.log(err))
    });

// input.oninput = () => {
//   console.log("in search");
//   console.log("input", input.value);
//   const value = input.value;
//   fetch(`/search?query=${value}`)
//     .then((response) => response.json())
//     .then((response) => {
//       // const resultsDiv = document.getElementById("");
//       // resultsDiv.appendChild()
//       console.log("response", response);
//     });
// };
