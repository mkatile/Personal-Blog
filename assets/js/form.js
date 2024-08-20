document.getElementById('blogForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const blogTitle = document.getElementById('blogTitle').value;
  const content = document.getElementById('content').value;

  if (!username || !blogTitle || !content) {
      alert("Please fill in all fields before submitting the form.");
      return;
  }

  const blogPost = { username, blogTitle, content };
  
  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  posts.push(blogPost);

  localStorage.setItem('blogPosts', JSON.stringify(posts));

  // blogForm.reset();
  window.location.href ='blog.html';

});




