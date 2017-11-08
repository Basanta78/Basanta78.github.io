var data=[
{top:2, left:5},
{top:40	, left:9},
{top:40, left:80},
{top:90, left:90},
{top:200, left:200},
{top:300, left:300}
];

var box = document.getElementsByClassName('box')[0];
var body = document.getElementsByTagName('body')[0];
var list = document.createElement("ul");
body.appendChild(list);
console.log(box);	

for(var i =0;i<10;i++)
{
	var randomleft = Math.floor(Math.random() * 500) + 1;
	var randomtop = Math.floor(Math.random() * 500) + 1;
	var newelement= document.createElement("div");
	newelement.style.position="absolute";
	newelement.style.top= randomtop+"px";
	newelement.style.left=randomleft+"px";
	newelement.style.background="blue";
	newelement.style.width="10px";
	newelement.style.height="10px";
	box.appendChild(newelement);

	newelement.onclick = function(){
		var top = this.style.top;
		var left = this.style.left;
		var li = document.createElement("li");
		li.innerHTML= top +" "+ left;
		list.appendChild(li);
		box.removeChild(this);
	};
	
	
}







