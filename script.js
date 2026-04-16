let framePrice = 300;

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
function selectFrame(el, price) {
document.querySelectorAll('.frame-gallery img')
.forEach(img => img.classList.remove('selected'));

el.classList.add('selected');

framePrice = price;

updatePrice();
}

// Price calculation
function updatePrice() {
const mount = parseInt(document.getElementById("mount").value);
const paper = parseInt(document.getElementById("paper").value);

const total = framePrice + mount + paper;

document.getElementById("price").innerText = total;
}

document.getElementById("mount").onchange = updatePrice;
document.getElementById("paper").onchange = updatePrice;

updatePrice();

// WhatsApp Order
function placeOrder() {
const price = document.getElementById("price").innerText;
const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const address = document.getElementById("address").value;

if (!name || !phone || !address) {
alert("Please fill all details");
return;
}

const message =
`New Order:
Name: ${name}
Phone: ${phone}
Address: ${address}
Total Price: ₹${price}`;

const url = "https://wa.me/91YOURNUMBER?text=" + encodeURIComponent(message);

window.open(url, "_blank");
}
