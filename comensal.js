//Autor: Enrique Benito
class Comensal {
    
    constructor (datos = {}) {
        this.nombre = datos.nombre;
        this.tipo_documento = datos.tipo_documento;
        this.plato = {};
    }

    hacerPedidos(objPlato1, objPlato2) {
        this.plato = objPlato1;
        this.plato = objPlato2;
        console.log(`${this.nombre} ha pedido ${objPlato1.nombre} y ${objPlato2.nombre}`);

        return true;
    }

    detalleDocumento(objPlato1, objPlato2) {
        console.log(`Detalle de ${this.tipo_documento}`)
        console.log(`Nombre del cliente: ${this.nombre}`)
        console.log(`${objPlato1.nombre}: S/. ${objPlato1.precio}`)
        console.log(`${objPlato2.nombre}: S/. ${objPlato2.precio}`)
    }

    calcularIGV(objPlato1, objPlato2) {
        this.plato = objPlato1;
        this.plato = objPlato2;
        let valor_igv = objPlato1.precio + objPlato2.precio;
        valor_igv = (valor_igv * 0.18).toFixed(2);
        //console.log(`El IGV por el plato: ${objPlato.nombre} tiene un valor de: S/. ${valor_igv}`)
        console.log(`Valor del IGV: S/. ${valor_igv}`)
        //console.log(objPlato1.precio)
        return true;
    }

    calcularPropina(objPlato1, objPlato2) {
        this.plato = objPlato1;
        this.plato = objPlato2;
        let valor_propina = objPlato1.precio + objPlato2.precio;
        valor_propina = (valor_propina * 0.05).toFixed(2);
        //console.log(`La propina por el plato: ${objPlato.nombre} tiene un valor de: S/. ${valor_propina}`)
        console.log(`Propina: S/. ${valor_propina}`)
        return true;
    }

    calcularTotal(objPlato1, objPlato2) {
        this.plato = objPlato1;
        this.plato = objPlato2;
        let total = objPlato1.precio + objPlato2.precio;
        total = (total * 1.23).toFixed(2);
        console.log(`TOTAL: S/. ${total}`)
        return true;
    }
}