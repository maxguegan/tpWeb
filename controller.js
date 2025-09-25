
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	var butRect = document.getElementById('butRect');
	var butLine = document.getElementById('butLine');
	var spinnerWidth = document.getElementById('spinnerWidth');
	var colour = document.getElementById('colour');


	butRect.addEventListener("click", ()=>{this.currEditingMode = editingMode.rect}, false);
	butLine.addEventListener("click", ()=>{this.currEditingMode = editingMode.line}, false);
	spinnerWidth.addEventListener("input", (elt)=>{this.currLineWidth = elt.target.value}, false);
	colour.addEventListener("input", (elt)=>{this.currColour = elt.target.value}, false);
	
	new DnD(canvas, this);

	this.onInteractionStart = (DnD) => {
		console.log(this.currLineWidth);
		this.currentShape = this.currEditingMode === editingMode.line ? new Line(DnD.startX, DnD.startY, DnD.endX, DnD.endY, this.currLineWidth, this.currColour) 
		: new Rectangle(DnD.startX, DnD.startY, 0, 0, this.currLineWidth, this.currColour);
		this.currentShape.paint(ctx);
	};
	this.onInteractionUpdate = (DnD) => {
		if(this.currEditingMode === editingMode.line){
			this.currentShape.startPointX = DnD.startX;
			this.currentShape.startPointY = DnD.startY;
			this.currentShape.endPointX = DnD.endX;
			this.currentShape.endPointY = DnD.endY;
		} else {
			this.currentShape.leftUpPointX = DnD.startX;
			this.currentShape.leftUpPointY = DnD.startY;
			this.currentShape.width = DnD.endX - DnD.startX;
			this.currentShape.height = DnD.endY - DnD.startY;
		}
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	};
	this.onInteractionEnd = (DnD) => {
		//Pas sûr
		drawing.formes.push(this.currentShape);
		updateShapeList(ctx, this.currEditingMode, drawing);
		this.currentShape = 0;
	};
	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
};


