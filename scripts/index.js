// import nav var
import {sidebar} from "../components/sidebar.js"
import { apiCall, appendArticles } from "../scripts/main.js"
var navbar = document.querySelector("#sidebar");
navbar.innerHTML = sidebar();

let news_data = await apiCall("https://shrouded-earth-23381.herokuapp.com/api/headlines/india");
let parent = document.querySelector("#main");
appendArticles(news_data,parent);

let inputbar = document.querySelector('#searchbar');
inputbar.addEventListener("keypress",(ele)=>{
    if(ele.key == "Enter")
    {
        let input_value = document.querySelector("#searchbar").value;
        console.log(input_value)
        localStorage.setItem("search_term",input_value);
        window.location.href = "search.html";
    }
})