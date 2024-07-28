document.addEventListener('DOMContentLoaded', () => {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];

  function savePost(username, title, content) {
    posts.push({ username, title, content });
    localStorage.setItem('posts', JSON.stringify(posts));
    console.log('Post saved:', { username, title, content });
  }

  function getPosts() {
    console.log('Retrieved posts:', posts);
    return posts;
  }

  function redirectTo(page) {
    window.location.href = page;
  }
// Ensure blogLogic is defined globally
  window.blogLogic = {
    savePost,
    getPosts,
    redirectTo
  };
});

