const fs = require('fs');

function findInText(text, searchString) {
    return text.indexOf(searchString)
}

function logText(text) {
    console.log(text);
}

function searchFilesForText(searchDirectory, searchText) {
    const files = fs.readdirSync(searchDirectory);
    files.forEach(file => {
        const filePath = `${ searchDirectory }/${file}`;
        const data = fs.readFileSync(filePath, 'utf8');
        if (data.includes(searchText)) {
            console.log(`Text "${searchText}" found in file ${ filePath }`);
        } else {
            console.log(`Text "${searchText}" not found in file ${ filePath }`);
        }
    });
}

function drawFigure(line1, line2, line3) {
    console.log(line1)
    console.log(line2)
    console.log(line3)
} 

const searchDirectory = 'the path to the file';
const searchText = 'Name of the text to search';
// searchFilesForText(searchDirectory, searchText);

module.exports = { findInText, logText, drawFigure }