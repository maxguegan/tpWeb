
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	this.startX = 0;
  this.startY = 0;

  this.endX = 0;
  this.endY = 0;

  this.pressed = false;
	// Developper les 3 fonctions gérant les événements

  this.onMousedown = (evt) => {

    this.pressed = true;
    startCoordinate = getMousePosition(canvas, evt);
    this.startX = startCoordinate.x;
    this.startY = startCoordinate.y;
    this.endX = startCoordinate.x;
    this.endY = startCoordinate.y;
    interactor.onInteractionStart(this);
    console.log('coord départ :' + this.startX + ', ' + this.startY);
  };
  
  
   
  this.onMouseMove = (evt) => { 
    if(!this.pressed)return;
    
    currentCoordinate = getMousePosition(canvas, evt);
    this.endX = currentCoordinate.x;
    this.endY = currentCoordinate.y; 
    interactor.onInteractionUpdate(this);
  };

  this.onMouseUp = () => { 
    if(!this.pressed)return;
    interactor.onInteractionEnd(this);
    this.pressed = false;
    console.log('coord fin :' + this.endX + ', ' + this.endY);
   };

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.onMousedown, false);
  canvas.addEventListener('mousemove', this.onMouseMove, false);
  canvas.addEventListener('mouseup', this.onMouseUp, false);


};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



