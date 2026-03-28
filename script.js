function checkSkin(){

let skin=document.getElementById("skin").value;
let result=document.getElementById("result");

if(skin=="oily"){
result.innerHTML="Oily Skin: Bright face, large pores, acne prone, oily skin every day.";
}
else if(skin=="dry"){
result.innerHTML="Dry Skin: Dry, rough skin that feels tight, easily irritated, and looks dull.";
}
else if(skin=="sensitive"){
result.innerHTML="Sensitive Skin: Redness, irritation, reaction to products, heat or itching, redness after using products, cannot use strong chemicals.";
}
else if(skin=="combination"){
result.innerHTML="Combination Skin:There is both oily and dry T-zone, oily (forehead, nose), dry cheeks, uneven face, acne, oily area.";
}
else{
result.innerHTML="Normal Skin:Not too oily, not too dry, smooth and even skin, normal pores, soft and healthy skin, no major problems.";
}

}