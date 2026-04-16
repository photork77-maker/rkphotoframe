function updatePrice() {
const frame = parseInt(document.getElementById("frame").value);
const mount = parseInt(document.getElementById("mount").value);
const paper = parseInt(document.getElementById("paper").value);

const total = frame + mount + paper;
document.getElementById("price").innerText = total;
}

document.getElementById("frame").onchange = updatePrice;
document.getElementById("mount").onchange = updatePrice;
document.getElementById("paper").onchange = updatePrice;

updatePrice();
