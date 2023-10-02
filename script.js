let btn = document.getElementById("btn");
let w = document.getElementById("width");
let h = document.getElementById("height");
let ans = document.getElementById("calculation");
let output = "";

if (localStorage.getItem("inputWidth")) {
  w.value = localStorage.getItem("inputWidth");
}

if (localStorage.getItem("inputHeight")) {
  h.value = localStorage.getItem("inputHeight");
}

w.addEventListener("input", saveInputValues);
h.addEventListener("input", saveInputValues);

function saveInputValues() {
  localStorage.setItem("inputWidth", w.value);
  localStorage.setItem("inputHeight", h.value);
}

btn.addEventListener("click", function(e) {
  e.preventDefault();
  output = ((Math.round(h.value) / Math.round(w.value)) * 100).toFixed(2);
  if (output > 0) {
    ans.innerHTML = "padding-top: " + output.replace(".00", "") + "%;";
  } else {
    ans.innerHTML = "Invalid dimensions";
  }
});

let copyResultBtn = document.getElementById("copyResult");
copyResultBtn.addEventListener("click", function(e) {
  e.preventDefault();
  let resultText = ans.textContent;
  copyToClipboard(resultText);
});

function copyToClipboard(text) {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}
