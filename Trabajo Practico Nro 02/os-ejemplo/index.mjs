// MODULO 2 - os
// ---------------------------------------------

import os from 'os' ;
//Obtenerla arquitectura del sistema
console . log ( 'Arquitectura:' , os . arch ());
// Obtener el tipo de sistema operativo
console . log ( 'Plataforma:' , os . platform ());
//Obtenerla cantidad total de memoria
console . log ( 'Memoria total:' , os . totalmem ());
//Obtenerla memoria libre
console . log ( 'Memoria libre:' , os . freemem ());
//Obtenerla información de la CPU
console . log ( 'Información de la CPU:' , os .cpus ());
