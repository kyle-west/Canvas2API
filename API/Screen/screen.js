/** *************************************************************************
* <h1> Screen Class <h1>
* <h3> Created by Kyle West, 2017 </h3>
*
* <p>
*    The purpose of the Screen class is to manage the canvas in a practical
*    and conventional way. It changes the plotting paradigm and also offers
*    helpful drawing tools (grid and origin markers) to make my life (and
*    possibly other people's lives) much easier.
* </p>
*
* <p>
*    Methods include: setUp, normalize, centerOrigin, showGrid, showOrigin,
*                     getContext, x, y
* </p>
* <p> Data includes: width, height, canvas </p>
****************************************************************************/

/** *************************************************************************
* <h1> Constructor for the Screen Class </h1>
* @constructor
* @param x, the width of the canvas element
* @param y, the height of the cnavas element
****************************************************************************/
function Screen (w,h,x,y) {
   if (!w) w = 400;
   if (!h) h = 200;
   if (!x) x = 0;
   if (!y) y = 0;
   this.width = w;
   this.height = h;
   this.x = x;
   this.y = y;
}

/** *************************************************************************
* <h1> Prototype for the Screen Class </h1>
* <p> Note: the global var 'context' is updated through the modifiers </p>
****************************************************************************/
Screen.prototype = {
   /** **********************************************************************
   * <h1> Constructor tied in for the Screen Class Defined Above</h1>
   *************************************************************************/
   constructor: Screen,

   /** **********************************************************************
   * <h1> Background Function </h1>
   * <p> Changes the background color for the screen </p>
   * @param color, the color to change the background to.
   *************************************************************************/
   background: function (color) {
      this.backgroundColor = color;
      this.canvas.style.backgroundColor = color;
   },

   /** **********************************************************************
   * <h1> Clear Function </h1>
   * <p> Removes all visible elements from the canvas </p>
   *************************************************************************/
   clear: function () {
      this.getContext().clearRect(0, 0, this.width, this.height);
      this.getContext().clearRect(0, 0, -this.width, this.height);
      this.getContext().clearRect(0, 0, this.width, -this.height);
      this.getContext().clearRect(0, 0, -this.width, -this.height);
   },

   /** **********************************************************************
   * <h1> Set Up Function </h1>
   * <p>
   *    setup() changes the size and paradigm of the canvas configuration.
   *    By default it will select the 2D context on the generic canvas element
   *    with the ID of 'canvas'. The screen will also be normalized with the
   *    origin at the bottom left corner.
   * </p>
   * @param  id, the ID of the canvas element we are screening
   * @param  type, the kind of context we are wanting, '2d', 'webgl', etc.
   * @param  center, boolean value if the client wants to center the origin
   * @return context, though not returned, it is globally updated.
   *************************************************************************/
   setup: function (id,type,center) {
      if (!id) id = 'canvas'; // default element to screen
      if (!type) type = '2d'; // default context
      this.canvas = document.getElementById(id);
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      if (this.backgroundColor)
      this.canvas.style.backgroundColor = this.backgroundColor;
      context = this.canvas.getContext(type);
      if (!center && (this.x != 0 || this.y != 0))
      this.centerOrigin(this.x,this.y);
      else if (center) this.centerOrigin();
      else this.normalize();
   },

   /** **********************************************************************
   * <h1> Get Conext Function </h1>
   * <p>
   *    Returns the current conext this screen is working with. Useful only
   *    when working with multiple screens. Also changes the context.
   * </p>
   * @param  type, the kind of context we are wanting, '2d', 'webgl', etc.
   * @return context, though not returned, it is globally updated.
   *************************************************************************/
   getContext: function (type) {
      if (!type) type = '2d'; // default context
      context = this.canvas.getContext(type);
      return this.canvas.getContext(type);
   },

   /** **********************************************************************
   * <h1> Normalize Function </h1>
   * <p>
   *    Changes the paradigm of the screen. Transforms screen to the regular
   *    mathematically conventional (x,y) plotting orientation. Centers origin
   *    at the bottom left of the sreen by default.
   * </p>
   *************************************************************************/
   normalize: function () {
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.translate(0,this.height);
      context.scale(1,-1);
      this.x = 0;
      this.y = 0;
   },

   /** ***********************************************************************
   * <h1> Center Origin Function </h1>
   * <p>
   *    Changes the paradigm of the screen. Transforms screen to the regular
   *    mathematically conventional (x,y) plotting orientation. Centers origin
   *    at the middle of the sreen by default.
   * </p>
   * @param x, optional, alternative x coordinate to center horizontally
   * @param y, optional, alternative y coordinate to center vertically
   *************************************************************************/
   centerOrigin: function (x,y) {
      if (!x) x = this.width/2;  // center middle horizontally
      if (!y) y = this.height/2; // center middle vertically
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.translate(x,y);
      context.scale(1,-1);
      this.x = x;
      this.y = y;
   },

   /** **********************************************************************
   * <h1> Show Origin Function </h1>
   * <p> Displays the origin marker </p>
   * @param color, optional, change the color of the marker.
   *************************************************************************/
   showOrigin: function (color) {
      if (!color) color = 'blue'; // default color
      var temp_col = context.strokeStyle; // remember drawing color
      var temp_lw  = context.lineWidth;   // remember line width
      context.beginPath();
      context.arc(0,0,10,0,2*Math.PI);
      context.arc(0,0,1,0,2*Math.PI);
      context.moveTo(15,0);
      context.lineTo(0,0);
      context.lineTo(0,15);
      context.strokeStyle = color;
      context.lineWidth = 2;
      context.stroke();
      context.strokeStyle = temp_col; // restore color
      context.lineWidth = temp_lw;    // restore line width
   },

   /** **********************************************************************
   * <h1> Show Grid Function </h1>
   * <p> Displays grid lines from the origin </p>
   * @param inc, the increment for each grid line, 10px by default.
   * @param color, the color we want our grid lines to be drawn in.
   *************************************************************************/
   showGrid: function (inc, color) {
      var temp_col = context.strokeStyle; // remember drawing color
      var temp_lw  = context.lineWidth;   // remember line width
      if (!inc) inc = 10;
      if (!color) color = 'cyan';
      context.beginPath();

      // Quadrant I
      for (var i = 0; i <= this.width; i+=inc) {
         context.moveTo(i,0);
         context.lineTo(i,this.height);
      }
      for (var i = 0; i <= this.height; i+=inc) {
         context.moveTo(0,i);
         context.lineTo(this.width,i);
      }

      // Quadrant II
      for (var i = 0; i >= -this.width; i-=inc) {
         context.moveTo(i,0);
         context.lineTo(i,this.height);
      }
      for (var i = 0; i >= -this.height; i-=inc) {
         context.moveTo(0,-i);
         context.lineTo(-this.width,-i);
      }

      // Quadrant III
      for (var i = 0; i >= -this.width; i-=inc) {
         context.moveTo(i,0);
         context.lineTo(i,-this.height);
      }
      for (var i = 0; i >= -this.height; i-=inc) {
         context.moveTo(0,i);
         context.lineTo(-this.width,i);
      }

      // Quadrant IV
      for (var i = 0; i >= -this.width; i-=inc) {
         context.moveTo(-i,0);
         context.lineTo(-i,-this.height);
      }
      for (var i = 0; i >= -this.height; i-=inc) {
         context.moveTo(0,i);
         context.lineTo(this.width,i);
      }

      context.lineWidth = .5;
      context.strokeStyle = color;
      context.stroke();

      context.strokeStyle = temp_col; // restore color
      context.lineWidth = temp_lw;    // restore line width
   }
};
