var body = document.getElementsByTagName('body')[0];
var imagewrapper = document.getElementsByClassName('main-wrapper')[0];
imagewrapper.style.width="270px";
imagewrapper.style.height="274px";
imagewrapper.style.overflow = "hidden";
imagewrapper.style.position = "relative";
var previousbutton = document.createElement("button");
var nextbutton = document.createElement("button");
previousbutton.innerHTML="previous";
nextbutton.innerHTML="next";
body.appendChild(previousbutton);
body.appendChild(nextbutton);

var imagecollection = document.createElement("div");
imagewrapper.appendChild(imagecollection)
imagecollection.style.position = "absolute";
imagecollection.style.top  = "0px";
imagecollection.style.left = "0px";	
imagecollection.style.right = "0px";



var image1 = document.createElement("img");
image1.setAttribute("src","relproject1.jpg");
imagecollection.appendChild(image1); 	
var image2 = document.createElement("img");
image2.setAttribute("src","relproject2.jpg");
imagecollection.appendChild(image2); 	

var image3 = document.createElement("img");
image3.setAttribute("src","relproject3.jpg");
imagecollection.appendChild(image3); 	

var image4 = document.createElement("img");
image4.setAttribute("src","relproject4.jpg");
imagecollection.appendChild(image4); 	

nextbutton.onclick = function()
{
	var i=0;
	function moveright(){
		
		if(i<27){
			imagecollection.style.left= parseInt(imagecollection.style.left)-10+'px';
			console.log(imagecollection.style.left);
			i++;
			a =setTimeout(function(){moveright();},20);
		}
		else{
			clearTimeout(a);
		}
	}
	moveright();

}
previousbutton.onclick = function()
{
	var i=0;
	function moveleft(){
		if(i<27){

			imagecollection.style.left= parseInt(imagecollection.style.left)+10+'px';
			console.log("r",imagecollection.style.left);
			i++;
			a =setTimeout(function(){moveleft();},20);
		}
		else{
			clearTimeout(a);
		}
	}
	moveleft();
}







