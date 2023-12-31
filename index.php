<!DOCTYPE html>
<html>
    <head>
        <title>Canvas Drawing</title>
    </head>
    <body> 
        <div class="logoBox">
            <div class="logo_main"></div>
            <div class="logo_outline"></div>
            <div class="logo_background"></div>
        </div>
        <script type="text/javascript" src="./intro_App.js"></script>
        <style>
            /* canvas {width: 100%;height: 100%;} */
            body {height: 100vh;}

            .logoBox {width: 100%; height: 100%; display: block; position: relative;}
            .logoBox .logo_main {top: 50%; left: 50%; transform: translate(-50%, -50%); position: absolute; z-index: 3;}
            .logoBox .logo_outline {top: 50%; left: 50%; transform: translate(-50%, -50%); position: absolute; z-index: 2;}
            .logoBox .logo_background {top: 50%; left: 50%; transform: translate(-52%, -55%) rotate(180deg); position: absolute; z-index: 1;}
        </style>

        <script>
                const LogoMain = new LogoApp(".logo_main",{
                    size : 550,
                    background : {
                        backgroundStyles : 'img',
                        src : './logoImg.jpg',
                        globalAlpha : 1
                    },
                    shadow : 'true',
                    shadowOption : {
                        color : 'rgba(0, 0, 0, 0.6)',//rgba 형식
                        blur : 15, //반응형에서는 화면 넓이에 비례해 줄어듬
                        x : -5,
                        y : 5
                    },
                    speed : 300
                });
                const LogoLine = new LogoApp(".logo_outline",{
                    size : 600,
                    background : {
                        backgroundStyles : 'line',
                    },
                    speed : 300
                });
                const LogoBackground = new LogoApp(".logo_background",{
                    size : 600,
                    background : {
                        backgroundStyles : 'color',
                        backgroundColor : '#80B1C2',
                        globalAlpha : 0.8
                    },
                    speed : 1000
                });
        </script>
    </body>
</html>     