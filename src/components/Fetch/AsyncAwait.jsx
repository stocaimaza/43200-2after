import { useState, useEffect } from "react";

//ARRAY DE PRODUCTOS

const misProductos = [
    { nombre: "Pc Gamer", precio: 1500 },
    { nombre: "Teclado", precio: 500 },
    { nombre: "Mouse", precio: 200 }
];

//FUNCIÓN QUE RETORNA UNA PROMESA CON UN RETRASO DE 2 SEGUNDOS. 

const getMisProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}


const AsyncAwait = () => {
    const [misProductos, setMisProductos] = useState([]);

    useEffect( ()=> {

        console.log(getMisProductos());
        //Si hago esto puedo ver que la promesa esta pendiente. 
        //Esto ocurre porque el console.log se muetra antes de que pasen los dos segundos de retraso. 

        //Entonces si yo quiero decirle a mi código "espera a que termine esta tarea antes de avanzar con la siguiente" puedo utilizar la sintaxis "async await". 

        //await significa "espera"; 

        

        //Si hago esto me avisa el visual que await solo se puede usar en funciones async. Entonces realizo lo siguiente: 

        const pedirDatos = async () => {
            const inventarioProductos = await getMisProductos();
            setMisProductos(inventarioProductos);
        }

        pedirDatos();

    }, [])
    return (
        <div>
            <h2>Mis productos usando Async Await</h2>
            {
                misProductos.map((producto,index) => {
                    return (
                        <div key={index}>
                            <p> {producto.nombre} </p>
                            <p> {producto.precio} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AsyncAwait