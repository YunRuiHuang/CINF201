
let submit=()=>{
    let rate = document.getElementById("rate").value;
    let hours = document.getElementById("hours").value;
    let parseRate = parseInt(rate);
    let parseHours = parseInt(hours);
    let selary = parseRate * parseHours * 52;
    document.getElementById("salary").innerHTML=selary;
}