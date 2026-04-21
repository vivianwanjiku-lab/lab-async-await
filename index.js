const postsContainer = document.getElementById("posts");

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();

    displayPosts(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

function displayPosts(posts) {
  posts.slice(0, 10).forEach(post => {
    const postElement = document.createElement("div");

    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <hr/>
    `;

    postsContainer.appendChild(postElement);
  });
}

getPosts();
