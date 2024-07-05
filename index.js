let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
  };


  let imaeContainerEl = document.getElementById("imaeContainer");
  let imageEl = document.getElementById("image");
  let listContainerEl = document.getElementById("listContainer");
  let titleEl = document.getElementById("title");

  imageEl.setAttribute("src", recipeObj.imgSrc);
  imageEl.classList.add("w-80");
  imaeContainerEl.appendChild(imageEl);

  titleEl.textContent = recipeObj.title;

  for(let ingredient of recipeObj.ingredients){
    let createLIEl = document.createElement("li");
    createLIEl.textContent = ingredient;
    listContainerEl.appendChild(createLIEl);
  }

