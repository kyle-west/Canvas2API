/** *************************************************************************
* <h1> Location Class <h1>
* <h3> Created by Kyle West, 2017 </h3>
*
*                  !!!!!  DOCUMENTATION INCOMPLETE !!!!!
*                                Coming soon.
*
****************************************************************************/
function Location(x,y,dx,dy) {
   if (!x) x = 0;
   if (!y) y = 0;
   if (!dx) dx = 0;
   if (!dy) dy = 0;
   this.x = x;
   this.y = y;
   this.dx = dx;
   this.dy = dy;
}

Location.prototype = {
   constructor:Location,
   getX: function() {
      this.x += this.dx;
      return this.x;
   },
   getY: function() {
      this.y += this.dy;
      return this.y;
   }
};
