var Car = /** @class */ (function () {
    function Car(brand, model, horsepower) {
        this._brand = brand;
        this._model = model;
        this._horsepower = horsepower;
    }
    Object.defineProperty(Car.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        set: function (value) {
            this._brand = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "horsepower", {
        get: function () {
            return this._horsepower;
        },
        set: function (value) {
            this._horsepower = value;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.printCarInfo = function () {
        console.log("The car is: ".concat(this._brand, " ").concat(this._model, " - ").concat(this._horsepower, " HP."));
    };
    return Car;
}());
function testProgram(input) {
    var _a = input.split(' '), brand = _a[0], model = _a[1], horsepower = _a[2];
    var car = new Car(brand, model, parseInt(horsepower));
    car.printCarInfo();
}
var input = "Chevrolet Impala 390";
testProgram(input);
