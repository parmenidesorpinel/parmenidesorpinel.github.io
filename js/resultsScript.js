/*let resultados=[
    {
        Place:"1",
        Time:"-",
        Bib:"204",
        Name:"JJ Squires",
        Age: "26", 
        City:"NM",
        Team:"Broken Spoke Santa Fe"
    },
    {
        Place:"2", 
        Time:"-", 
        Bib:"202", 
        Name:"Paul Holzmann", 
        Age: "19", 
        City:"NM", 
        Team:"Haganracing"
    },
    {
        Place:"3", 
        Time:"-", 
        Bib:"203", 
        Name:"Anthony Holzmann", 
        Age: "21", 
        City:"NM", 
        Team:"The Stooges Three"
    },
    {
        Place:"4", 
        Time:"-", 
        Bib:"-", 
        Name:"Turner Frisk", 
        Age: "19", 
        City:"NM", 
        Team:"Deity"
    }
];

let crearTabla=function(lista){
    let stringTabla="<tr><th>Place</th><th>Time</th><th>Bib</th><th>Name</th><th>Age</th><th>City</th><th>Team</th></tr>";
    for(let tarea of lista){
        let fila = "<tr> <td>"
        fila += tarea.Place;
        fila += "</td>"

        fila += "<td>"
        fila += tarea.Time;
        fila += "</td>"

        fila += "<td>"
        fila += tarea.Bib;
        fila += "</td>"

        fila += "<td>"
        fila += tarea.Name;
        fila += "</td>"

        fila += "<td>"
        fila += tarea.Age;
        fila += "</td>"

        fila += "<td>"
        fila += tarea.City;
        fila += "</td>"

        fila += "<td>"
        fila += tarea.Team;
        fila += "</td>"

        fila += "</tr>";
        stringTabla += fila;
        console.log(stringTabla);
    }
    return stringTabla;
};

document.getElementById("tablaResultados").innerHTML=crearTabla(resultados);*/
