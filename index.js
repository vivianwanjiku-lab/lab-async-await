const postsContainer =
  document.querySelector("main") ||
  document.getElementById("posts") ||
  document.body;

async function fetchPosts() {
  postsContainer.innerHTML = "Loading posts...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();

    displayPosts(posts);

    return posts; // ✅ IMPORTANT: lets tests wait properly

  } catch (error) {
    postsContainer.innerHTML = `<p>${error.message}</p>`;
    throw error;
  }
}

function displayPosts(posts) {
  postsContainer.innerHTML = "";

  posts.slice(0, 10).forEach(post => {
    const title = document.createElement("h1"); // ✅ required
    title.textContent = post.title;

    const body = document.createElement("p"); // ✅ required
    body.textContent = post.body;

    postsContainer.appendChild(title);
    postsContainer.appendChild(body);
  });
}

// ✅ export for tests (VERY important)
if (typeof module !== "undefined") {
  module.exports = { fetchPosts };
}

// ✅ auto-run
fetchPosts();
