// подключение express
const express = require("express");
const multer = require("multer");
// const { getObjects } = require("./js/readFile.js");


// создаем объект приложения
const app = express();
///Внешние файлы
const readUserFile = require("./js/readFile.js");
// let allFigureObjects = readUserFile.allFigureObjects;


const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname);
    }
});
app.use(express.static(__dirname));
app.use(multer({ storage: storageConfig }).single("figurefile.txt"));

// определяем обработчик для маршрута "/
app.get("/api/figures", function(req, res){

    const content = allFigureObjects;
    // const figures = JSON.parse(content);
    res.send(content);
    });
app.get("/figure", function(req, res) {

    // отправляем ответ
    res.sendFile(__dirname + '/html/figures.html');
    // res.render('/figure', { figures: allFigureObjects })
});
app.post("/upload", function(req, res, next) {

    let figurefile = req.file;
    console.log(figurefile);
    if (!figurefile)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
})
const allFigureObjects = readUserFile.getObjects();

console.log(allFigureObjects);

// начинаем прослушивать подключения на 3000 порту
app.listen(3000, () => { console.log("Server started"); });