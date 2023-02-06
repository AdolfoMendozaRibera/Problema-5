/*
La mesa de examen ya finalizaron y el profesor le tomo un ultimo examen especial a Cofla, a Cofla 
hizo dos pruebas mas, pero lamentablemente, se rompio el sistema de inscripcion de notas , asi que como
ya se imaginaran, ahi entramos nosotros a crear una solucion a este problema, tenemos que desarrollar
un sition web que simule su funcionamiento.
PROBLEMA A
-Crear una mini interfaz para introducir nota
-Validar que no haya errores
-Se debe promediar la nota del profesor con otras dos notas de trabajos anteriores
-Si el promedio es mayor a 7/10: aprobar.


*/

const sendButton = document.getElementById('snd-nota'); //Selecciona el boton "Otorgar Nota"

sendButton.addEventListener("click",()=>{   //Se activa si le das click
    let resultado,mensaje;
    try{
        prevRes = parseInt(document.getElementById('nota').value); //El valor escrito por el usuario
        if (isNaN (prevRes)){  //si no tiene valor lanzara una excepcion
            throw "Gracioso";
        }
        
        resultado = verificarAprobacion(8,5,prevRes); //Calcula nota nota del estudiante
        mensaje = definirMensaje(resultado[1]);  //Define si aprobo o no
    } catch(e){      //En caso de que ocurra algun error
        resultado = "¿Sos gracioso?";  
        mensaje = "Intentaste hackear el sitio";
    }
    abrirModal(resultado[0],mensaje);  //Funcion que mostrara el resultado por la pantalla
}) 

const definirMensaje = (pr)=>  //Define el resultado del estudiante
{
    let resultado;
    switch(pr)
    {
        case 1: resultado ="No podes ser tan HDP tenes 1";
        break;
        case 2: resultado ="no sabes nada 2";
        break;
        case 3: resultado ="que haces aca 3";
        break;
        case 4: resultado ="muy mal 4";
        break;
        case 5: resultado ="malo 5";
        break;
        case 6: resultado ="regular 6";
        break;
        case 7: resultado ="bein, pero puede mejorar 7";
        break;
        case 8: resultado ="muy bien 8";
        break;
        case 9: resultado ="excelente 9";
        break;
        case 10: resultado ="insuperable 10";
        break
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1,nota2,prevRes)=>{  //prevRes : Nota ingresada por el usuario
    promedio = (nota1 + nota2 + prevRes)/3;
    if (promedio >=7){                           //muestra el resultado coloreado,nota redondeada
        return ["<span class='green'>Aprovado</span>",Math.round(promedio)]; 
    }
    return ["<span class='red'>Desaprovado</span>",Math.round(promedio)];
}

const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML=res;
    document.querySelector(".mensaje").innerHTML=msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display="flex";
    modal.style.animation = "aparecer 1s forwards";
}


