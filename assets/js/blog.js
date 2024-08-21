// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  const postsContainer = document.getElementById('postList');
  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  if (posts.length > 0) {
    posts.forEach(function(post) {
      const postElement = document.createElement('div');
      postElement.classList.add('post-container');
      postElement.innerHTML = `
        <h3>${post.blogTitle}</h3>
        <p>${post.content}</p>
        <span>Posted by: ${post.username}</span>
      `;
      postsContainer.appendChild(postElement);
    });
  } else {
    postsContainer.innerHTML = 'No blog posts to display.';
  }
});

// Theme toggle logic
const modeToggle = document.getElementById('modeToggle');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  modeToggle.textContent = theme === 'dark' ? '🌚' : '☀️';
}

modeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// Initialize the theme based on saved preference or default to light mode
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);
