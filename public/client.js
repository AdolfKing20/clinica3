const form = document.getElementById("turnoForm");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const select = document.getElementById("select");
    const name = document.getElementById("name");
    const dni = document.getElementById("dni");
    const date = document.getElementById("date");
    const email = document.getElementById("email");

    const datos = {
        select:select,
        name:name,
        dni:dni,
        date:date,
        email:email,
    };
    fetch("http://localhost:3000/", {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body:JSON.stringify(datos),
    })
    .then((Response) => Response.json())
    .then((result) => {
        if(result.success) {
            alert("Registramos tus turnos con exito")
        } else{
            alert("El turno ya existe")
        }
    })
    .catch((error) =>{
        alert(error)
    })

    form.reset();
})