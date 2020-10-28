const text = "Hello there, my name is James. "

console.log(getIndexOfComma(text));

function getIndexOfComma(str) {
    let index = str.indexOf(",");
    let name = str.slice(index + 2);
    return name;
} 