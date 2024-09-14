function generador1(){
    //Generamos un numero al azar enter 0 y 500
    let is = Math.random(Math.random()*500);
    return `https://picsum.photos/id/${id}/200/300`;
}

function renderPic(data){
    let div = $("<div></div>");
    div.addClass("pic card");
    let img = $("<img></img>");
    img.attr("src", data.download_url);
    img.addClass("card-img");
    div.append(img);

    let autor = $("<h3></h3>");
    autor.addClass("card-title");
    autor.append(data.author);

    div.append(autor);

    $("#pictures-container").append(div);
}

function getPic(){
    //Consumir la API
    $.ajax({
        
    })
}