function checkout() {
alert("Proceeding...");
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

// WhatsApp Order Function
function sendOrder() {
const price = document.getElementById("price").innerText;
const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const address = document.getElementById("address").value;

const frame = document.getElementById("frame").selectedOptions[0].text;
const mount = document.getElementById("mount").selectedOptions[0].text;
const paper = document.getElementById("paper").selectedOptions[0].text;

if (!name || !phone || !address) {
alert("Please fill all details");
return;
}

const message =
"New Order\n\n" +
"Name: " + name + "\n" +
"Phone: " + phone + "\n" +
"Address: " + address + "\n\n" +
"Frame: " + frame + "\n" +
"Mount: " + mount + "\n" +
"Paper: " + paper + "\n\n" +
"Total: ₹" + price;

const url =
"https://wa.me/919997228844?text=" +
encodeURIComponent(message);

window.open(url, "_blank");
}
