import { Vehiculo } from './Vehiculo.js';

export class Coche extends Vehiculo {

    // Atributos privados
    private numeroPuertas: number;

    // Constructor
    constructor(marca: string, modelo: string, velocidadMaxima: number, numeroPuertas: number) {
        super(marca, modelo, velocidadMaxima);
        this.numeroPuertas = numeroPuertas;
    }

    // Métodos de acceso getters y setters
    public getNumeroPuertas(): number {
        return this.numeroPuertas;
    }

    public setNumeroPuertas(numeroPuertas: number): void {
        this.numeroPuertas = numeroPuertas;
    }

    // Implementa el método acelerar
    public acelerar(velocidad: number): void {
        console.log(`> El vehículo ${this.getMarca()} ${this.getModelo()} de ${this.numeroPuertas} \
puertas está acelerando a ${velocidad} km/h.`);
    }
}
