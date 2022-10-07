import * as codeBook from './codeBook.json'
import { v4 as uuidv4 } from 'uuid'

let array = new Uint8Array(1);
const alpha = Array.from(Array(25)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

let perms = []
for(let i = 0; i < 25; i++) {
    let unique = []
    while(unique.length < 25) {
        window.crypto.getRandomValues(array);
        const num = array[0];
        const randomLetter = alphabet[(num % 25)];
        if(!unique.includes(randomLetter)) {
            unique.push(randomLetter);
        }
    }
    perms.push(unique);
}

let tableId = document.getElementById("tableId");
tableId.innerText = "Id: " + uuidv4().toString().split("-")[4];

let dryadTableHeader = document.getElementById("dryadTableHeader");
let row = dryadTableHeader.insertRow();
for(let i = 0; i <= 10; i++) {
    let th = row.appendChild(document.createElement("th"));
    if(i == 0) {
        th.innerText = "  ";
    } else {
        th.innerText = (i - 1).toString();
    }
}

alphabet.forEach((letter, i) => {
    let row = dryadTableHeader.insertRow();
    let td = row.insertCell(0);
    td.innerText = letter;
    td.setAttribute("class", "first");

    td = row.insertCell(1);
    td.innerText = perms[i].join("").substring(0,4);

    td = row.insertCell(2);
    td.innerText = perms[i].join("").substring(4,7);

    td = row.insertCell(3);
    td.innerText = perms[i].join("").substring(7,10);

    td = row.insertCell(4);
    td.innerText = perms[i].join("").substring(10,12);

    td = row.insertCell(5);
    td.innerText = perms[i].join("").substring(12,14);

    td = row.insertCell(6);
    td.innerText = perms[i].join("").substring(14,17);

    td = row.insertCell(7);
    td.innerText = perms[i].join("").substring(17,19);

    td = row.insertCell(8);
    td.innerText = perms[i].join("").substring(19,21);

    td = row.insertCell(9);
    td.innerText = perms[i].join("").substring(21,23);

    td = row.insertCell(10);
    td.innerText = perms[i].join("").substring(23,25);
});

let words = codeBook.words.sort();
let codeBookTableBody = document.getElementById("codeBookTableBody");
for(let i = 0; i < 11; i++) {
    let row = codeBookTableBody.insertRow();
    let td = row.insertCell(0);
    let span = td.appendChild(document.createElement("span"));
    span.setAttribute("class", "upperCase");
    span.appendChild(document.createTextNode(codeBook.numbers[i] + " " + words[i]));

    td = row.insertCell(1);
    span = td.appendChild(document.createElement("span"));
    span.setAttribute("class", "upperCase");
    span.appendChild(document.createTextNode(codeBook.numbers[i + 11] + " " + words[i + 11]));

    td = row.insertCell(2);
    span = td.appendChild(document.createElement("span"));
    span.setAttribute("class", "upperCase");
    span.appendChild(document.createTextNode(codeBook.numbers[i + 22] + " " + words[i + 22]));

    td = row.insertCell(3);
    span = td.appendChild(document.createElement("span"));
    span.setAttribute("class", "upperCase");
    let word = " ";
    if(codeBook.words[i + 33] == undefined) {
       word = "";
    } else {
       word = codeBook.words[i + 33];
    }
    span.appendChild(document.createTextNode(codeBook.numbers[i + 33] + " " + word));
}
