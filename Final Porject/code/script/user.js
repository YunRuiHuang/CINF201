let submitName = ()=>{
    let userName = document.getElementById("name").value;
    let box = document.getElementById("userbox");
    box.innerHTML = "<p>Hello! " + userName + " </p>" + box.innerHTML;
    $hiden();
}

$hiden = ()=>{
    $("#userInputBox").hide(1000);
    $("#userInputBox").hide(1000);
}

$show = ()=>{
   
    $("#userInputBox").show(1000);
    $("#userInputBox").show(1000);
}

let darkMode = ()=>{
    $dark();
}

$dark = ()=>{
    $("#background").attr("href","CSS/darkbackground.css")
}

let lightMode = ()=>{
    $light();
}

$light = ()=>{
    $("#background").attr("href","CSS/background.css")
}