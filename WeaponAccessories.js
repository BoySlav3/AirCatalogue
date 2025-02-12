let accessoriesElements = [];
const rifleImage = document.querySelector(".rifle");

document.querySelector("#accessories").childNodes.forEach((node) => {
    if(node.localName != "li") return;

    let object = {
        element: node,
        backgroundImage: node.childNodes[0].id
    };

    accessoriesElements.push(object);

    node.childNodes[0].addEventListener("mouseover", (element) => {
        rifleImage.style.backgroundImage = `url("source/img/rifleExtra/${element.target.id}.png")`;
    })

    node.childNodes[0].addEventListener("mouseout", () => {
        rifleImage.style.backgroundImage = `url("source/img/rifleExtra/rifle.png")`;
    })
})