//platos del menú
plato1 = new Plato(nombre = "Arroz con pollo", precio = 12, tipo = "plato de fondo");
plato2 = new Plato(nombre = "causa de atun", precio = 5, tipo = "entrada");
plato3 = new Plato(nombre = "ceviche", precio = 6, tipo = "entrada");
plato4 = new Plato(nombre = "tallarines rojos", precio =  15, tipo = "plato de fondo");
plato5 = new Plato(nombre = "tallerines verdes", precio = 13, tipo = "plato de fondo");
//comensales
comensal1 = new Comensal({nombre:"Enrique Benito", tipo_documento:"Boleta"});
comensal2 = new Comensal({nombre:"Rodrigo Benito", tipo_documento:"Factura"});

let pedidos = [];
pedidos.push(plato1);
pedidos.push(plato2);
pedidos.push(plato3);
pedidos.push(plato4);
pedidos.push(plato5);

//se muestra el menú del restaurante
console.log("MENÚ DEL DÍA")
pedidos.forEach(p => {
    console.log("plato: " + p.nombre + " - precio: S/. " + p.precio)
})
console.log("------------------------------")
console.log("PEDIDOS")
comensal1.hacerPedidos(plato2, plato1);
comensal2.hacerPedidos(plato3, plato4);
console.log("------------------------------")
comensal1.detalleDocumento(plato2, plato1);
comensal1.calcularIGV(plato2, plato1);
comensal1.calcularPropina(plato2, plato1);
comensal1.calcularTotal(plato2, plato1);
console.log("------------------------------")
comensal2.detalleDocumento(plato3, plato4);
comensal2.calcularIGV(plato3, plato4);
comensal2.calcularPropina(plato3, plato4);
comensal2.calcularTotal(plato3, plato4);