const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Lista de productos',
        productos: [
        ],
        nuevoid: 0, nuevoProducto: null, nuevaCantidad: null, nuevoPrecio: null, nuevoPrecioTotal:null,
        totalCantidad: null, totalPrecio: null
    },
    methods: {
        agregarProducto() {
            if (this.nuevoProducto && this.nuevaCantidad && this.nuevoPrecio){
                this.nuevoid++;
                this.nuevoPrecioTotal = this.nuevaCantidad * this.nuevoPrecio;
                this.productos.push({ id: this.nuevoid, nombre: this.nuevoProducto, cantidad: this.nuevaCantidad,
                    precio: this.nuevoPrecio, preciototal: this.nuevoPrecioTotal.toFixed(2) });
                this.nuevoPrecio = null; this.nuevoProducto = null; this.nuevaCantidad = null;
            }else{
                window.alert('Error al los colocar datos')
            }            
        },
    },
    computed: {
        sumarProdcutos() {
            this.totalCantidad = 0;
            for (producto of this.productos) {
                this.totalCantidad += parseInt(producto.cantidad);
            }
            return this.totalCantidad;
        },
        sumarPrecios(){
            this.totalPrecio = 0;
            for (producto of this.productos) {
                this.totalPrecio += parseFloat(producto.preciototal);
            }
            return this.totalPrecio.toFixed(2);
        },
    },
})
