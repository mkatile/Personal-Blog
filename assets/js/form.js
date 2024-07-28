document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('blogForm');
  const errorMessage = document.getElementById('error-message');
  
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value.trim();
      const title = document.getElementById('title').value.trim();
      const content = document.getElementById('content').value.trim();
      
      if (!username || !title || !content) {
        errorMessage.textContent = 'Please complete the form.';
        return;
      }

      blogLogic.savePost(username, title, content);
      blogLogic.redirectTo('blog.html');
    });
  }
});
