let { time, timeEnd, log } = console;
let html = `<h1> Hello {{x}} {{ name }} </h1>`.trim();

time("template interpolation");

Object.entries({name: "Joe", x: 22}).forEach(([k,v]) => {
 let reg = new RegExp(`\{\{+.?${k}+.?\}\}`, "g");
 html = html.replaceAll(reg, v)
})

timeEnd("template interpolation");
log(html)