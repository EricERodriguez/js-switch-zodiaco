let calification = window.prompt('Ingrese la nota de los alumnos, la nota debe ser entre 1 y 10');

//transformando cadena de texto obtenido en el propt a un numero entero
calification = parseInt(calification);

while(calification > 10 || calification <1){
    calification = window.prompt("Recuerde que la nota debe ser entre 1 y 10")
}

console.log('Termino el bucle while')