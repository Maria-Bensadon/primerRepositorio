// MODULO 3 - fs
// ---------------------------------------------

import fs from 'fs';

// 1. Leer un archivo de manera asíncrona
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del archivo:', data);


    // 2. Escribir en un nuevo archivo
    fs.writeFile('./data/newfile.txt', 'Contenido nuevo.', (err) => {
        if (err) throw err;
        console.log('Archivo creado y escrito');


        // 3. Renombrar un archivo
        fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err) => {
            if (err) throw err;
            console.log('Archivo renombrado');
        });

    });
}); 