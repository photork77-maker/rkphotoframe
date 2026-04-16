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

// Razorpay Payment + WhatsApp
function payNow() {
const price = document.getElementById("price").innerText;
const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const address = document.getElementById("address").value;

if (!name || !phone || !address) {
alert("Please fill all details");
return;
}

var options = {
key: "YOUR_RAZORPAY_KEY", // replace with your key
amount: price * 100,
currency: "INR",
name: "RK Photo Frame",
description: "Custom Frame Order",

```
handler: function (response) {
  alert("Payment Successful!");

  const message =
    `New Order\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Address: ${address}\n` +
    `Price: ₹${price}\n` +
    `Payment ID: ${response.razorpay_payment_id}`;

  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = "https://wa.me/919997228844?text=" + encodedMessage;

  window.open(whatsappURL, "_blank");
}
```

};

var rzp = new Razorpay(options);
rzp.open();
}
