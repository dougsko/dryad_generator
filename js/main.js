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

function generateDryadTable(id) {
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
    const rowLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXY'.split('');
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

function generateEncodingTable(elementId) {
    var tableHtml = `
        <table class="encodingTable border">
            <tbody>
                <tr>
                    <td>CODE-0</td>
                    <td>B-70</td>
                    <td>P-80</td>
                    <td>FIG-90</td>
                </tr>
                <tr>
                    <td>A-1</td>
                    <td>C-71</td>
                    <td>Q-81</td>
                    <td>(.)-90</td>
                </tr>
                <tr>
                    <td>E-2</td>
                    <td>D-72</td>
                    <td>R-82</td>
                    <td>(:)-92</td>
                </tr>
                <tr>
                    <td>I-3</td>
                    <td>F-73</td>
                    <td>S-83</td>
                    <td>(')-93</td>
                </tr>
                <tr>
                    <td>N-4</td>
                    <td>G-74</td>
                    <td>U-84</td>
                    <td>( )-94</td>
                </tr>
                <tr>
                    <td>O-5</td>
                    <td>H-75</td>
                    <td>V-85</td>
                    <td>(+)-95</td>
                </tr>
                <tr>
                    <td>T-6</td>
                    <td>J-76</td>
                    <td>W-86</td>
                    <td>(-)-96</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>K-77</td>
                    <td>X-87</td>
                    <td>(=)-97</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>L-78</td>
                    <td>Y-88</td>
                    <td>REQ-98</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td>M-79</td>
                    <td>Z-89</td>
                    <td>SPC-99</td>
                </tr>
            </tbody>
        </table>`;

    document.getElementById(elementId).innerHTML = tableHtml;
}

function generateCodeBook(elementId) {
    // Create table element
    let codeBookTable = document.createElement("table");
    codeBookTable.setAttribute("id", "codeBookTable");

    // Create tbody element
    let codeBookTableBody = document.createElement("tbody");
    codeBookTableBody.setAttribute("id", "codeBookTableBody");

    // Append tbody to table
    codeBookTable.appendChild(codeBookTableBody);

    // Append table to the specified element
    let codeBookContainer = document.getElementById(elementId);
    codeBookContainer.appendChild(codeBookTable);

    let words = codeBook.words.sort();
    for (let i = 0; i < 11; i++) {
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
        if (codeBook.words[i + 33] == undefined) {
            word = "";
        } else {
            word = codeBook.words[i + 33];
        }
        span.appendChild(document.createTextNode(codeBook.numbers[i + 33] + " " + word));
    }
}

// Function to generate tables dynamically
function generateDryadTables(numTables) {
  const gridContainer = document.getElementById("dryadTables");

  for (let i = 1; i <= numTables; i++) {
    const tableId = `dryadTable${i}`;
    const table = document.createElement('div');
    table.id = tableId;
    table.classList.add('grid-item');
    gridContainer.appendChild(table);
    // Call your table generation function here if needed
    generateDryadTable(tableId);
  }
}





// Example usage
document.addEventListener('DOMContentLoaded', () => {
    // Call the function with the number of tables you want to generate
    generateDryadTables(8); // Change the number as needed
    generateEncodingTable("encodingTable");
    generateCodeBook("codeBook");
});