import {IsString, IsInt, Min, Max} from "class-validator";
export class CreateCarDto {
    readonly brand: string;
    readonly model: string;
    readonly year: number;
}