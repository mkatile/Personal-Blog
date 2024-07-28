document.addEventListener('DOMContentLoaded', () => {
  const postsContainer = document.getElementById('postsContainer');
  const backButton = document.getElementById('backButton');
  const toggleModeButton = document.getElementById('toggleMode');

  if (backButton) {
    backButton.addEventListener('click', () => {
      blogLogic.redirectTo('index.html');
    });
  }

  if (toggleModeButton) {
    toggleModeButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  if (postsContainer) {
    const posts = blogLogic.getPosts();
    console.log('Posts to display:', posts);
    if (posts.length === 0) {
      postsContainer.innerHTML = '<p>No blog posts yet.</p>';
    } else {
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.content}</p>
          <p><em>by ${post.username}</em></p>
        `;
        postsContainer.appendChild(postElement);
      });
    }
  }
});

