class purple extends BaseClass
{
    constructor(x, y,width,height)
    {
      super(x,y,30,40);
      
    }
  display()
  { 
    fill("purple");
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    
    super.display();
  }
  };