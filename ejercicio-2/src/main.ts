import { Coche } from './Entities/Coche.js';
import { Moto } from './Entities/Moto.js';
import { Vehiculo } from './Entities/Vehiculo';

function manejarVehiculos(vehiculos: Vehiculo[]): void {
    vehiculos.forEach(vehiculo => {
        vehiculo.acelerar(120);
        vehiculo.frenar();
        console.log("--------------------------------")
    });
}

// Instancias de Coche y Moto
const vehiculos: Vehiculo[] = [
    new Coche("Peugeot", "208", 180, 4),
    new Moto("KTM", "RC390", 180, "Semi-manillar")
];

// Se llama a la función para aceletar/frenar e imprimir resultados.
manejarVehiculos(vehiculos);
