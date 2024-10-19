class Car  {
    private _brand: string;
    private _model: string;
    private _horsepower: number;

    constructor(brand: string, model: string, horsepower: number) {
        this._brand = brand;
        this._model = model;
        this._horsepower = horsepower;
    }
    public get brand(): string {
        return this._brand;
    }
    public get model(): string {
        return this._model;
    }
    public get horsepower(): number {
        return this._horsepower;

    }
    public set brand(value: string) {
        this._brand = value;
    }
    public set model(value: string) {
        this._model = value;
    }
    public set horsepower(value: number){
        this._horsepower = value;

    }
    public printCarInfo(): void {
        console.log(`The car is: ${this._brand} ${this._model} - ${this._horsepower} HP.`);
    }
}
function testProgram(input: string) {
    const [brand, model, horsepower] = input.split(' ');
    const car = new Car(brand, model, parseInt(horsepower));
    car.printCarInfo();
}
const input = "Chevrolet Impala 390";
testProgram(input);