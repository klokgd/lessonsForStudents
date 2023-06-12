function printPageDecoration(title) {
    const line = "*".repeat(title.length + 4);
    const emptyLine = "*".concat(" ".repeat(title.length + 2), "*");

    console.log(line);
    console.log("*".concat(" ", title, " ", "*"));
    console.log(emptyLine);
    console.log(line);
}

module.exports = printPageDecoration;
