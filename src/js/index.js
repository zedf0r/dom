import '.././index.html'
import '../css/main.css'
import img from '../img/goblin.png'
class gameInit {
    constructor(element) {
        this._element = element ** 2;
    }

    buildField() {
        const playingField = document.querySelector('.main');
        for (let i = 0; i < this._element; i++) {
            const cell = document.createElement('div');
            cell.classList.add('box');
            playingField.appendChild(cell)
        }
        this.changePosition();
    }

    changePosition() {
        let randomDuplicate = null;
        const imgCreate = document.createElement('img')
        imgCreate.src = './src/img/goblin.png'
        imgCreate.alt = 'Гоблин'
        const boxs = document.querySelectorAll('.box')

        let random = Math.round(Math.random() * (this._element - 1))
        boxs[random].appendChild(imgCreate)
        
        setInterval(() => {
            do {
                random = Math.round(Math.random() * (this._element - 1))
            } while (random === randomDuplicate)
            boxs[random].appendChild(imgCreate)
            randomDuplicate = random
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const game = new gameInit(4);
    game.buildField()
})