import { Vehiculo } from './Vehiculo.js';

export class Moto extends Vehiculo {

    // Atributos privados
    private tipoManillar: string;

    // Constructor
    constructor(marca: string, modelo: string, velocidadMaxima: number, tipoManillar: string) {
        super(marca, modelo, velocidadMaxima);
        this.tipoManillar = tipoManillar;
    }

    // Métodos de acceso getters y setters
    public getTipoManillar(): string {
        return this.tipoManillar;
    }

    public setTipoManillar(tipoManillar: string): void {
        this.tipoManillar = tipoManillar;
    }

    // Implementa el método acelerar
    public acelerar(velocidad: number): void {
        console.log(`> El vehículo ${this.getMarca()} ${this.getModelo()} con manillar \
tipo ${this.tipoManillar} está acelerando a ${velocidad} km/h.`);
    }
}
