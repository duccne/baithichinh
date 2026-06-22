const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const newsContainer = document.getElementById('news-container');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error-message');

async function fetchNews() {
    loadingElement.style.display = 'block';
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Lỗi tải dữ liệu từ API');
        const posts = await response.json();
        renderNews(posts.slice(0, 15));
    } catch (error) {
        errorElement.textContent = 'Đã xảy ra lỗi: ' + error.message;
        errorElement.style.display = 'block';
    } finally {
        loadingElement.style.display = 'none';
    }
}

function renderNews(posts) {
    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        newsContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', fetchNews);
