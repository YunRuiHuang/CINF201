let fun = ()=>{
    document.getElementById("image").src = "https://www.albany.edu/~yh668336/04062023/flower1.jpg";
};
let fun2 = (element)=>{
    document.getElementById("image").src = "https://www.albany.edu/~yh668336/04062023/flower2.jpg";
};
let submit = ()=>{
    let input = document.getElementById("input").value;
    console.log(input);
    document.getElementById("user").innerHTML = input;
}