new Promise((resolve, rejeita) => {
    let a = 10;
    let b = 20;

    resolve(a+b)
}).then(
    function(res){
        console.log(res)
}).then(
    function(){
        console.log("O primeiro then funcionou")
}).then(
    function(){
        console.log("O segundo then funcionou")
}).catch((reject)=>{
    console.log(reject)
})