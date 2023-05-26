const fs = require('fs')
const http = require('http');
const path = require('path');
const url = require('url');

// const filename = 'data.txt';
//Вывод количества символов в файле
// fs.readFile(filename, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Ошибка при чтении файла:', err);
//     } else {
//         const characterCount = data.length;
//         console.log(`Количество символов в файле ${filename}: ${characterCount}`);
//     }
// })

//Вывод количества цифр в файле
// fs.readFile(filename, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Ошибка при чтении файла:', err);
//     } else {
//         const digitCount = data.replace(/\D/g, '').length;
//         console.log(`Количество цифр в файле ${filename}: ${digitCount}`);
//     }
// })

//Запись в файл информации о текущей дате.
// const currentDate = new Date().toString();
// const currentDate = 'Script start is ' + new Date().toString() + '\n';
// fs.writeFile('currentDate.txt', currentDate, (err) => {
//     if (err) {
//         console.error('Ошибка при записи в файл:', err);
//     } else {
//         console.log('Дата успешно записана в файл.');
//     }
// })

//Ведем логи: записываем дату каждого запуска скрипта.
// fs.appendFile('scriptLogs.txt', currentDate, (err) => {
//     if (err) {
//         console.error('Ошибка при записи в файл:', err);
//     } else {
//         console.log('Дата успешно записана в файл.');
//     }
// })

//Редактируем JSON файл.
// const user = {
//     username: 'Test Userov',
//     email: 'test@testov.com'
// }

// fs.writeFile('user.json', JSON.stringify(user), (err) => {
//     if (err) {
//         console.error('Ошибка при записи в файл:', err);
//     } else {
//         console.log('Дата успешно записана в файл.');
//     }
// })

//Прочесть файл, получить из него массив, добавить в массив новый объект и перезаписать файл
// const userPathName = 'users.json'
// const data = fs.readFileSync(userPathName, 'utf8')
// const jsonArray = JSON.parse(data);
// const arrayData = Array.isArray(jsonArray) ? jsonArray : [];

// arrayData.push({
//     username: "Petya",
//     email: 'kkk@kkk.kkk'
// })
// const updatedData = JSON.stringify(arrayData, null, 2);
// fs.writeFile(userPathName, updatedData, 'utf8', (err) => {
//     if (err) {
//         console.error('Ошибка при записи файла:', err);
//         return;
//     }
// })

// Создание веб-сервера для отображения содержимого файла
// const filePath = 'users.json'
// const server = http.createServer(function (req, res) {
//     const filePath = req.url.substr(1); // /index
//     fs.access(filePath, fs.constants.R_OK, err => {
//         // если произошла ошибка - отправляем статусный код 404
//         if (err) {
//             res.statusCode = 404;
//             res.end("Resourse not found!");
//         }
//         else {
//             // fs.createReadStream(filePath).pipe(res);
//             const data = fs.readFileSync(filePath, 'utf-8')
//             res.end(data)
//         }
//     });
// })

// const port = 3000

// server.listen(port, () => {
//     console.log('Server is listen', port)
// })

//Определение размера файла
// const filePath = 'users.json'
// const fileStat = fs.stat(filePath, (err, stats) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(stats.size)
// }
// )

//Копирование файла
// const inputFilePath = './a/data.txt'
// const outputFilePath = './b/data.txt'
// fs.copyFileSync(inputFilePath, outputFilePath)

//Удаление файла
// const filePath = './b/data.txt'
// fs.unlinkSync(filePath)

//Вывод списка файлов в директории
// fs.readdir('./', (err, files) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     files.forEach(file => {
//         console.log(file);
//     });
// })

//Переименование файла
// fs.renameSync('./a/users.json', 'usersArray.json')

//Проверка папок в директории и удаление, если они пустые
// const directoryPath = '.';

// function isDirectory(path) {
//     const stat = fs.statSync(path)
//     return stat.isDirectory()
// }

// function getDirectiories(parentDirectory) {
//     const directories = []
//     const allFiles = fs.readdirSync(parentDirectory)
//     allFiles.forEach(file => {
//         const fullPath = path.join(parentDirectory, file);
//         if (isDirectory(fullPath)) {
//             directories.push(file)
//         }
//     })
//     return directories
// }

// function removeEmptyDirectories(directories) {
//     directories.forEach(directory => {
//         const files = fs.readdirSync(directory)
//         if (files.length == 0) {
//             fs.rmdir(directory, err => {
//                 if (err) {
//                     console.error(err)
//                     return
//                 }
//                 console.log(`Пустая папка ${directory} удалена`)
//             })
//         }
//     })
// }

// const directoryPath = '.';

// fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//         console.log('Ошибка чтения директории:', err);
//         return;
//     }

//     files.forEach((file) => {
//         const filePath = path.join(directoryPath, file);

//         fs.stat(filePath, (err, stats) => {
//             if (err) {
//                 console.log(`Ошибка чтения информации о файле ${file}:`, err);
//                 return;
//             }

//             if (stats.isDirectory()) {
//                 fs.readdir(filePath, (err, subFiles) => {
//                     if (err) {
//                         console.log(`Ошибка чтения директории ${file}:`, err);
//                         return;
//                     }

//                     if (subFiles.length === 0) {
//                         console.log(`Папка ${file} is empty.`);
//                     } else {
//                         console.log(`В папке ${file} has a lot files.`);
//                     }
//                 });
//             }
//         });
//     });
// });

// const directories = getDirectiories(directoryPath)
// removeEmptyDirectories(directories)

// fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//         console.error('Ошибка чтения директории:', err);
//         return;
//     }

//     if (files.length === 0) {
//         console.log('Папка полностью пуста.');
//     } else {
//         console.log('В папке есть файлы или подпапки.');
//     }
// });

// Создание веб-сервера для отображения содержимого файла
const html = 'index.html'
const text = 'scriptLogs.txt'
const server = http.createServer(function (req, res) {
    const queryObject = url.parse(req.url, true).query

    if (req.url == '/html') {
        const data = fs.readFileSync(html, 'utf-8')
        res.end(data)
    } else if (req.url == '/text') {
        const data = fs.readFileSync(text, 'utf-8')
        res.end(data)
    } else if (queryObject != {}) {
        fs.appendFileSync('query.txt', queryObject.test + '\n')
        res.end('Query успешно записано')
    }
    else {
        res.statusCode = 404;
        res.end("Resourse not found!");

    }
})

const port = 3000

server.listen(port, () => {
    console.log('Server is listen', port)
})
