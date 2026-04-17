let currentFrame = "black";

/* IMAGE UPLOAD */
document.getElementById("upload").onchange = function(e) {
const file = e.target.files[0];
const reader = new FileReader();

reader.onload = function() {
document.getElementById("userImage").src = reader.result;
};

reader.readAsDataURL(file);
};

/* FRAME SELECT */
function selectFrame(frame) {

const frameImg = document.getElementById("frameImage");

if (frame === "gold") frameImg.src = "images/gold.jpg";
if (frame === "black") frameImg.src = "images/black.jpg";
if (frame === "wood") frameImg.src = "images/wood.jpg";
if (frame === "brown") frameImg.src = "images/brown.jpg";
if (frame === "temple") frameImg.src = "images/goldcarving.jpg";
if (frame === "mini") frameImg.src = "images/browngold.jpg";

currentFrame = frame;
}
/* PRICE */
function updatePrice() {
let size = parseInt(document.getElementById("size").value);
let mount = parseInt(document.getElementById("mount").value);
let delivery = document.getElementById("delivery").checked ? 100 : 0;

let total = size + mount + delivery;
document.getElementById("price").innerText = total;

/* MOUNT PREVIEW */
if (mount > 0) {
document.getElementById("mountLayer").style.display = "block";
} else {
document.getElementById("mountLayer").style.display = "none";
}
}

document.getElementById("size").onchange = updatePrice;
document.getElementById("mount").onchange = updatePrice;
document.getElementById("delivery").onchange = updatePrice;

updatePrice();

/* WHATSAPP ORDER */
function orderNow() {

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let address = document.getElementById("address").value;
let price = document.getElementById("price").innerText;

let size = document.getElementById("size").value;
let mount = document.getElementById("mount").value;
let delivery = document.getElementById("delivery").checked ? "Yes" : "No";

let frameNames = {
goldpremium: "Gold Premium Frame",
black: "Black Frame",
wood: "Wooden Frame",
brown: "Brown Frame",
browngold: "Brown Gold Frame",
goldcarving: "Gold Carving Frame",
goldvintage: "Vintage Gold Frame"
};

if (!name || !phone || !address) {
alert("Please fill all details");
return;
}

let message =
`New Order
Name: ${name}
Phone: ${phone}
Address: ${address}
Frame: ${frameNames[currentFrame]}
Size: ${size}
Mount: ${mount == 0 ? "No" : "Yes"}
Delivery: ${delivery}
Total: ₹${price}`;

let url = "https://wa.me/919997228844?text=" + encodeURIComponent(message);

window.open(url, "_blank");
}
