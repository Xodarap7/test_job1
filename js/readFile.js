/**\file
 * Программный модуль, получающий объекты фигур из текстового файла
 * формат - javaScript
 * 
 * @param {Object} fs подключаем использование файлловой системы
 * @param {File} figureClass подключаем файл с объявлением классов
 */

const fs = require('fs');
const figureClass = require("./figureClasses");

module.exports = {

    /**
     * Функция создающая объекты фигур
     * @param {String} sepParagraph параметр, необходимый для использования стандартного метода строк "split"(абзацы)
     * @param {String} sepParam параметр, необходимый для использования стандартного метода строк "split"(пробелы)
     * @param {String} fileContent считанный файл пользователя и преобразованный в строку
     * @param {Array} arrayOfParagraph массив сторок (каждый элемент массива содержит параметры фигуры)
     * @param {Array} arrayOfParam массив параметров (каждый элемент массива является параметром фигуры)
     */
    getObjects: function() {
        const sepParagraph = "\r\n";
        const sepSpace = " ";
        let allFigureObjects = [];
        let fileContent = fs.readFileSync('./uploads/figurefile.txt').toString();
        console.log(fileContent);
        const arrayOfParagraph = fileContent.split(sepParagraph);
        /**
         * Цикл, создающий объекты фигур на основе параметра с индексом 3
         */
        for (let elem of arrayOfParagraph) {
            const arrayOfParam = elem.split(sepSpace); // получили параметры для объектов
            switch (arrayOfParam[3]) {
                case "10":
                    {
                        let rectangle = new figureClass.Rectangle(arrayOfParam[4], arrayOfParam[5],
                            arrayOfParam[0], arrayOfParam[1], arrayOfParam[2],
                            (`rgb(${arrayOfParam[7]},${arrayOfParam[8]},${arrayOfParam[9]});`),
                            (`rgb(${arrayOfParam[10]},${arrayOfParam[11]},${arrayOfParam[12]});`));
                        allFigureObjects.push(rectangle);
                        break;
                    }
                case "20":
                    {
                        let regularTriangle = new figureClass.RegularTriangle(arrayOfParam[4],
                            arrayOfParam[0], arrayOfParam[1], arrayOfParam[2],
                            (`rgb(${arrayOfParam[7]},${arrayOfParam[8]},${arrayOfParam[9]});`),
                            (`rgb(${arrayOfParam[10]},${arrayOfParam[11]},${arrayOfParam[12]});`));
                        allFigureObjects.push(regularTriangle);
                        break;
                    }
                case 21:
                    {

                    }
                case 30:
                    {

                    }
                case 31:
                    {

                    }

            }
        }
        console.log(allFigureObjects);

    }

}