class Pizza {
    constructor(masa, tamano, ingredientes){
        this.masa = masa;
        this.tamano= tamano;
        this.ingredientes= ingredientes;
    }

    //MÉTODOS

    preparar(){
        console.log(`Preparando piza ${this.tamano}, ${this.masa}, Ingredientes: ${this.ingredientes}`);
        return this;
    }

    hornear(){
        console.log(`La pizza esta en el horno`);
        return this;
    }

    empacar(){
        console.log(`Empacando pizza...`);
        console.log(`Pizza lista para ser enviada!`);
        return this;

    }

}

const pizzaPolloChampinones = new Pizza ('Masa delgada', 'Grande',['Queso', 'Pollo', 'Champiñones'] );
console.log(pizzaPolloChampinones.preparar());
console.log(pizzaPolloChampinones.hornear());
console.log(pizzaPolloChampinones.empacar());

//HERENCIA

class Combos extends Pizza{
    constructor(combo, cantidad, tamano, masa, ingredientes, bebida, postre){
        super(tamano, masa, ingredientes);
        this.combo=combo;
        this.cantidad=cantidad;
        this.bebida=bebida;
        this.postre=postre;
    }

    //MÉTODOS
    elegirCombo(){
        this.preparar();
        this.hornear();
        this.empacar();

        console.log(`Pedido: Combo ${this.combo} - ${this.cantidad} Pizza${this.porciones}, ${this.masa}, ${this.ingredientes} + ${this.bebida} + ${this.postre}`);
        return this;
    }

}

const Pedido = new Combos ('Personasl', 1, 'Mediana', 'Masa tradicional', ['Queso', 'Pepperoni'], 'Coca -cola grande', 'Rollitos de canela', 1);

console.log(Pedido.elegirCombo());