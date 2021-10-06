import Persona from './persona.js'
import Grupo from './grupo.js'

let brandon = new Persona('Brandon', 19);
let majo = new Persona('Majo', 19);
let juan = new Persona('Juan', 19);
let carla = new Persona('Carla', 19);

let salon = new Grupo();

salon.agregar(brandon);
salon.agregar(majo);
salon.agregar(juan);
salon.agregar(carla);

console.log(salon.listar());