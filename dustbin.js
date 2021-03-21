class Dustbin {
	constructor(x,y){
	   var options = {
		   isStatic:true

	   }
	   this.x = x
	   this.y = y
	   this.DustbinWidth = 200
	   this.DustbinHeight = 100
	   this.wallThickness = 20
	   this.angle = 0
	   this.bottomBody = Bodies.rectangle(x,y,this.DustbinWidth,this.wallThickness,options)
	   this.leftBody = Bodies.rectangle(this.x-this.DustbinWidth/2,this.y-this.DustbinHeight/2,this.wallThickness,this.DustbinHeight,options);
	   Matter.Body.setAngle(this.leftBody,this.angle);
	   this.rightBody = Bodies.rectangle(this.x+this.DustbinWidth/2,this.y-this.DustbinHeight/2,this.wallThickness,this.DustbinHeight,options);
	   Matter.Body.setAngle(this.rightBody,-1*this.angle);
	   World.add(world,this.bottomBody);
	   World.add(world,this.leftBody);
	   World.add(world,this.rightBody);
   }
   display(){
	   var posBottom = this.bottomBody.position
	   var posLeft = this.leftBody.position
	   var posRight = this.rightBody.position
	   push();
	   translate(posLeft.x,posLeft.y)
	   angleMode(RADIANS)
	   fill(255);
	   stroke(255);
	   rotate(this.angle)
	   rect(0,0,this.wallThickness,this.DustbinHeight)
	   pop();

	   push();
	   translate(posRight.x,posRight.y)
	   angleMode(RADIANS)
	   fill(255);
	   stroke(255);
	   rotate(-1*this.angle)
	   rect(0,0,this.wallThickness,this.DustbinHeight)
	   pop();

	   push();
	   translate(posBottom.x,posBottom.y)
	   angleMode(RADIANS)
	   fill(255);
	   stroke(255);
	   rect(0,0,this.DustbinWidth,this.wallThickness)
	   pop();
   }
   
}