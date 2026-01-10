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
        { category: 'Korean', name: 'Bibimbap', image: 'https://via.placeholder.com/400x300.png?text=Bibimbap' },
        { category: 'Korean', name: 'Kimchi Jjigae', image: 'https://via.placeholder.com/400x300.png?text=Kimchi+Jjigae' },
        { category: 'Korean', name: 'Bulgogi', image: 'https://via.placeholder.com/400x300.png?text=Bulgogi' },
        { category: 'Japanese', name: 'Sushi', image: 'https://via.placeholder.com/400x300.png?text=Sushi' },
        { category: 'Japanese', name: 'Ramen', image: 'https://via.placeholder.com/400x300.png?text=Ramen' },
        { category: 'Japanese', name: 'Tonkatsu', image: 'https://via.placeholder.com/400x300.png?text=Tonkatsu' },
        { category: 'Chinese', name: 'Jajangmyeon', image: 'https://via.placeholder.com/400x300.png?text=Jajangmyeon' },
        { category: 'Chinese', name: 'Mapo Tofu', image: 'https://via.placeholder.com/400x300.png?text=Mapo+Tofu' },
        { category: 'Chinese', name: 'Sweet and Sour Pork', image: 'https://via.placeholder.com/400x300.png?text=Sweet+and+Sour+Pork' },
        { category: 'Western', name: 'Pizza', image: 'https://via.placeholder.com/400x300.png?text=Pizza' },
        { category: 'Western', name: 'Pasta', image: 'https://via.placeholder.com/400x300.png?text=Pasta' },
        { category: 'Western', name: 'Steak', image: 'https://via.placeholder.com/400x300.png?text=Steak' },
    ];

    const recommendMenu = () => {
        return menus[Math.floor(Math.random() * menus.length)];
    };

    const displayMenu = () => {
        const menu = recommendMenu();
        menuContainer.innerHTML = `
            <div class="menu-item">
                <img src="${menu.image}" alt="${menu.name}" class="menu-image">
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