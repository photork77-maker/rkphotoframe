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
function function payNow() {
const price = document.getElementById("price").innerText;
const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const address = document.getElementById("address").value;

if (!name || !phone || !address) {
alert("Please fill all details");
return;
}

var options = {
key: "YOUR_RAZORPAY_KEY",
amount: price * 100,
currency: "INR",
name: "RK Photo Frame",
description: "Custom Frame Order",
handler: function (response) {
alert("Payment Successful!");

```
  console.log({
    name,
    phone,
    address,
    price,
    paymentId: response.razorpay_payment_id
  });
}
```

};

var rzp = new Razorpay(options);
rzp.open();
}

const price = document.getElementById("price").innerText;

var options = {
key: "YOUR_RAZORPAY_KEY",
amount: price * 100, // in paise
currency: "INR",
name: "RK Photo Frame",
description: "Custom Frame Order",
handler: function (response) {
alert("Payment Successful!");
}
};

var rzp = new Razorpay(options);
rzp.open();
}
