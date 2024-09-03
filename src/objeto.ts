abstract class Helado {
    private nombre:String; 
    public precio:Number; 

    constructor(nombre:String, precio:number){
        this.nombre = nombre;  
        this.precio = precio;  
    }

    public getInfo(): String{
        return `Helado ${this.nombre}, Precio ${this.precio}`; 
    }

    // Declaración abstracta del método, sin implementación
    public abstract calcularDescuento(descuento: Number): Number;


    // Método estático para convertir el precio a otra moneda (por ejemplo, euros)
    static convertirAPrecioEnEuros(precio: any): Number {
        const tasaConversion = 0.85; // Ejemplo de tasa de conversión
        return precio * tasaConversion;
    }

}

class Tienda extends Helado{

    private nombreTienda:String; 

    constructor(nombreTienda:String, nombreHelado:String, precioHelado:number){
        super(nombreHelado, precioHelado)
        this.nombreTienda = nombreTienda; 
    }

    // Implementación del método abstracto de la clase Helado
    public calcularDescuento(descuento: number): Number {
        return Number(this.precio) - descuento;
    }

    // Método para aplicar un descuento a un helado, que usa calcularDescuento
    public aplicarDescuento(descuento: number): Number {
        return this.calcularDescuento(descuento);
    }

    public getInfo(): String {
        return `Tienda: ${this.nombreTienda}, ${super.getInfo()}`;
    }

}

const MiTienda = new Tienda ("Manrubio", "Vainilla", 5000); 

console.log(MiTienda.getInfo()); 

// Aplicar un descuento y mostrar el nuevo precio
const descuento = 20;
const nuevoPrecio = MiTienda.aplicarDescuento(descuento);
console.log(`Precio con descuento: ${nuevoPrecio}`); // "Precio con descuento: 80"

// Convertir el precio a euros y mostrarlo
const precioEnEuros = Helado.convertirAPrecioEnEuros(MiTienda.precio);
console.log(`Precio en euros: ${precioEnEuros}`); // "Precio en euros: 85"