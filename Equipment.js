let equipmentElements = [];
const equipmentImage = document.querySelector(".leatherman")

document.querySelectorAll("#equipment").forEach((element) => {
    element.childNodes.forEach((node) => {
        if(node.localName != "li") return;

        let object = {
            element: node,
            backgroundImage: node.childNodes[0].id
        };
    
        equipmentElements.push(object);
    
        node.childNodes[0].addEventListener("mouseover", (element) => {
            equipmentImage.style.backgroundImage = `url("source/img/Equipment/${element.target.id}.png")`
        })
    
        node.childNodes[0].addEventListener("mouseout", () => {
            equipmentImage.style.backgroundImage = `url("source/img/Equipment/mannequin.png")`
        })
    })
})
