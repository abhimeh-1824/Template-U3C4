async function apiCall(url) {
    //add api call logic here
    let req = await fetch(url)
    let colect = await req.json()
    return colect

}

function appendArticles(articles, main) {
    //add append logic here
    articles.forEach(element => {
        let box = document.createElement("div");
        box.setAttribute("class","box")
        let image = document.createElement("img");
        image.src = element.urlToImage;
        let heading = document.createElement("h4");
        heading.innerText = element.title;
        let time = document.createElement("p");
        time.innerHTML = element.publishedAt;
        let discrip = document.createElement("h4");
        discrip.innerText = element.description;
        let contant = document.createElement("p");
        contant.innerText = element.content;
        box.addEventListener("click",()=>{
            localStorage.setItem("fulldetails",JSON.stringify(element));
            window.location.href = "news.html";
        })
        box.append(image,heading,discrip,contant,time);;
        main.append(box)
    });

}

export { apiCall, appendArticles }