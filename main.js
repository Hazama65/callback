const {areaCirculo,convertirAMayusculas,valoresMayoresQue}=require("./helpers/funciones");


// const saludar =()=>{

// };
// saludar();

// const suma =(num1=0,num2=0)=>{
//     let suma=num1+num2;
//     console.log('suma de 2 numeros; ', suma)
// };

// let numero1=10,numero2=20;
// suma(numero1,numero2);


console.log(areaCirculo(4));

console.log(convertirAMayusculas("hola"));

const numeros = [5, 10, 3, 8, 2];
const objetivo = 4;
let vMayores=valoresMayoresQue(numeros,objetivo);
console.log(vMayores);

const limpiar=(numeros=[],objetivo,callback)=>  {
    return callback(numeros,objetivo);
}
let numerosFiltrados =limpiar(numeros,objetivo,(num)=>{
    return num.filter(numeros=>numeros>objetivo);
});
console.log(numerosFiltrados);






const mipromesa=new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        const exito=true;
        if(exito){
            resolve('hola despues de un 1 segundo')
        }
        else{
            reject('error')
        }
    }, 3000);
    
})


mipromesa
    .then((mensaje)=>{
        console.log(mensaje);
    })


const mipromesaedad= new Promise ((resolve,reject)=>{
    const edad=18 ;
    if(edad>=18){
        resolve(`mayor`)
    }
    else{
        reject(`menor`)
    }
});

mipromesaedad
    .then((mensaje)=>{
        console.log(mensaje);
    })
    .catch((error)=>{
        console.log(error)
    });


