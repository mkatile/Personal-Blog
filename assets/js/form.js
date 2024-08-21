document.getElementById('blogForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const username = document.getElementById('username').value.trim();
  const blogTitle = document.getElementById('blogTitle').value.trim();
  const content = document.getElementById('content').value.trim();

  // Check if all fields are filled
  if (!username || !blogTitle || !content) {
    alert("Please fill in all fields before submitting the form.");
    return;
  }

  // Create a blog post object
  const blogPost = { username, blogTitle, content };

  // Retrieve existing posts from localStorage
  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  // Add the new blog post to the array
  posts.push(blogPost);

  // Save the updated array back to localStorage
  localStorage.setItem('blogPosts', JSON.stringify(posts));

  // Optional: Provide feedback to the user
  alert("Your blog post has been submitted!");

  // Redirect to the blog page
  window.location.href = './blog.html';
});

