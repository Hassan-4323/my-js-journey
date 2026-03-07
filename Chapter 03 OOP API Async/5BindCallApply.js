let obj = {
    name: "Hassan Jan"
}

function abcd(a,b,c){
    console.log(this,a,b,c);
}

// abcd() --> this gives me window
// now abcd.call(obj) will give me the object
abcd.call(obj,1,2,3); 

// only one difference is that , it send only two parameters, so to avoid that we make it an array
abcd.apply(obj, [1,2,3]);

// this will gives copy of abcd funtion
let func = abcd.bind(obj,1,2,3);
func();