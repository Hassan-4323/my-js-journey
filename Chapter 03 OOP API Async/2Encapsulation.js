function limitCounter(){
    let click =0
    return function(){
        click++;
        if(click<5){
            console.log(`Clicked ${click} times`);
        }
        else{
            console.error("LIMIT EXCEEDED TRY AFTER SOME TIME");
        }
    }
}
let fnc = limitCounter();
fnc();
fnc();
fnc();
fnc();
fnc();