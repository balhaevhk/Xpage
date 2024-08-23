// смена картинки и текста в header
const buttons = document.querySelectorAll('.navigation a');
const preview = document.querySelector('.preview');
const title = document.querySelector('.preview h1')


for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('mouseover', function() {
        preview.className = 'preview';
        const imageClass = this.getAttribute('data-image');
        preview.classList.add(imageClass)
        if (index == 0) {
            title.innerHTML = 'Найди с кем <br>поиграть в баскет'
        } else if (index == 1) {
            title.innerHTML = 'Найди с кем <br>поиграть в баскет2'
        } else if (index == 2) {
            title.innerHTML = 'Найди с кем <br>поиграть в баскет3'
        }
    })
}


