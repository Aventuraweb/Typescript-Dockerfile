import { strict } from "assert";
import { Interface } from "readline";

let Name: String = "juan"; 
const Gato: String = ""; 

console.log(Name); 

if(Name == Gato ){
    console.log(Gato); 
}

const array: String[] = ["Juan", "Camilo", "Santiago"]; 

//ejemplo de for para recorrer el array
for(let i =0; i< array.length; i++){
    console.log(array[i]); 
}

//otro ejemplo del for para recorrer rl array 
for(let date of array){
    console.log(date)
}

let info:String | number = "";  

let bol = true ? false : true; 

const Animales = {
    perro: "perro", 
}

interface Animal {
    nombre: String
}

// js
function main (){

}

//ts 
function name(nombre:String): void{

}

function element (): String{
    return ""
}

function x():String[]{
    return []
}

const y:() => String[] = ():String[] => {
    return []
}

let d:() => String = (a:number = 0, b:number = 20):String => {
    let result:Number = a+b ;
    return `${a}`; 
}

let m:Function = function(b:number):String{
    return ""
}

function w():String{
    return ""; 
}

interface Personas{
    nombre:String
    data: ()=>{

    }
    info: Function
}

class Estudiantes{
    name:String;
    apellido?:String | null;
    constructor(name:String){
        this.name=name;
    }
    public get():void{

    }
    static set():void{

    }
    private rm():void{

        Estudiantes.set()

    }

}


class Notas extends Estudiantes{
    nota: Number | null;
    constructor(nota:Number){
        super("camilo");
        this.nota=nota
    }
    public set():void{
        this.nota = null;
    }
}

abstract class mr{
    public rm(){
        
    }
}

interface ft{
    name?: String
}
class po implements ft{
    
}