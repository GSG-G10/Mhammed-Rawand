const input = document.getElementById("searchInput");
input.oninput = () => {
  console.log("in search");
  console.log("input", input.value);
  const value = input.value;
  fetch(`/search?query=${value}`)
    .then((response) => response.json())
    .then((response) => {
      // const resultsDiv = document.getElementById("");
      // resultsDiv.appendChild()
      console.log("response", response);
    });
};
