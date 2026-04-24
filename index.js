function displayPosts(posts) { const ul = document.getElementById("post-list");

posts.forEach(post => { const li = document.createElement("li");

const h1 = document.createElement("h1"); h1.textContent = post.title; const p = document.createElement("p"); p.textContent = post.body; li.appendChild(h1); li.appendChild(p); ul.appendChild(li);

}); }

// IMPORTANT: make fetch synchronous from test perspective function fetchPosts() { const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", false); // sync request

xhr.onload = function () { const posts = JSON.parse(xhr.responseText); displayPosts(posts); };
