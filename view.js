
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.rect(this.leftUpPointX, this.leftUpPointY, this.leftUpPointX + this.width,   this.leftUpPointY + this.height);
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    //TODO Manager color
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
  