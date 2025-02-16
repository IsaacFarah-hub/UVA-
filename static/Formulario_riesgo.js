const indiceText = document.getElementById("sensor");
const r_formulario= document.getElementById("factores_riesgo")
const signo= document.querySelectorAll(".exclamacion");
const sombra= document.getElementById("resultado")

r_formulario.addEventListener("submit", function (event) {
    event.preventDefault();
let v_pregunta1 = parseInt(document.getElementById("tipo_piel").value);
let v_pregunta2 = parseInt(document.getElementById("ante_propio").value);
let v_pregunta3 = parseInt(document.getElementById("ante_familiar").value);
if(v_pregunta2===8){v_pregunta3=0;}
let v_pregunta4 = parseInt(document.getElementById("quemadura").value);
let v_pregunta5 = parseInt(document.getElementById("edad").value);
let v_pregunta6 = parseInt(document.getElementById("bloqueador").value);
const resultado_rango = document.getElementById("rango_riesgo");




const indice = parseInt(indiceText.innerText);

let total_form= v_pregunta1+v_pregunta2+v_pregunta3+v_pregunta4+v_pregunta5+v_pregunta6;
let color = "";
let fontSize = "4em"

    v_riesgo=(total_form/12)*(indice/10)*10;
    
    if (v_riesgo<=2){
        resultado_rango.innerText="Riesgo Bajo";
        color="#13ba0074";
        sombra.style.boxShadow=color;
        
    }
    else if (v_riesgo<=4){
        resultado_rango.innerText="Riesgo Moderado";
        color="#fff836f6";
        sombra.style.boxShadow=color;
        
    }
    else if (v_riesgo<=6){
        resultado_rango.innerText="Riesgo Alto";
        color="#fb9a4b74";
        sombra.style.boxShadow=color;
        
    }
    else if (v_riesgo<=8){
        resultado_rango.innerText="Riesgo Muy alto";
        color="#ff626274";
        sombra.style.boxShadow=color;
        
    }
    else if (v_riesgo>8){
        resultado_rango.innerText="Riesgo Extremo";
        color="#a94bfb74";
        sombra.style.boxShadow=color; 
    }
    signo.forEach(signo => {
        signo.style.color = color;
        signo.style.fontSize = fontSize;
        
    });
    
});