const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes() {
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            // will result in 16
            const box = document.createElement('div')
            // creates 16 divs
            box.classList.add('box')
            // adds class 'box' to each one.
            // console.log(box)
            // Console log allows you to inspect element and view console to see if you've implemented the JS correctly. In this case 'box' refers to const box of line 8
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            //changes the position of the image/gif in each box, j is x and i is y axis. Don't forget to add 'px' suffix. 
            boxesContainer.appendChild(box)
        }
    }
}

createBoxes()