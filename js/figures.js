fetch('http://localhost:3000/api/figures')
    .then((response) => {
        return response.json();
    })
    .then((allFigureObjects) => {
        const canvas = document.getElementById("canvas");
        const theDiv = document.querySelector(".canvas-container");
        canvas.width = theDiv.clientWidth;
        canvas.height = theDiv.clientHeight;

        const ctx = canvas.getContext("2d");

        ctx.translate(canvas.width / 2, canvas.height / 2);
        for (let figureObject of allFigureObjects) {

            if (+figureObject.y > canvas.height / 2 || +figureObject.y < -(canvas.height / 2)) {
                ctx.scale = 0.9;
            }
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



            ctx.save();
            ctx.fillStyle = figureObject.bgColour;
            ctx.strokeStyle = figureObject.conturColour;



            // translate(+figureObject.x + +figureObject.width / 2, +figureObject.y + +figureObject.height / 2);
            ctx.rotate(figureObject.angle * Math.PI / 180);
            // translate(-(+figureObject.x + +figureObject.width / 2), -(+figureObject.y + +figureObject.height / 2));
            ctx.rect(+figureObject.x, +figureObject.y, +figureObject.width, +figureObject.height)

            ctx.fill();
            ctx.stroke();
            ctx.restore()

        }

        function paintRegularTriangle(figureObject) {
            const ctx = canvas.getContext("2d");
            ctx.save();
            let height = +(figureObject.a * (Math.sqrt(3) / 2));
            ctx.beginPath();
            ctx.fillStyle = figureObject.bgColour;
            ctx.strokeStyle = figureObject.conturColour;
            // ctx.translate(canvas.width / 2, canvas.height / 2 - height / 2);
            // ctx.translate(canvas.width / 2 + +figureObject.x, canvas.height / 2 + +figureObject.y - height / 2);
            ctx.translate(+figureObject.x + height / 2, +figureObject.y + height / 2);
            ctx.rotate(figureObject.angle * Math.PI / 180);
            ctx.translate(+figureObject.x + height / 2, -(+figureObject.y + height / 2));


            ctx.moveTo(+(figureObject.x), +(figureObject.y));
            ctx.lineTo((+figureObject.x) + (+figureObject.a) / 2, +(figureObject.y) + height);
            ctx.lineTo((+figureObject.x) - (+figureObject.a) / 2, +(figureObject.y) + height);
            ctx.moveTo(+(figureObject.x), +(figureObject.y));

            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.restore()
        }

        function paintRightTriangle(figureObject) {
            let ctx = canvas.getContext('2d');
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = figureObject.bgColour;
            ctx.strokeStyle = figureObject.conturColour;
            // ctx.translate(canvas.width / 2 - +figureObject.b / 2, canvas.height / 2 - +figureObject.a / 2);
            // ctx.rotate(figureObject.angle * Math.PI / 180);

            // let x1=
            // let x2
            // let x3=
            // let x2
            // let x1=
            // let x2




            ctx.moveTo(figureObject.x, figureObject.y);
            ctx.lineTo(figureObject.x, +figureObject.y + +figureObject.a);
            ctx.lineTo(+figureObject.x + +figureObject.b, +figureObject.y + +figureObject.a);
            ctx.lineTo(figureObject.x, figureObject.y);

            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.restore()
        }

        function paintCircle(figureObject) {
            const ctx = canvas.getContext("2d");
            ctx.save();
            // ctx.translate(canvas.width / 2, canvas.height / 2);
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
            // ctx.translate(canvas.width / 2, canvas.height / 2);
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