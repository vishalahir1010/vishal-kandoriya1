const form = document.getElementById("linkForm");
const titleInput = document.getElementById("title");
const urlInput = document.getElementById("url");
const preview = document.getElementById("preview");
const error = document.getElementById("error");
const badge = document.getElementById("badge");
const themeBtn = document.getElementById("themeBtn");

let links = JSON.parse(localStorage.getItem("links")) || [];

// Verified Badge
const followers = 1500;

if (followers >= 1000) {
    badge.textContent = "✔ Verified";
}

// Render Links
function renderLinks() {

    preview.innerHTML = "";

    links.forEach((link, index) => {

        preview.innerHTML += `
            <div class="link-card">
                <a href="${link.url}" target="_blank">
                    ${link.title}
                </a>

                <button onclick="deleteLink(${index})">
                    Remove
                </button>
            </div>
        `;
    });
}

// Save Data
function saveLinks() {
    localStorage.setItem("links", JSON.stringify(links));
}

// Add Link
form.addEventListener("submit", (e) => {

    e.preventDefault();

    const title = titleInput.value.trim();
    const url = urlInput.value.trim();

    const regex = /^https:\/\/.+/;

    if (!regex.test(url)) {
        error.textContent =
        "URL must start with https://";
        return;
    }

    error.textContent = "";

    links.push({
        title,
        url
    });

    saveLinks();
    renderLinks();

    form.reset();
});

// Delete Link
function deleteLink(index) {

    links.splice(index, 1);

    saveLinks();
    renderLinks();
}

// Theme Toggle
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    let mode =
    document.body.classList.contains("dark")
    ? "dark"
    : "light";

    localStorage.setItem("theme", mode);
});

// Load Theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

renderLinks();