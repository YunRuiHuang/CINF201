let change = ()=>{
    let color = document.getElementById("color").value;
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
    $fun();
}

// $(()=>{
//     $("#btn").click(()=>{
//         $("#color").hide(1000);
//         $("#btn").hide(1000);
//         $("#color").show(1000);
//         $("#btn").show(1000);
//     })
// })

$fun = ()=>{
    $("#color").hide(1000);
    $("#btn").hide(1000);
    $("#color").show(1000);
    $("#btn").show(1000);
}