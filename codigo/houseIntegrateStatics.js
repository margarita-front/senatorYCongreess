//Elemento controlador entre la vista y el modelo de datos->Pseudo Modelo Vista Controlador
//Capturas de datos para las tabla de houseAttendance
let democrats_table = document.getElementById('democrats_td');
let republics_table = document.getElementById('republicans_td');
let independents_table = document.getElementById('independents_td');
let total_table = document.getElementById('total_td');
//house_least_engaged//house_most_engaged
let list_leastEngaged = document.getElementById('house_least_engaged');
let list_mostEngaged = document.getElementById('house_most_engaged');


/*FUNCION PARA LLENAR TABLA SUPERIOR*/
function paintTable(congress, party, partyVotes, partyTable) {
    let item = document.createElement('td')
    item.innerHTML = congress[party].length
    let item2 = document.createElement('td')
    item2.innerHTML = congress[partyVotes].toFixed(1) + '%'; //ponga el dato en factor decimal y agregue porcentaje
    partyTable.appendChild(item)
    partyTable.appendChild(item2)
}

function getDocument() {
    paintTable(house_statics, 'democrats', 'democrats_average_party', democrats_table);
    paintTable(house_statics, 'republicans', 'republicans_average_party', republics_table);
    paintTable(house_statics, 'independents', 'independents_average_party', independents_table);

    let item = document.createElement('td');
    item.innerHTML = houseMembers.length;
    let item2 = document.createElement('td');
    item2.innerHTML = ((house_statics.independents_average_party +
        house_statics.republicans_average_party +
        house_statics.democracts_average_party) / 3).toFixed(1) + '%';
    total_table.appendChild(item);
    total_table.appendChild(item2); //Indice general  
}

/*Funcion que presenta datos de House Engagged*/
function createListEngaged(array, table, engaged_votes, engaged_pct) {
    array.forEach(member => {
        let item = document.createElement('tr') //craer un arranque de row o fila
        item.innerHTML = `<td><a target='_blank' href='${member.url}'>${member.first_name}
                             ${member.middle_name || ""}
                             ${member.last_name}</a></td>
                             <td>${member[engaged_votes]}</td> 
                             <td>${member[engaged_pct]}%</td> `
        table.appendChild(item)
    })
}
//----------------------------------------

getDocument()
    //Llamar funcion para menos y mas comprometidos
createListEngaged(house_statics.least_engaged, list_leastEngaged, 'missed_votes', 'missed_votes_pct')
createListEngaged(house_statics.most_engaged, list_mostEngaged, 'missed_votes', 'missed_votes_pct')