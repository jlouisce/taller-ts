export {};

// ---- Tipado estático ----
let productoNombre: string = "Laptop";
let productoPrecio: number = 1200;
let productoEnStock: boolean = true;
// productoPrecio = "mil doscientos"; // ❌ Error
console.log("Tipado estático:", productoNombre, productoPrecio, productoEnStock);

// ---- any y unknown ----
let datosAPI: unknown = JSON.parse('{"nombre": "tablet", "precio": 300}');
if (typeof datosAPI === 'object' && datosAPI !== null) {
  let producto = datosAPI as { nombre: string, precio: number };
  console.log("unknown:", producto.nombre);
}

// ---- void y never ----
function registrarMensaje(mensaje: string): void {
  console.log("LOG:", mensaje);
}
function detenerProceso(razon: string): never {
  throw new Error(`Proceso detenido: ${razon}`);
}
registrarMensaje("probando void");
try { detenerProceso("prueba de never"); } catch (e) { console.log((e as Error).message); }

// ---- Arrays, Tuplas y Enums ----
let usuariosIDs: number[] = [101, 102, 103];
let gpsCoordenadas: [number, number] = [40.7128, -74.0060];
enum EstadoOrden { Pendiente, Enviada, Entregada, Cancelada }
let miOrdenEstado: EstadoOrden = EstadoOrden.Enviada;
console.log("Arrays/Tuplas/Enum:", usuariosIDs, gpsCoordenadas, miOrdenEstado, EstadoOrden[miOrdenEstado]);

// ---- Union, Alias e Intersection ----
type ID = string | number;
let miId: ID = "a-123";
type Empleado = { nombre: string, email: string };
type Desarrollador = Empleado & { lenguaje: string, senioridad: "junior" | "senior" };
let nuevoDev: Desarrollador = {
  nombre: "Carlos",
  email: "carlos@empresa.com",
  lenguaje: "TypeScript",
  senioridad: "junior"
};
console.log("Union/Intersection:", miId, nuevoDev);

// ---- Parámetros de funciones ----
function saludar(nombre: string = 'Desconocido', titulo?: string, ...amigos: string[]): string {
  let saludo = titulo ? `${titulo} ${nombre}` : nombre;
  if (amigos.length > 0) {
    saludo += `, y tus amigos ${amigos.join(', ')}`;
  }
  return `Hola, ${saludo}.`;
}
console.log(saludar());
console.log(saludar("Ana"));
console.log(saludar("Pedro", "Sr."));
console.log(saludar("Maria", undefined, "Juan", "Pedro"));
console.log(saludar(undefined, undefined, "Juan", "Pedro"));

// ---- Interfaces ----
interface Usuario {
  readonly id: number;
  nombre: string;
  email?: string;
}
let usuario: Usuario = { id: 10, nombre: "Luis" };
// usuario.id = 11; // ❌ Error, es de solo lectura
usuario.email = "luis@correo.com";
console.log("Interfaz:", usuario);

// ---- Clases y modificadores de acceso ----
class Vehiculo {
  protected ruedas: number;
  constructor(ruedas: number) {
    this.ruedas = ruedas;
  }
  public arrancar(): void {
    console.log("El vehículo está arrancando.");
  }
}
class Coche extends Vehiculo {
  public marca: string;
  private _velocidad: number = 0;
  constructor(ruedas: number, marca: string) {
    super(ruedas);
    this.marca = marca;
  }
  public getInfo(): void {
    console.log(`Este coche tiene ${this.ruedas} ruedas.`);
  }
  public acelerar(cantidad: number): void {
    this._velocidad += cantidad;
  }
}
const miCoche = new Coche(4, "Toyota");
miCoche.arrancar();
miCoche.acelerar(50);
miCoche.getInfo();
// miCoche._velocidad = 100; // ❌ Error, es privado

// ---- Genéricos ----
class ColaString {
  private items: string[] = [];
  agregar(item: string): void { this.items.push(item); }
  obtenerPrimerElemento(): string | undefined { return this.items.shift(); }
}
class ColaNumber {
  private items: number[] = [];
  agregar(item: number): void { this.items.push(item); }
  obtenerPrimerElemento(): number | undefined { return this.items.shift(); }
}
class Cola<T> {
  private items: T[] = [];
  agregar(item: T): void { this.items.push(item); }
  obtenerPrimerElemento(): T | undefined { return this.items.shift(); }
}
const colaNumeros = new Cola<number>();
colaNumeros.agregar(10);
colaNumeros.agregar(20);
const primerNumero = colaNumeros.obtenerPrimerElemento();
console.log(primerNumero);

const colaCadenas = new Cola<string>();
colaCadenas.agregar('Pepe');
colaCadenas.agregar('Maria');
const primerNombre = colaCadenas.obtenerPrimerElemento();
console.log(primerNombre);

// ---- Módulos ----
import { sumar } from './utils.js';
const resultado = sumar(5, 10);
console.log(`El resultado de la suma es: ${resultado}`);
