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
        }

        function paintRectangle(figureObject) {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");
            let centerX = figureObject.x - figureObject.width / 2;
            let centerY = figureObject.y - figureObject.height / 2;

            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = figureObject.bgColour;
            ctx.strokeStyle = figureObject.conturColour;
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(figureObject.angle * Math.PI / 180);
            ctx.rect(centerX, centerY,
                figureObject.width, figureObject.height);
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }

        function paintRegularTriangle() {

        }

        function paintRightTriangle() {

        }

        function paintCircle(figureObject) {
            const ctx = canvas.getContext("2d");
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.beginPath();
            ctx.strokeStyle = figureObject.conturColour;
            ctx.lineWidth = 1;
            ctx.arc(figureObject.x, figureObject.y,
                figureObject.r, 0, 2 * Math.PI);
            ctx.fillStyle = figureObject.bgColour;
            ctx.fill();
            ctx.stroke();
            ctx.restore();

        }

        function paintEllipse(figureObject) {
            const ctx = canvas.getContext("2d");
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.beginPath();
            ctx.strokeStyle = figureObject.conturColour;
            ctx.ellipse(figureObject.x, figureObject.y,
                figureObject.r, figureObject.r2,
                Math.PI / 180 * figureObject.angle, 0, 2 * Math.PI);
            ctx.fillStyle = figureObject.bgColour;
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }
    });