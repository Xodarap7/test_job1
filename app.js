// подключение express
const express = require("express");
const multer = require("multer");

// создаем объект приложения
const app = express();

// Внешние файлы
const { getObjects } = require("./js/readFile");

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname);
  },
});

app.use(express.static(__dirname));
app.use(multer({ storage: storageConfig }).single("figurefile.txt"));

// определяем обработчик для маршрута
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/api/figures", function (req, res) {
  const content = getObjects();
  console.log("Content is ", content);
  res.send(content);
});

app.get("/figure", function (req, res) {
  // отправляем ответ
  res.sendFile(__dirname + "/html/figures.html");
});

app.post("/upload", function (req, res, next) {
  let figurefile = req.file;
  console.log(figurefile);
  if (!figurefile) res.send("Ошибка при загрузке файла");
  else {
    //res.send("Файл загружен");

    res.sendFile(__dirname + "/html/filepost.html");
  }
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000, () => {
  console.log("Server started");
});
