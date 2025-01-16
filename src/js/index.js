import '.././index.html'
import '../css/main.css'
class gameInit {
    constructor(element) {
        this._element = element;
    }

    changePosition() {
        const boxs = this._element.querySelectorAll('.box');
        let randomDuplicate = null;
        setInterval(() => {
            boxs.forEach(element=> {
                const img = element.querySelector('img');
                if (img) {
                    element.removeChild(img)
                }
            });
            let random = Math.round(Math.random() * (boxs.length - 1))
            if (random === randomDuplicate) {
                random += 1 % boxs.length;
            }
            const imgCreate = document.createElement('img')
            imgCreate.src = './src/img/goblin.png'
            boxs[random].appendChild(imgCreate)
            randomDuplicate = random
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const game = new gameInit(document.querySelector('.main'));
    game.changePosition();
})