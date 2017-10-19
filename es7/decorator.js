function agregarDespedida(target) {
    target.prototype.despedirse = (persona) => {
        return `Adios ${persona.nombre}!`;
    }
    return target;
}

// set experimentalDecorators: true
@agregarDespedida
class Persona {
    saludar() {
        return `Hola soy ${this.nombre}`;
    }
}

const persona = new Persona();
console.log(persona.despedirse(persona));
