class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    toString() {
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    set radius(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set color(color) {
        this._color = color;
    }

    get color() {
        return this._color;
    }
}

const circle1 = new Circle();
const area = circle1.getArea();
const circumference = circle1.getCircumference();
const AreaofCircle = circle1.toString();
console.log(area, circumference, AreaofCircle);

circle1.radius = 6; // Set the new radius using the setter
circle1.color = "blue"; // Set the new color using the setter
