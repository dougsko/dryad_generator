# Random Letter Generator and Tables

This project includes functionalities to generate random letters, create Dryad tables, encoding tables, and a code book.

## Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/your-username/random-letter-generator.git
```

2. Install dependencies:

```
npm install
```

## Usage

### Generating Random Letters

To generate a random letter, you can use the `generateRandomLetter` function provided in `main.js`. The function returns a randomly selected letter from the English alphabet.

### Generating Dryad Tables

The `generateDryadTable` function in `main.js` creates Dryad tables with randomized letters. It accepts an element ID as a parameter and populates the element with the generated table.

### Generating Encoding Tables

The `generateEncodingTable` function creates an encoding table with predefined values. It takes an element ID as a parameter and populates the element with the table.

### Generating Code Book

The `generateCodeBook` function generates a code book based on the data provided in the `codeBook.json` file. It also accepts an element ID as a parameter and populates the element with the generated code book.

## Example

```javascript
// Generating Dryad Tables
generateDryadTable('dryadTable1');
generateDryadTable('dryadTable2');
generateDryadTable('dryadTable3');

// Generating Encoding Table
generateEncodingTable("encodingTable");

// Generating Code Book
generateCodeBook("codeBook");
```

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
