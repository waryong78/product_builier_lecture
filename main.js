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
        { category: 'Korean', name: 'Bibimbap', image: 'https://plus.unsplash.com/premium_photo-1664472660721-5524c5123919?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { category: 'Korean', name: 'Kimchi Jjigae', image: 'https://images.unsplash.com/photo-1586523587524-175835933391?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { category: 'Korean', name: 'Bulgogi', image: 'https://images.unsplash.com/photo-1593562280925-a0a4c284b3dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { category: 'Japanese', name: 'Sushi', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { category: 'Japanese', name: 'Ramen', image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { category: 'Japanese', name: 'Tonkatsu', image: 'https://images.unsplash.com/photo-1588631115379-b1b85099a9a3?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { category: 'Chinese', name: 'Jajangmyeon', image: 'https://images.unsplash.com/photo-1626082270921-b9979bca3a62?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { category: 'Chinese', name: 'Mapo Tofu', image: 'https://images.unsplash.com/photo-1606114382348-5ac58a9ab44d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { category: 'Chinese', name: 'Sweet and Sour Pork', image: 'https://images.unsplash.com/photo-1522861234477-0c7cb35b3838?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { category: 'Western', name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { category: 'Western', name: 'Pasta', image: 'https://images.unsplash.com/photo-1621996346565-e326b20f545c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { category: 'Western', name: 'Steak', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
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