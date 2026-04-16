let selectedFramePrice = 0;
let selectedFrameName = "";

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

// Frame selection
function selectFrame(price, name, element) {
selectedFramePrice = price;
selectedFrameName = name;

document.getElementById("frameName").innerText = name;

document.querySelectorAll(".frame-gallery img").forEach(img => {
img.classList.remove("selected");
});

element.classList.add("selected");

const frameBox = document.getElementById("framePreview");

if (name === "Classic Black") {
frameBox.style.border = "12px solid black";
} else if (name === "Wood Brown") {
frameBox.style.border = "12px solid brown";
} else if (name === "Golden Frame") {
frameBox.style.border = "12px solid gold";
}

updatePrice();
}

// Price calculation
function updatePrice() {
const mount = parseInt(document.getElementById("mount").value);
const paper = parseInt(document.getElementById("paper").value);

const total = selectedFramePrice + mount + paper;
document.getElementById("price").innerText = total;
}

document.getElementById("mount").onchange = updatePrice;
document.getElementById("paper").onchange = updatePrice;

updatePrice();

// WhatsApp order
function sendOrder() {
const price = document.getElementById("price").innerText;
const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const address = document.getElementById("address").value;

if (!name || !phone || !address) {
alert("Please fill all details");
return;
}

const message =
"New Order\n\n" +
"Name: " + name + "\n" +
"Phone: " + phone + "\n" +
"Address: " + address + "\n\n" +
"Frame: " + selectedFrameName + "\n" +
"Total: ₹" + price;

const url =
"https://wa.me/919997228844?text=" +
encodeURIComponent(message);

window.open(url, "_blank");
}
