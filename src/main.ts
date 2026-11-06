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
