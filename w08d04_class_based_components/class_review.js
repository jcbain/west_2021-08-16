// const rectangle1 = { height: 10, length: 5 };
// const rectangle2 = { height: 2, length: 3};

class Rectangle {
  constructor(length, width){
    this.length = length;
    this.width = width;
  }

  calculateArea() {
    return this.length * this.width;
  }
}

const rectangle1 = new Rectangle(2, 4);
console.log(rectangle1.calculateArea());

class RectangularPrism extends Rectangle {
  constructor(length, width, height){
    super(length, width);
    this.height = height;
  }

  calculateVolume(){
    return this.calculateArea() * this.height;
  }
}

const prism = new RectangularPrism(3,4,5)
console.log(prism.calculateVolume())
