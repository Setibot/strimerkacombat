document.addEventListener("DOMContentLoaded", function() {
    const clickableImage = document.getElementById('clickable-image');
    const coinsElement = document.getElementById('coins');
    const clickSound = document.getElementById('click-sound');
    let coins = 0;

    clickableImage.addEventListener('click', function() {
        // Увеличиваем счетчик монет
        coins++;
        coinsElement.textContent = coins;

        // Проигрываем звук
        clickSound.currentTime = 0; // Сбрасываем звук, чтобы он играл с начала
        clickSound.play();
    });
});
