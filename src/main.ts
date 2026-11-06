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
