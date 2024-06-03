import * as codeBook from './codeBook.json'
import { v4 as uuidv4 } from 'uuid'

// main.js

function generateRandomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters.charAt(Math.floor(Math.random() * letters.length));
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateTable(id) {
    const tableElement = document.getElementById(id);
    if (!tableElement) {
        console.error(`Element with ID ${id} not found.`);
        return;
    }

    // Clear the existing content
    tableElement.innerHTML = '';

    // Create headers
    const fromDate = document.createElement('span');
    fromDate.id = 'fromDate';
    fromDate.className = 'first';
    fromDate.innerText = 'From: ';
    tableElement.appendChild(fromDate);

    tableElement.appendChild(document.createElement('br'));

    const untilDate = document.createElement('span');
    untilDate.id = 'untilDate';
    untilDate.className = 'first';
    untilDate.innerText = 'Until: ';
    tableElement.appendChild(untilDate);

    tableElement.appendChild(document.createElement('br'));

    const tableId = document.createElement('span');
    tableId.id = 'tableId';
    tableId.className = 'first';
    tableId.innerText = 'Id: ';
    tableElement.appendChild(tableId);

    tableElement.appendChild(document.createElement('br'));

    // Table generation logic
    const table = document.createElement('table');
    table.classList.add('dryadTable', 'border');

    // Create the table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.innerText = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement('tbody');
    const rowLabels = 'ABCDEFGHIJKLMNOPQRSTU'.split('');
    const numCols = headers.length - 1;
    const columnTextLengths = [4, 3, 3, 2, 2, 3, 2, 2, 2, 2];  // Specific text lengths for each column

    rowLabels.forEach(label => {
        const row = document.createElement('tr');
        const rowLabelCell = document.createElement('td');
        rowLabelCell.innerText = label;
        rowLabelCell.className = 'first';
        row.appendChild(rowLabelCell);

        // Generate shuffled alphabet for the row
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        shuffleArray(alphabet);

        // Fill the columns with appropriate number of letters from the shuffled alphabet
        columnTextLengths.forEach(length => {
            const cell = document.createElement('td');
            const randomText = alphabet.splice(0, length).join('');
            cell.innerText = randomText;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableElement.appendChild(table);
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    generateTable('dryadTable1');
    generateTable('dryadTable2');
    generateTable('dryadTable3');
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
