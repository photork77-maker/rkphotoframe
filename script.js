/* UPLOAD */
document.getElementById("upload").onchange = function(e) {
const file = e.target.files[0];
const reader = new FileReader();

reader.onload = function() {
document.getElementById("userImage").src = reader.result;
};

reader.readAsDataURL(file);
};

/* FRAME CHANGE */
document.getElementById("frame").onchange = function() {
const frameBox = document.getElementById("frameBox");
frameBox.className = "frame-box " + "frame-" + this.value;
};

/* PRICE */
function updatePrice() {
let size = parseInt(document.getElementById("size").value);
let mount = parseInt(document.getElementById("mount").value);
let delivery = document.getElementById("delivery").checked ? 100 : 0;

document.getElementById("price").innerText = size + mount + delivery;

/* MOUNT SHOW/HIDE */
if (mount > 0) {
document.getElementById("mountBox").style.display = "block";
} else {
document.getElementById("mountBox").style.display = "none";
}
}

document.getElementById("size").onchange = updatePrice;
document.getElementById("mount").onchange = updatePrice;
document.getElementById("delivery").onchange = updatePrice;

updatePrice();

/* WHATSAPP */
function orderNow() {
function order(name, price) {

let message =
`New Order
Product: ${name}
Price: ₹${price}`;

let url = "https://wa.me/919997228844?text=" + encodeURIComponent(message);

window.open(url, "_blank");
}
let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let address = document.getElementById("address").value;
let price = document.getElementById("price").innerText;

if (!name || !phone || !address) {
alert("Fill all details");
return;
}

let msg =
`New Order
Name: ${name}
Phone: ${phone}
Address: ${address}
Price: ₹${price}`;

window.open("https://wa.me/919997228844?text=" + encodeURIComponent(msg));
}
