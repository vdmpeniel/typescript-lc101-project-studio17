import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Array<Cargo> = [];
    astronauts: Array<Astronaut> = [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass( items: Payload[] ): number{
        return items.reduce((sum, item) => sum + item.massKg, 0);
    }   
    currentMassKg(): number{
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }    
    canAdd(item: Payload): boolean{
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }    
    addIt(array, item): boolean {
        array.push(item);
        return true;
    }
    addCargo(cargo: Cargo): boolean{        
        return (this.canAdd(cargo) && this.addIt(this.cargoItems, cargo));
    }    
    addAstronaut(astronaut: Astronaut): boolean{
        return (this.canAdd(astronaut) && this.addIt(this.astronauts, astronaut));
    }

}