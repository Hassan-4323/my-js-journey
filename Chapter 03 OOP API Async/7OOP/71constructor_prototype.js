// ========== CONSTRUCTOR ============

// function CreateBuiscuits(name, price, quantity, company, category, color){
//     this.name = name;
//     this.price = price;
//     this.quantity = quantity;
//     this.company = company;
//     this.category = category;
//     this.color = color;

//     this.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = color;
//         document.body.appendChild(h1);
//     }
// }

// let buiscuit1 = new CreateBuiscuits("Super", 20, 2, "Super Company", "Regular", "Black");
// let buiscuit2 = new CreateBuiscuits("Oreo", 30, 5, "Oreo Company", "Non Regular","yellow");

// ========== PROTOTYPE =============
function CreateBuiscuits(name, price, quantity, company, category, color){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.company = company;
    this.category = category;
    this.color = color;
}

CreateBuiscuits.prototype.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }

let buiscuit1 = new CreateBuiscuits("Super", 20, 2, "Super Company", "Regular", "Black");
let buiscuit2 = new CreateBuiscuits("Oreo", 30, 5, "Oreo Company", "Non Regular","blue");




