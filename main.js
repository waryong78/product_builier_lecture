document.addEventListener('DOMContentLoaded', () => {
    const dateContainer = document.getElementById('date-container');
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateContainer.textContent = today.toLocaleDateString('en-US', options);

    const recommendBtn = document.getElementById('recommend-btn');
    const menuContainer = document.getElementById('menu-recommendations');
    const themeSwitch = document.getElementById('theme-switch');
    const html = document.documentElement;

    const menus = [
        { category: 'Korean', name: 'Bibimbap' },
        { category: 'Korean', name: 'Kimchi Jjigae' },
        { category: 'Korean', name: 'Bulgogi' },
        { category: 'Japanese', name: 'Sushi' },
        { category: 'Japanese', name: 'Ramen' },
        { category: 'Japanese', name: 'Tonkatsu' },
        { category: 'Chinese', name: 'Jajangmyeon' },
        { category: 'Chinese', name: 'Mapo Tofu' },
        { category: 'Chinese', name: 'Sweet and Sour Pork' },
        { category: 'Western', name: 'Pizza' },
        { category: 'Western', name: 'Pasta' },
        { category: 'Western', name: 'Steak' },
    ];

    const recommendMenu = () => {
        return menus[Math.floor(Math.random() * menus.length)];
    };

    const displayMenu = () => {
        const menu = recommendMenu();
        menuContainer.innerHTML = `
            <div class="menu-item">
                <div class="menu-category">${menu.category}</div>
                <div class="menu-name">${menu.name}</div>
            </div>
        `;
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

    recommendBtn.addEventListener('click', displayMenu);

    // Initial recommendation
    displayMenu();
});