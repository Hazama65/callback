const areaCirculo =(radio)=>{
    let area = 3.1416 * (Math.pow(radio,2));
    return area;
}


const convertirAMayusculas=(cadena=" ") =>{
    return cadena.toLocaleUpperCase();
}


const valoresMayoresQue=(arr, objetivo) =>{
    let mayores = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > objetivo) {
            mayores.push(arr[i]);
        }
    }
    return mayores;
}

module.exports={
    areaCirculo,
    convertirAMayusculas,
    valoresMayoresQue
}