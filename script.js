const searchForm = document.querySelector(".search-form");
const inputField = document.querySelector("#input-field");
const searchResult = document.querySelector(".search-result");
const showMoreBtn = document.querySelector(".show-more-btn");

const accessKey = 'QRKmzq427HdtADsskiFv9_-yDt3FZoxxrSDDUS7YnQ4';

let keyword = "";
let page = 1;

const getData = async () => {
    keyword=inputField.value;
    const url  = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&per_page=12&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img")
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display="block";
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    getData();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    getData();
})