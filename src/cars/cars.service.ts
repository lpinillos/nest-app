import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from "uuid";
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
    public  cars: Car[] = [
        {
            "id": uuid(),
            "brand": "Chevrolet",
            "model": "Captiva",
            "year": 2020
        },
        {
            "id": uuid(),
            "brand": "Renault",
            "model": "Sandero",
            "year": 2017
        }
    
    ]

    findAll(){
        return this.cars;
    }

    findById(id: string): Car{
        const car = this.cars.find((car)=>id==car.id);
        if(car == undefined)
            throw new NotFoundException();
        return car;
    }

    delete(id: string): Car{
        const car = this.findById(id);
        this.cars = this.cars.filter((car)=>id!=car.id)
        return car;
    }

    create(car:CreateCarDto){
        let carNew = {id: uuid(), ...car}
        this.cars.push(carNew);
        return carNew;
    }
    //ESE ...car es para agregar todos los campos de car

}