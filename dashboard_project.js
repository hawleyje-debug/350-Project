// Grab the elements from our HTML document
const loadPostsBtn = document.getElementById("load-posts-btn");
const clearPostsBtn = document.getElementById("clear-posts-btn");
const postsContainer = document.getElementById("posts-container");
const feedbackMsg = document.getElementById("feedback-msg");

// Main async function to fetch external post data from JSONPlaceholder
async function fetchPosts() {
    // Step 1: Display a loading message while waiting for the network response
    feedbackMsg.textContent = "Loading data from server...";
    feedbackMsg.style.color = "#6B7280";
    postsContainer.innerHTML = "";

    try {
        // Step 2: Request data using fetch() and await the response
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        // Check if the server returned a successful status code (e.g., 200)
        if (!response.ok) {
            throw new Error(`Server returned status code ${response.status}`);
        }

        // Parse the raw response into a workable JavaScript array of objects
        const posts = await response.json();

        // Step 3: Handle edge cases where the array might be empty
        if (!posts || posts.length === 0) {
            feedbackMsg.textContent = "No results found.";
            return;
        }

        // Clear the loading message once data is successfully loaded
        feedbackMsg.textContent = `Successfully loaded ${posts.length} posts!`;
        feedbackMsg.style.color = "#10B981";

        // Render the posts onto the dashboard (limiting to first 5 posts for clean layout)
        renderPosts(posts.slice(0, 5));

    } catch (error) {
        // Step 4: Gracefully catch network or code errors and notify the user
        console.error("Fetch error encountered:", error);
        feedbackMsg.textContent = "Unable to load data. Please check your network connection and try again.";
        feedbackMsg.style.color = "#EF4444";
    }
}

/**
 * Helper function to dynamically map and display posts on the page
 */
function renderPosts(postsArray) {
    postsContainer.innerHTML = "";

    postsArray.forEach(post => {
        // Create a wrapper card for each individual post
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");

        postCard.innerHTML = `
            <div class="post-header">
                <span class="post-title">${post.title}</span>
                <span class="fav-container"></span>
            </div>
            <div class="post-body" id="body-${post.id}">${post.body}</div>
            <div class="post-actions">
                <button class="btn-sm toggle-btn" data-id="${post.id}">See Details</button>
                <button class="btn-sm btn-secondary fav-btn">Favorite</button>
            </div>
        `;

        // Add event listener for the expand/collapse "See Details" button
        const toggleBtn = postCard.querySelector(".toggle-btn");
        const postBody = postCard.querySelector(`#body-${post.id}`);
        
        toggleBtn.addEventListener("click", () => {
            postBody.classList.toggle("expanded");
            if (postBody.classList.contains("expanded")) {
                toggleBtn.textContent = "Hide Details";
            } else {
                toggleBtn.textContent = "See Details";
            }
        });

        // Add event listener for our creative "Favorite" feature
        const favBtn = postCard.querySelector(".fav-btn");
        const favContainer = postCard.querySelector(".fav-container");
        
        favBtn.addEventListener("click", () => {
            if (!postCard.classList.contains("favorited")) {
                postCard.classList.add("favorited");
                favBtn.textContent = "Unfavorite";
                favBtn.style.backgroundColor = "#D97706";
                
                const badge = document.createElement("span");
                badge.classList.add("favorite-badge");
                badge.textContent = "★ Saved";
                favContainer.appendChild(badge);
            } else {
                postCard.classList.remove("favorited");
                favBtn.textContent = "Favorite";
                favBtn.style.backgroundColor = "";
                
                const badge = favContainer.querySelector(".favorite-badge");
                if (badge) badge.remove();
            }
        });

        postsContainer.appendChild(postCard);
    });
}

/**
 * Clear data function to satisfy UI interactive reset requirements
 */
function clearPosts() {
    postsContainer.innerHTML = "";
    feedbackMsg.textContent = "Data cleared. Click 'Load Posts' to fetch again.";
    feedbackMsg.style.color = "#6B7280";
}

// Attach event listeners to our main control buttons
loadPostsBtn.addEventListener("click", fetchPosts);
clearPostsBtn.addEventListener("click", clearPosts);