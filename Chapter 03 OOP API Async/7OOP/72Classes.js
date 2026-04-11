class CreatePencil {
    constructor(price, color, quality, company) {
        this.price = price;
        this.color = color;
        this.quality = quality;
        this.company = company;
    }

    erase() {
        document.body.querySelectorAll("h1").forEach((elem) => {
            if (elem.style.color === this.color) {
                elem.remove();
            }
        })
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}
let p1 = new CreatePencil(20, "red", "good", "Randy");
let p2 = new CreatePencil(30, "blue", "medium", "Randy ortan");

// ============== extends and super =================
class User {
    constructor(name, address, username, email) {
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }

    checkRole(){
        return `You are a ${this.role}`;
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User {
    constructor(name, address, username, email) {
        super(name, address, username, email);
        this.role = "Admin";
    }
    remove() {
        document.querySelectorAll("h1").forEach(function (elem) {
            elem.remove();
        });
    }
}


let u1 = new User("Hassan", "Nowshera", "Hassan4323", "hassanzahir2004@gmail.com");
let u2 = new User("Jan", "Abbottabad", "Hassan56", "hassanzahir1970@gmail.com");
let a1 = new Admin("Hassan Jan", "COMSATS", "hassan4323", "andaztrade2004@gmail.com");


// =========== prototypal inheritance ===========
// means object , object sa inherit karta ha
let coffee = {
    color : "dark",
    drink: function(){
        console.log("good good good");
    }
}
let greenTea = Object.create(coffee);
greenTea.taste = "Bitter";
greenTea.drink();

console.log(greenTea);
