class block extends BaseClass
{
    constructor(x, y,width,height)
    {
      super(x,y,30,40);
      
    }
  display()
  { 
    fill("yellow");
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    
    super.display();
  }
  };
  