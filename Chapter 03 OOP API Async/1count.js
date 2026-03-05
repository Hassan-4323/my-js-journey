function countForMe(){
    let c = 0
    return function(){
        c++;
        console.log(c);
    }
}
let fnc = countForMe();
fnc();