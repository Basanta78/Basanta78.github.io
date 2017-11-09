var data = [
   {
       tagName: 'div',
       className: 'test-class',
       styles: {
           width: "100px",
           height: "100px",
           backgroundColor: 'red'
       },
       children: [
           {
               tagName: 'div',
               className: 'box',
               styles: {
                   width: "50px",
                   height: "50px",
                   backgroundColor: 'blue'
               },
           },
           {
               tagName: 'div',
               className: 'box',
               styles: {
                   width: "50px",
                   height: "50px",
                   backgroundColor: 'brown',
                   float: 'right'
               },
           },
           {
               tagName: 'div',
               className: 'box',
               styles: {
                   width: "50px",
                   height: "50px",
                   backgroundColor: 'yellow',
                   float: 'left'
               },
           }
       ]
   }
];

var main = document.getElementsByClassName('mainwrapper')[0];
var objectkeys = Object.keys(data[0]);
var createtag = function(parent,obj) {
  var objectkeys = Object.keys(obj);
  for(var i=0;i<objectkeys.length;i++){
  if(objectkeys[i] == "tagName"){
    var tag = document.createElement(obj[objectkeys[i]]);
  }
  else if(objectkeys[i] == "className"){
    tag.setAttribute('Class',obj[objectkeys[i]])
  }
  else if(objectkeys[i] == "styles"){
    var csstagkeys = Object.keys(obj[objectkeys[i]]);
    for( var k = 0;k<csstagkeys.length;k++){
      tag.style[csstagkeys[k]] = obj[objectkeys[i]][csstagkeys[k]];
    }
  }
  else if(objectkeys[i] == "children"){
    for(var j=0;j<obj[objectkeys[i]].length;j++){
      createtag(tag,obj[objectkeys[i]][j])
    }
  }
  parent.appendChild(tag);

  }
}
createtag(main,data[0]);

