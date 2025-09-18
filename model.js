
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

class Drawing {
    constructor(formes){
        this.formes = formes;
    }
    

}

class Forme {
    constructor(lineWidth, color){
        this.lineWidth = lineWidth;
        this.color = color;
    }
}

class Rectangle extends Forme {
    constructor(leftUpPointX, leftUpPointY, height, width, lineWidth, color){
        super(lineWidth, color);
        this.leftUpPointX = leftUpPointX;
        this.leftUpPointY = leftUpPointY;
        this.width = width;
        this.height = height;
    }
    
}
class Line extends Forme {
    constructor( startPointX, startPointY, endPointX, endPointY, lineWidth, color){
        super(lineWidth, color);
        this.startPointX = startPointX;
        this.startPointY = startPointY;
        this.endPointX = endPointX;
        this.endPointY = endPointY;
    }
    
}