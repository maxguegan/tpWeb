
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.strokeWidth = this.lineWidth;
    ctx.beginPath();
    ctx.rect(this.leftUpPointX, this.leftUpPointY, this.width, this.height);
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.moveTo(this.startPointX, this.startPointY);
    ctx.lineTo(this.endPointX, this.endPointY);
    ctx.stroke();
  };
  
  Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.formes.forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };
  

  function updateShapeList(addedShape, shapeNumber) {
    var shapeList = document.getElementById('shapeList');
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode((addedShape === editingMode.line ? 'ligne' : 'rectangle') + ' ' + shapeNumber));
    entry.innerHTML += '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-remove-sign"></span></button>';

    shapeList.appendChild(entry);
  }