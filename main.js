const redirectButton = document.getElementById("redirectButtonLvlOne");
redirectButton.onclick = function (){
    setTimeout(() => {
        redirectButton.textContent = "Wait... 3s";
        setTimeout(() => {
            redirectButton.textContent = "Wait... 2s";
            setTimeout(() => {
                redirectButton.textContent = "Wait... 1s";
                setTimeout(() => {
                    location.href = "/home/kylian/Desktop/E-commerce/front/exercices/quiz-foot/stages/stage 1/index.html";
                }, "1000");
            }, "1000");
        }, "1000");
    }, "1000");
}
