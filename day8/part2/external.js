const API = "https://jsonplaceholder.typicode.com/posts";
const postsContainer = document.getElementById("postsContainer");
// ====================================================
// GET
// ====================================================
document.getElementById("loadBtn").addEventListener("click", getPosts);
function getPosts() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const posts = JSON.parse(xhr.responseText);
            postsContainer.innerHTML = "";
            // Only showing first 10 posts
            posts.slice(0, 10).forEach(function (post) {
                displayPost(post);
            });
        }
    };
    xhr.send();
}
// ====================================================
// POST
// ====================================================
document.getElementById("addForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", API);
    xhr.setRequestHeader(
        "Content-Type",
        "application/json"
    );
    const newPost = {
        title: title,
        body: body,
        userId: 1
    };
    xhr.onload = function () {
        if (xhr.status === 201) {
            const createdPost = JSON.parse(xhr.responseText);
            console.log("Post created:", createdPost);
            // Change UI
            displayPost(createdPost);
            // Clear inputs
            document.getElementById("title").value = "";
            document.getElementById("body").value = "";
        }
    };
    xhr.send(JSON.stringify(newPost));
});
// ====================================================
// PUT
// ====================================================
document.getElementById("updateBtn").addEventListener("click", function () {
    const id = document.getElementById("updateId").value;
    const title = document.getElementById("updateTitle").value;
    const body = document.getElementById("updateBody").value;
    if (!id) {
        alert("Enter post ID");
        return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open(
        "PUT",
        `${API}/${id}`
    );
    xhr.setRequestHeader(
        "Content-Type",
        "application/json"
    );
    const updatedPost = {

        id: Number(id),
        title: title,
        body: body,
        userId: 1
    };
    xhr.onload = function () {
        if (xhr.status === 200) {
            const post = JSON.parse(xhr.responseText);
            console.log("Updated:", post);
            // Find the post in the DOM
            const postElement =
                document.getElementById(`post-${id}`);
            if (postElement) {
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <small>ID: ${post.id}</small>
                    <hr>
                `;
            } else {
                alert("Post updated successfully");
            }
        }
    };
    xhr.send(
        JSON.stringify(updatedPost)
    );
});
// ====================================================
// DELETE
// ====================================================
document.getElementById("deleteBtn").addEventListener("click", function () {
    const id = document.getElementById("deleteId").value;
    if (!id) {
        alert("Enter post ID");
        return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open(
        "DELETE",
        `${API}/${id}`
    );
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("Post deleted");
            // Find post in DOM
            const postElement =
                document.getElementById(`post-${id}`);
            if (postElement) {
                postElement.remove();
            }
            alert("Post deleted successfully");
        }
    };
    xhr.send();
});
// ====================================================
// DISPLAY POST USING DOM
// ====================================================
function displayPost(post) {
    const postDiv =
        document.createElement("div");
    postDiv.id = `post-${post.id}`;
    const title =
        document.createElement("h3");
    title.textContent = post.title;
    const body =
        document.createElement("p");
    body.textContent = post.body;
    const id =
        document.createElement("small");
    id.textContent = `ID: ${post.id}`;
    const line =
        document.createElement("hr");
    postDiv.appendChild(title);
    postDiv.appendChild(body);
    postDiv.appendChild(id);
    postDiv.appendChild(line);
    postsContainer.prepend(postDiv);
}