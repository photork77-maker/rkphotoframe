function checkout() {
alert("Proceeding to payment...");
}

// Image preview
document.getElementById('upload').onchange = function (e) {
const file = e.target.files[0];
const reader = new FileReader();
reader.onload = function () {
const img = document.getElementById('preview');
img.src = reader.result;
img.style.display = 'block';
};
reader.readAsDataURL(file);
};

// Price calculation
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
