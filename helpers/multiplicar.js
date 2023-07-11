const fs = require('fs');

const crearArchivo = async (base, listar, hasta) => {
    try {
        console.clear();
        console.log('=================================');
        console.log('=================================');

        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar==true) {
            console.log(salida);
        }else{
            console.log(salida=''); 
        }
        

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error
    }

}

// const crearArchivoAsync = async()=>{
//     const archivo = await crearArchivo();
//     try {
//         return archivo
//     } catch (error) {
//         throw error
//     }
// }

module.exports = {
    crearArchivo: crearArchivo
}