// MODULO 3 - fs
// ---------------------------------------------

import fs from 'fs';

// 1. Leer (Sin espacios en './data/...')
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del archivo:', data);


    // 2. Escribir (Sin espacios en './data/...')
    fs.writeFile('./data/newfile.txt', 'Contenido nuevo.', (err) => {
        if (err) throw err;
        console.log('Archivo creado y escrito');


        // 3. Renombrar (Sin espacios en './data/...')
        fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err) => {
            if (err) throw err;
            console.log('Archivo renombrado');
        });

    });
}); 