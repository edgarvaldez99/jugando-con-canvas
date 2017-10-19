const inputs = [{value: "input1"}, {value: "input2"}, {value: "input3"}] // document.querySelectorAll('input')
const map = Array.prototype.map
const values = inputs::map(element => element.value)
console.log("values obtain with new sintax for binding", values)