class World{
	constructor (element) {
		this.dx = 1;
		this.classWorldElement = element;
	}
	moveWorld(){
		this.dx++;
		this.classWorldElement.style.backgroundPositionX = "right "+this.dx+"px"; 
	}
}
