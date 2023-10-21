
//Dropdown
function dropDown(){
    //Parent
    const productContainer = document.querySelector("#ProductInfo-template--21366690742560__main")

    //Dropdown Container
    const dropDownContainer = document.createElement("div");
    dropDownContainer.classList.add("dropDown-container")
    dropDownContainer.style.display = "flex";
    dropDownContainer.style.flexDirection = "column";

    //Dropdown Label
    const dropDownLabel = document.createElement("label");
    dropDownLabel.setAttribute("for","size");
    dropDownLabel.textContent = "Size";

    //Dropdown 
    const dropDown = document.createElement("select");
    dropDown.classList.add("dropdown");
    dropDown.setAttribute("id","size");
    dropDown.setAttribute("name","size");
    dropDown.style.fontSize = "20px";

    //Options
    const optionUnselected = document.createElement("option");
    optionUnselected.setAttribute("value","unselected");
    optionUnselected.textContent = "Unselected"

    const optionSmall = document.createElement("option");
    optionSmall.setAttribute("value","small");
    optionSmall.textContent = "Small";

    const optionMedium = document.createElement("option");
    optionMedium.setAttribute("value","Medium");
    optionMedium.textContent = "Medium"

    const optionLarge = document.createElement("option");
    optionLarge.setAttribute("value","large");
    optionLarge.textContent = "Large"

    //Append
    dropDownContainer.appendChild(dropDownLabel);
    dropDownContainer.appendChild(dropDown);
    productContainer.insertBefore(dropDownContainer, productContainer.children[6]);

    //Append Options
    dropDown.appendChild(optionUnselected);
    dropDown.appendChild(optionSmall);
    dropDown.appendChild(optionMedium);
    dropDown.appendChild(optionLarge);
}
dropDown();

