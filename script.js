"use strict";

const btn = document.getElementById('btn');
const input = document.getElementById('text');
const square = document.getElementById('square');
const innerBtn = document.getElementById('e_btn');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');
const circle = document.getElementById('circle');

innerBtn.style.display = "none";

btn.addEventListener('click', function () {
    square.style.backgroundColor = input.value;
});

range.addEventListener("input", function () {
    rangeSpan.textContent = this.value + "%";
    circle.style.width = this.value + "%";
    circle.style.height = this.value + "%";
});


