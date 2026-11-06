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
