fetch('http://localhost:3000/api/figures')
    .then((response) => {
        return response.json();
    })
    .then((allFigureObjects) => {
        const canvas = document.getElementById("canvas");
        const theDiv = document.querySelector(".canvas-container");
        canvas.width = theDiv.clientWidth;
        canvas.height = theDiv.clientHeight;
        for (let figureObject of allFigureObjects) {
            switch (figureObject.typeFigure) {
                case "10":
                    paintRectangle(figureObject);
                    break;
                case "20":
                    paintRegularTriangle(figureObject);
                    break;
                case "21":
                    paintRightTriangle(figureObject);
                    break;
                case "30":
                    paintCircle(figureObject);
                    break;
                case "31":
                    paintEllipse(figureObject);
                    break;
            }
            // console.log(figureObject[2]);
            // for (let figureParam of figureObject) {}
        }

        function paintRectangle(figureObject) {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");
            let centerX = figureObject.x - figureObject.width / 2;
            let centerY = figureObject.y - figureObject.height / 2;

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(figureObject.angle * Math.PI / 180);
            ctx.fillStyle = figureObject.bgColour;
            ctx.strokeStyle = figureObject.conturColour;
            ctx.strokeRect(centerX, centerY,
                figureObject.width, figureObject.heigh);
            ctx.fillRect(centerX, centerY,
                figureObject.width, figureObject.height);
            ctx.restore();

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(figureObject.angle * Math.PI / 180);
            // ctx.fillStyle = figureObject.bgColour;
            ctx.strokeStyle = figureObject.conturColour;
            ctx.strokeRect(centerX, centerY,
                figureObject.width, figureObject.heigh);
            // ctx.fillRect(centerX, centerY,
            // figureObject.width, figureObject.height);
            ctx.restore();
        }

        function paintRegularTriangle() {

        }

        function paintRightTriangle() {

        }

        function paintCircle() {

        }

        function paintEllipse() {

        }
    });