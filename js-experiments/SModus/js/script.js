var searchBox = document.getElementsByClassName("search-box")[0];
searchBox.onclick = function (){
  var inputText = document.getElementsByTagName("input")[0];
  if(inputText.style.display === "none"){
    inputText.style.display = "block";
  }
  else {
    inputText.style.display = "none";
  }
}
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
var projectLeftArrow = document.getElementsByClassName("ad-left-arrow")[1];
var projectRightArrow = document.getElementsByClassName("ad-right-arrow")[1];

projectRightArrow.onclick = function (){
  if(counter+7 <=projectImagesArray.length)
  {


  for(var j = counter; j<=counter+3; j++){
    if(projectImagesArray[j])
    {
    projectImagesArray[j].parentNode.style.display = "none";
  }
  }
  for(var k =counter+4; k <= counter+7; k++){
    if(projectImagesArray[k])
    {
    unfade(projectImagesArray[k].parentNode);
  }
  }
  projectImagesArray[counter+4].parentNode.style.marginLeft = "0px";
  projectImagesArray[counter+7].parentNode.style.marginLeft = "0px";
  counter+=4;
}
}
projectLeftArrow.onclick = function(){
  if(counter>=4){
  for(var j = counter-4; j<=counter-1; j++){
    unfade(projectImagesArray[j].parentNode);
  }
  for(var k =counter; k <= counter+3; k++){
    projectImagesArray[k].parentNode.style.display = "none";

  }
  projectImagesArray[counter-4].parentNode.style.marginLeft = "0px";
  projectImagesArray[counter-1].parentNode.style.marginLeft = "0px";
  counter-=4;
}
}


var projectImagesArray = document.getElementsByClassName("related-project-images");
for(var i = 0 ; i<projectImagesArray.length; i++){
  projectImagesArray[i].parentNode.style.display = "none";
}
let counter = 0;
var init = function(){
  for(var j = 0; j<4; j++){
    projectImagesArray[j].parentNode.style.display = "block";

  }
  projectImagesArray[0].parentNode.style.marginLeft = "0px";
  projectImagesArray[3].parentNode.style.marginLeft = "0px";
}
init();

sliderObject = {
  "item1":{
    "title":"Donec faucibus ultricies congue",
    "images":["mountain1","mountain2","mountain3"],
  },
  "item2":{
    "title":"Mountains2",
    "images":["trees1","trees2","trees3"],
  },
  "item3":{
    "title":"Mountains3",
    "images":["car1","car2","car3"],
  }
}

var titleLeftArrow = document.getElementsByClassName("ad-left-arrow")[0];
var titleRightArrow = document.getElementsByClassName("ad-right-arrow")[0];
var sliderLeftArrow = document.getElementsByClassName("slider-left")[0];
var sliderRightArrow = document.getElementsByClassName("slider-right")[0];
var sliderBar = document.getElementsByClassName('slider-bar')[0].getElementsByTagName('ul')[0];
var imageCollection = document.createElement("div");
var imageWrapper = document.getElementsByClassName("slider")[0];
imageWrapper.appendChild(imageCollection);
imageCollection.style.position = "absolute";
imageCollection.style.top  = "0px";
imageCollection.style.left = "0px";
imageCollection.style.right = "0px";


var titleCounter = 0;
var objkeys = Object.keys(sliderObject);
var addName = document.getElementsByClassName("ad-name")[0];

var initSlider  = function(){
  imgs = sliderObject[objkeys[titleCounter]].images;
  imageCollection.style.width = sliderObject[objkeys[titleCounter]].images.length*1170+'px';
  for ( var i=0;i<imgs.length;i++){
    var image = document.createElement('img');
    var list = document.createElement('li');
    var slide = document.createElement('span');
    slide.setAttribute("class","slide-bar");
    image.setAttribute("src",'images/'+imgs[i]+".jpg");
    imageCollection.appendChild(image);
  }
}
initSlider();
titleRightArrow.onclick = function(){
    titleCounter++;
  if(titleCounter<=objkeys.length-1){

  addName.innerHTML =sliderObject[objkeys[titleCounter]].title;
  imgs = sliderObject[objkeys[titleCounter]].images;
  imageCollection.style.width = sliderObject[objkeys[titleCounter]].images.length*1170+'px';


while (imageCollection.hasChildNodes()) {
    imageCollection.removeChild(imageCollection.lastChild);
}


  for ( var i=0;i<imgs.length;i++){
    var image = document.createElement('img');
    image.setAttribute("src",'images/'+imgs[i]+".jpg");
    imageCollection.appendChild(image);
  }
  for ( var i=0;i<imgs.length;i++){
    var image = document.createElement('img');
    var list = document.createElement('li');
    var slide = document.createElement('span');
    slide.setAttribute("class","slide-bar");
    image.setAttribute("src",'images/'+imgs[i]+".jpg");
    imageCollection.appendChild(image);

  }
}
else {
  titleCounter--;
}
}
titleLeftArrow.onclick = function() {
  titleCounter--;
  if(titleCounter>=0){

  addName.innerHTML =sliderObject[objkeys[titleCounter]].title;
  console.log(titleCounter);
  imgs = sliderObject[objkeys[titleCounter]].images;
  imageCollection.style.width = sliderObject[objkeys[titleCounter]].images.length*1170+'px';



while (imageCollection.hasChildNodes()) {
    imageCollection.removeChild(imageCollection.lastChild);
}


  for ( var i=0;i<imgs.length;i++){
    var image = document.createElement('img');
    image.setAttribute("src",'images/'+imgs[i]+".jpg");
    imageCollection.appendChild(image);
  }
  while (sliderBar.hasChildNodes()) {
      sliderBar.removeChild(sliderBar.lastChild);
  }
  for ( var i=0;i<imgs.length;i++){
    var image = document.createElement('img');
    var list = document.createElement('li');
    var slide = document.createElement('span');
    slide.setAttribute("class","slide-bar");
    image.setAttribute("src",'images/'+imgs[i]+".jpg");
    imageCollection.appendChild(image);
  }
}
else {
  titleCounter++;
}
}


sliderRightArrow.onclick = function()
{
	var i=0;
	counter++;
	console.log(counter);
	if (counter<=imgs.length-1)
	{
moveright();
	}
  else{
    counter = imgs.length-1;
  }
	function moveright(){

		if(i<117)
		{
			imageCollection.style.left= parseInt(imageCollection.style.left)-10+'px';
			i++;
			a =setTimeout(moveright,20);
		}
		else{
			clearTimeout(a);
		}
	}


}

sliderLeftArrow.onclick = function()
{
	var i=0;
	counter--;
	console.log(counter);
		if (counter>=0)
	{
	moveleft();
	}
  else{
    counter=0;
  }
	function moveleft()
	{
		if(i<117)
		{

			imageCollection.style.left= parseInt(imageCollection.style.left)+10+'px';
			i++;
			a =setTimeout(moveleft,20);
		}
		else
		{
			clearTimeout(a);
		}
	}

}
