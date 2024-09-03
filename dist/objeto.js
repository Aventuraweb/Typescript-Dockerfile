"use strict";
class Helado {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    getInfo() {
        return `Helado ${this.nombre}, Precio ${this.precio}`;
    }
    // Método estático para convertir el precio a otra moneda (por ejemplo, euros)
    static convertirAPrecioEnEuros(precio) {
        const tasaConversion = 0.85; // Ejemplo de tasa de conversión
        return precio * tasaConversion;
    }
}
class Tienda extends Helado {
    constructor(nombreTienda, nombreHelado, precioHelado) {
        super(nombreHelado, precioHelado);
        this.nombreTienda = nombreTienda;
    }
    // Implementación del método abstracto de la clase Helado
    calcularDescuento(descuento) {
        return Number(this.precio) - descuento;
    }
    // Método para aplicar un descuento a un helado, que usa calcularDescuento
    aplicarDescuento(descuento) {
        return this.calcularDescuento(descuento);
    }
    getInfo() {
        return `Tienda: ${this.nombreTienda}, ${super.getInfo()}`;
    }
}
const MiTienda = new Tienda("Manrubio", "Vainilla", 5000);
console.log(MiTienda.getInfo());
// Aplicar un descuento y mostrar el nuevo precio
const descuento = 20;
const nuevoPrecio = MiTienda.aplicarDescuento(descuento);
console.log(`Precio con descuento: ${nuevoPrecio}`); // "Precio con descuento: 80"
// Convertir el precio a euros y mostrarlo
const precioEnEuros = Helado.convertirAPrecioEnEuros(MiTienda.precio);
console.log(`Precio en euros: ${precioEnEuros}`); // "Precio en euros: 85"
