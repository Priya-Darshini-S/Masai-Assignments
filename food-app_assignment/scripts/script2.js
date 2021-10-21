//to get data from api
//to append to main pages

async function getData(url){
    let res = await fetch(url);
    let data = await res.json();
 //   console.log('data:', data)

    return data;
}

function append(data, container){
    data.forEach(({strCategory, strCategoryThumb, strCategoryDescription}) => {
        let div = document.createElement("div");
        let name = document.createElement("h2");
        name.innerText = strCategory;
        
        let lat_image = document.createElement("div");
        lat_image.setAttribute("class", "lat_image");
        let lat_img = document.createElement("img")
         lat_img.src = strCategoryThumb;
        lat_img.setAttribute("class", "lat_img")
        lat_image.append(lat_img);
             
        let description = document.createElement("p");
        description.innerText = strCategoryDescription;
        description.setAttribute("style", "padding: 0px 5px; text-align: justify;")
        


        div.append(lat_image,name, description);
        container.append(div);

   })
}

export {getData, append};