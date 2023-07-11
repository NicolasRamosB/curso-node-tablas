const fs = require('fs');

const crearArchivo = (base) => {
    return new Promise((res, _rej) => {


        console.clear();
        console.log('=================================');
        console.log('=================================');

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            for (let base = 1; base <= 10; base++) {
                salida += `${i} x ${base} = ${i * base}\n`;
            }
        }
        
        console.log(salida);

        const data = `tabla-${base}.txt`
        fs.writeFile(data, salida)
        
        res(`${data} creada`);
        
    })
}



// module.exports = {
//     crearArchivo: crearArchivo
// }