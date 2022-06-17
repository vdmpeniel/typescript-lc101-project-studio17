"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        return items.reduce(function (sum, item) { return sum + item.massKg; }, 0);
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    };
    Rocket.prototype.addIt = function (array, item) {
        array.push(item);
        return true;
    };
    Rocket.prototype.addCargo = function (cargo) {
        return (this.canAdd(cargo) && this.addIt(this.cargoItems, cargo));
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        return (this.canAdd(astronaut) && this.addIt(this.astronauts, astronaut));
    };
    return Rocket;
}());
exports.Rocket = Rocket;
