const div = document.createElement("div");
div.style.setProperty("visibility", "hidden");
div.style.setProperty("width", "1cm");
document.body.appendChild(div);

const centimeter = Number(getComputedStyle(div).width.replace(/px$/, ""));
document.body.removeChild(div);

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
export const meter = centimeter * 10;
