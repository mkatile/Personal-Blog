
// document.addEventListener('DOMContentLoaded', function () {
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
};

});