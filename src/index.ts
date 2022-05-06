let btnEnviar = document.getElementById("enviar");
rotulo.innerHTML = "Ingrese la posición de llegada del competidor:";
btnEnviar.addEventListener("click", () => {
  let posicionLlegada: number = Number(dato1.value);
  if (posicionLlegada === 1) {
    console.log("entregar medalla de oro");
  } else {
    if (posicionLlegada === 2) {
      console.log("entregar medalla de plata");
    } else {
      if (posicionLlegada === 3) {
        console.log("entregar medalla de bronce");
      } else {
        console.log("entregar mención de participación");
      }
    }
  }
});
