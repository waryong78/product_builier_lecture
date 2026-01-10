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
        { category: 'Korean', name: 'Bibimbap', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bibimbap_mixed.jpg/1000px-Bibimbap_mixed.jpg' },
        { category: 'Korean', name: 'Kimchi Jjigae', image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Korean_stew-Kimchi_jjigae-01.jpg' },
        { category: 'Korean', name: 'Bulgogi', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Bulgogi.JPG' },
        { category: 'Japanese', name: 'Sushi', image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Sushi_%284%29.jpg' },
        { category: 'Japanese', name: 'Ramen', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Ramen_Jump_002.jpg' },
        { category: 'Japanese', name: 'Tonkatsu', image: 'https://upload.wikimedia.org/wikipedia/commons/T/To/Tonkatsu_Plate.jpg' },
        { category: 'Chinese', name: 'Jajangmyeon', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Korean_black_bean_noodle_dish-Jaengban_Jajangmyeon-01.jpg' },
        { category: 'Chinese', name: 'Mapo Tofu', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mapo_Tofu_%288840681150%29.jpg' },
        { category: 'Chinese', name: 'Sweet and Sour Pork', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Flickr_-_Sweet_and_Sour_Pork.jpg' },
        { category: 'Western', name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { category: 'Western', name: 'Pasta', image: 'https://images.unsplash.com/photo-1551887373-632b7b192648?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { category: 'Western', name: 'Steak', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Steak-Valladolid-2009.jpg' },
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