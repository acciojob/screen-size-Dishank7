//your JS code here. If required.
let h1 = document.createElement("h1");
let div = document.createElement("div");
div.id = "sizeInfo";
div.append(h1);
let body = document.getElementsByTagName("body")[0];
body.append(div);

window.onresize = function(){
    let x = innerWidth;
    let y = innerHeight;
    h1.innerText = `Width ${x} Height ${y}`;
};