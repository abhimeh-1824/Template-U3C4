import { apiCall, appendArticles } from "../scripts/main.js"
async function storeSearchterm(term) {

    if(term == "cricket")
 {
    var url = `https://shrouded-earth-23381.herokuapp.com/api/search/?q=${inputvalue}`
    var serch = await apiCall(url)
    var perent  = document.querySelector("#main")
    appendArticles(serch,perent);
 }



}

export default storeSearchterm