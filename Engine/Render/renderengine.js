/** *************************************************************************
* <h1> RenderEngine Class <h1>
* <h3> Created by Kyle West, 2017 </h3>
*
*                  !!!!!  DOCUMENTATION INCOMPLETE !!!!!
*                                Coming soon.
*
* <p>
*    The purpose of the RenderEngine class is to provide a graphics engine
*    that renders and animates a group of objects on screen.
*    The wrapping is automatically enabled, so that objects are kept on screen.
* </p>
****************************************************************************/
function RenderEngine (scrn) {
   if (!scrn) {
      scrn = new Screen(500,250);
      scrn.setup();
   }
   this.screen = scrn;
   this.renders = [];
   this.context = scrn.getContext();
   this.wrapingEnabled = true;
}

RenderEngine.prototype = {
   constructor: RenderEngine,
   render: function() {
      for (var i = 0; i < this.renders.length; i++) {
         if (this.wrapingEnabled)
            this.wrapIfNeeded(this.renders[i].location);
         this.renders[i].draw();
      }
   },
   animate: function () {
      var scene = this;
      function animationScene() {
         scene.screen.clear();
         scene.render();
         setTimeout(animationScene, 66);
      }
      animationScene();
   },
   bufferAdd: function (rend) {
      this.renders.push(rend);
   },
   bufferRemove: function(rend) {
      for (var i = 0; i < this.renders.length; i++) {
         if (rend === this.renders[i]) {
            this.renders.splice(i,1);
            break;
         }
      }
   },
   wrapIfNeeded: function (loc) {
      // bounds
      var north = this.screen.height - (this.screen.height - this.screen.y);
      var south = -north;
      var east = this.screen.width - this.screen.x;
      var west = -east;

      if (loc.x > east) loc.x = west;
      if (loc.x < west) loc.x = east;
      if (loc.y > north) loc.y = south;
      if (loc.y < south) loc.y = north;
   }
};
