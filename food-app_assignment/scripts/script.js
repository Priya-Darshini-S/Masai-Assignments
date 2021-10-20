//to get data from api
//to append to main pages

async function getData(url){
    let res = await fetch(url);
    let data = await res.json();
 //   console.log('data:', data)

    return data;
}

function append(data, container){
   // data.forEach(({strMeal, strMealThumb, strInstructions}) => {
        let div = document.createElement("div");
        let title = document.createElement("h2");
        title.innerText = data.strMeal;
        title.setAttribute("style", "text-align: center")
        
        let image = document.createElement("div");
        image.setAttribute("class", "image");
        let img = document.createElement("img")
        img.src = data.strMealThumb;
        image.append(img)
           
        let ins_head = document.createElement("div")
        ins_head.innerText = "INSTRUCTION :";
        ins_head.setAttribute("class", "headings");
        let instruction = document.createElement("div")
         instruction.innerText = data.strInstructions;

             
        let area_head = document.createElement("div")
        area_head.innerText = "AREA/COUNTRY :";
        area_head.setAttribute("class", "headings");
        let area = document.createElement("div")
         area.innerText = data.strArea;

         let cate_head = document.createElement("div")
         cate_head.innerText = "CATEGORY :";
         cate_head.setAttribute("class", "headings");
         let cate = document.createElement("div")
          cate.innerText = data.strCategory;


        div.append(image,title,area_head, area,cate_head,cate,ins_head,instruction);
        container.append(div);

  //  })
}

export {getData, append};