let searchBox = document.getElementsByClassName("search-box")[0];
searchBox.onclick = function (){
  let inputText = document.getElementsByTagName("input")[0];
  if(inputText.style.display === "none"){
    inputText.style.display = "block";
  }
  else {
    inputText.style.display = "none";
  }
}
function unf