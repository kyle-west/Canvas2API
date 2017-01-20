/****************************************************************************
* <h1> Keyboard Class <h1>
* <h3> Created by Kyle West, 2017 </h3>
*
* <p>
*    The purpose of the Keyboard class is to establish a global listener for
*    each key on the keyboard. The developer needs to only override the
*    functions for the keys they are concerned with, and then que in when the
*    keyboard starts to listen. Just declare, override, and listen for events.
* </p>
****************************************************************************/
Keyboard.prototype = {
   /*************************************************************************
   * <h1> Constructor defined below the prototype </h1>
   * <p>
   *    Registers the gobal key codes to data variables.
   * </p>
   *************************************************************************/
   constructor: Keyboard,

   /*************************************************************************
   * <h1> Listen Function </h1>
   * <p>
   *    Binds the when.[KEY] function to the approriate key, and listens for
   *    each key to be stroked. Override the when.[KEY] function to associate
   *    actions with key events.
   * </p>
   *************************************************************************/
   listen: function () {
      var that = this; // to make 'this' object available in the function below
      function keyboardInteract(e) {
         switch(e.keyCode) {
            // ACTION KEY LISTENERS
            case that.SPACE: that.when.SPACE(); break;
            case that.ENTER: that.when.ENTER(); break;
            case that.UP: that.when.UP(); break;
            case that.DOWN: that.when.DOWN(); break;
            case that.LEFT: that.when.LEFT(); break;
            case that.RIGHT: that.when.RIGHT(); break;

            // REGULAR KEY LISTENERS
            case that.A: that.when.A(); break;
            case that.B: that.when.B(); break;
            case that.C: that.when.C(); break;
            case that.D: that.when.D(); break;
            case that.E: that.when.E(); break;
            case that.F: that.when.F(); break;
            case that.G: that.when.G(); break;
            case that.H: that.when.H(); break;
            case that.I: that.when.I(); break;
            case that.J: that.when.J(); break;
            case that.K: that.when.K(); break;
            case that.L: that.when.L(); break;
            case that.M: that.when.M(); break;
            case that.N: that.when.N(); break;
            case that.O: that.when.O(); break;
            case that.P: that.when.P(); break;
            case that.Q: that.when.Q(); break;
            case that.R: that.when.R(); break;
            case that.S: that.when.S(); break;
            case that.T: that.when.T(); break;
            case that.U: that.when.U(); break;
            case that.V: that.when.V(); break;
            case that.W: that.when.W(); break;
            case that.X: that.when.X(); break;
            case that.Y: that.when.Y(); break;
            case that.Z: that.when.Z(); break;
            case that.ZERO: that.when.ZERO(); break;
            case that.ONE: that.when.ONE(); break;
            case that.TWO: that.when.TWO(); break;
            case that.THREE: that.when.THREE(); break;
            case that.FOUR: that.when.FOUR(); break;
            case that.FIVE: that.when.FIVE(); break;
            case that.SIX: that.when.SIX(); break;
            case that.SEVEN: that.when.SEVEN(); break;
            case that.EIGHT: that.when.EIGHT(); break;
            case that.NINE: that.when.NINE(); break;

            // NUMBERPAD LISTENERS
            case that.nZERO: that.when.nZERO(); break;
            case that.nONE: that.when.nONE(); break;
            case that.nTWO: that.when.nTWO(); break;
            case that.nTHREE: that.when.nTHREE(); break;
            case that.nFOUR: that.when.nFOUR(); break;
            case that.nFIVE: that.when.nFIVE(); break;
            case that.nSIX: that.when.nSIX(); break;
            case that.nSEVEN: that.when.nSEVEN(); break;
            case that.nEIGHT: that.when.nEIGHT(); break;
            case that.nNINE: that.when.nNINE(); break;
            case that.nADD: that.when.nADD(); break;
            case that.nSUBTRACT: that.when.nSUBTRACT(); break;
            case that.nMULTIPLY: that.when.nMULTIPLY(); break;
            case that.nDIVIDE: that.when.nDIVIDE(); break;
            case that.nDOT: that.when.nDOT(); break;
         }
      }
      document.addEventListener("keydown", keyboardInteract, false);
   },

   /*************************************************************************
   * <h1> Default Stub Functions called by listener </h1>
   * <p>
   *    Stub functions to render no event action by default. Override to
   *    include your actions.
   * </p>
   *************************************************************************/
   when: {
      // action keys
      SPACE: function (){},
      ENTER: function (){},
      UP: function (){},
      DOWN: function (){},
      LEFT: function (){},
      RIGHT: function (){},

      // regulars keys
      A: function (){},
      B: function (){},
      C: function (){},
      D: function (){},
      E: function (){},
      F: function (){},
      G: function (){},
      H: function (){},
      I: function (){},
      J: function (){},
      K: function (){},
      L: function (){},
      M: function (){},
      N: function (){},
      O: function (){},
      P: function (){},
      Q: function (){},
      R: function (){},
      S: function (){},
      T: function (){},
      U: function (){},
      V: function (){},
      W: function (){},
      X: function (){},
      Y: function (){},
      Z: function (){},
      ZERO: function (){},
      ONE: function (){},
      TWO: function (){},
      THREE: function (){},
      FOUR: function (){},
      FIVE: function (){},
      SIX: function (){},
      SEVEN: function (){},
      EIGHT: function (){},
      NINE: function (){},

      // numberpad
      nZERO: function (){},
      nONE: function (){},
      nTWO: function (){},
      nTHREE: function (){},
      nFOUR: function (){},
      nFIVE: function (){},
      nSIX: function (){},
      nSEVEN: function (){},
      nEIGHT: function (){},
      nNINE: function (){},
      nDIVIDE: function (){},
      nMULTIPLY: function (){},
      nADD: function (){},
      nSUBTRACT: function (){},
      nDOT: function (){}
   }
};

/******************************************************************
* Constructor: Registers the gobal key codes.
******************************************************************/
function Keyboard() {
   // action keys
   this.ENTER = 13;
   this.SPACE = 32;
   this.LEFT = 37;
   this.UP = 38;
   this.RIGHT = 39;
   this.DOWN = 40;

   // regular Keyboard
   this.A = 65;
   this.B = 66;
   this.C = 67;
   this.D = 68;
   this.E = 69;
   this.F = 70;
   this.G = 71;
   this.H = 72;
   this.I = 73;
   this.J = 74;
   this.K = 75;
   this.L = 76;
   this.M = 77;
   this.N = 78;
   this.O = 79;
   this.P = 80;
   this.Q = 81;
   this.R = 82;
   this.S = 83;
   this.T = 84;
   this.U = 85;
   this.V = 86;
   this.W = 87;
   this.X = 88;
   this.Y = 89;
   this.Z = 90;
   this.ZERO  = 48;
   this.ONE   = 49;
   this.TWO   = 50;
   this.THREE = 51;
   this.FOUR  = 52;
   this.FIVE  = 53;
   this.SIX   = 54;
   this.SEVEN = 55;
   this.EIGHT = 56;
   this.NINE  = 57;

   // numberpad
   this.nZERO  = 96;
   this.nONE   = 97;
   this.nTWO   = 98;
   this.nTHREE = 99;
   this.nFOUR  = 100;
   this.nFIVE  = 101;
   this.nSIX   = 102;
   this.nSEVEN = 103;
   this.nEIGHT = 104;
   this.nNINE  = 105;
   this.nDIVIDE   = 111;
   this.nMULTIPLY = 106;
   this.nSUBTRACT = 109;
   this.nADD      = 107;
   this.nDOT      = 110;
}
