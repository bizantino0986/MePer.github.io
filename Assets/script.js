let button2 = document.querySelector('#btn2')

button2.addEventListener('mouseover', move)
function move() {
    if (button2.classList.contains('anormal')) {
        button2.classList.replace('anormal', 'move1');
    } else if (button2.classList.contains('move1')) {
        button2.classList.replace('move1', 'move2');
    } else if (button2.classList.contains('move2')) {
        button2.classList.replace('move2', 'move3');
    } else if (button2.classList.contains('move3')) {
        button2.classList.replace('move3', 'move4');
    } else if (button2.classList.contains('move4')) {
        button2.classList.replace('move4', 'anormal');
    }
}