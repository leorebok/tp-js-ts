import { IVehiculo } from "../Interfaces/IVehiculo";

export abstract class Vehiculo implements IVehiculo {

    // Atributos privados
    private marca: string;
    private modelo: string;
    private velocidadMaxima: number;

    // Constructor
    constructor(marca: string, modelo: string, velocidadMaxima: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;
    }

    // Métodos de acceso getters y setters
    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getVelocidadMaxima(): number {
        return this.velocidadMaxima;
    }

    public setVelocidadMaxima(velocidadMaxima: number): void {
        this.velocidadMaxima = velocidadMaxima;
    }

    // Método abstracto que implementa la interfaz IVehiculo
    public abstract acelerar(velocidad: number): void;

    // Método Frenar
    public frenar(): void {
        console.log(`> El vehículo ${this.marca} ${this.modelo} está frenando.`);
    }
}
