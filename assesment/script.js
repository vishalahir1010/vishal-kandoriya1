const form = document.getElementById("linkForm");
const title = document.getElementById("title");
const url = document.getElementById("url");
const preview = document.getElementById("preview");
const error = document.getElementById("error");
const themeBtn = document.getElementById("themeBtn");

form.addEventListener("submit", function(e){

    e.preventDefault();

    if(!url.value.startsWith("http")){
        error.innerText = "Please enter a valid URL";
        return;
    }

    error.innerText = "";

    const card = document.createElement("div");
    card.classList.add("link-card");

    card.innerHTML = `
        <a href="${url.value}" target="_blank">
            🔗 ${title.value}
        </a>
    `;

    preview.appendChild(card);

    title.value = "";
    url.value = "";
});

themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});