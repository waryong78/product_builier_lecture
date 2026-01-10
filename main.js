document.addEventListener('DOMContentLoaded', () => {
    const dateContainer = document.getElementById('date-container');
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateContainer.textContent = today.toLocaleDateString('en-US', options);

    const generateBtn = document.getElementById('generate-btn');
    const lottoGamesContainer = document.getElementById('lotto-games');
    const themeSwitch = document.getElementById('theme-switch');
    const html = document.documentElement;

    const getBallColor = (number) => {
        if (number <= 10) return 'var(--ball-color-1)';
        if (number <= 20) return 'var(--ball-color-2)';
        if (number <= 30) return 'var(--ball-color-3)';
        if (number <= 40) return 'var(--ball-color-4)';
        return 'var(--ball-color-5)';
    };

    const generateLottoNumbers = () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    };

    const displayLottoGames = () => {
        lottoGamesContainer.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const gameElement = document.createElement('div');
            gameElement.classList.add('lotto-game');

            const gameLabel = document.createElement('span');
            gameLabel.classList.add('game-label');
            gameLabel.textContent = `Game ${i + 1}`;
            gameElement.appendChild(gameLabel);

            const numbersContainer = document.createElement('div');
            numbersContainer.classList.add('lotto-numbers');

            const numbers = generateLottoNumbers();
            numbers.forEach(number => {
                const ball = document.createElement('div');
                ball.classList.add('lotto-ball');
                ball.textContent = number;
                ball.style.backgroundColor = getBallColor(number);
                numbersContainer.appendChild(ball);
            });

            gameElement.appendChild(numbersContainer);
            lottoGamesContainer.appendChild(gameElement);
        }
    };

    // Theme switcher
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    themeSwitch.checked = savedTheme === 'dark';

    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    generateBtn.addEventListener('click', displayLottoGames);

    // Initial generation
    displayLottoGames();
});