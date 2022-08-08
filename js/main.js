"use strict";

import { BookData } from "../data/book.data.js";

const containerDOM = document.querySelector(".container");
let str = `<ul>`;

BookData.forEach((item) => {
  str += `<li><a href="${item.url}">${item.name}</a></li>`;
});

str += `</ul>`;

containerDOM.innerHTML = str;
