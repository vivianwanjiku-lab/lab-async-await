function displayPosts(posts) {
    const postsContainer = document.getElementById("posts");
    
    if (!postsContainer) {
        console.error("posts element not found");
        return;
    }
    
    postsContainer.innerHTML = "";
    
    posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className = "post";
        
        const h1 = document.createElement("h1");
        h1.textContent = post.title;
        
        const p = document.createElement("p");
        p.textContent = post.body;
        
        postDiv.appendChild(h1);
        postDiv.appendChild(p);
        postsContainer.appendChild(postDiv);
    });
}

function fetchPosts() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", false);
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            const posts = JSON.parse(xhr.responseText);
            displayPosts(posts);
        }
    };
    
    xhr.send();
}

fetchPosts();
