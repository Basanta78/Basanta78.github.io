var profile = {
	'Name':{
		'firstname':'Basanta',
		'lastname':'Maharjan'
	},
	'age':23,
	'married':'No',
	'education':'BE',
	'projects':['pacman','chatbot','NEE','Alumni database']
};
var mainwapper = document.getElementsByClassName('mainwrapper')[0];
var head = document.createElement('h1');
mainwapper.appendChild(head);
head.innerHTML = Object.keys(profile)[0]+":"+ profile.Name.firstname+"  " + profile.Name.lastname;
keys = Object.keys(profile);
for(var i=1;i<keys.length;i++)
{
	var para = document.createElement('p');
	para.innerHTML = keys[i]+":"+profile[keys[i]];
	mainwapper.appendChild(para);
}

