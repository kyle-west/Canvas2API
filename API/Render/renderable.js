/** *************************************************************************
* <h1> Renderable Class <h1>
* <h3> Created by Kyle West, 2017 </h3>
*
*                  !!!!!  DOCUMENTATION INCOMPLETE !!!!!
*                                Coming soon.
*
****************************************************************************/
function Renderable (loc, draw) {
   if (!loc) loc = new Location(0,0);
   if (!draw) draw = function(){};
   this.location = loc;
   this.draw = draw;
}

Renderable.prototype = {
   constructor: Renderable
};
