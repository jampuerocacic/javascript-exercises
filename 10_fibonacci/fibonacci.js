const fibonacci = function(position) {
if (position <=0) return "oops";
if (position===1) || (position===2) return 1; 

let a = 1; b = 1;
for (let i = 3; i <= position; i++) {
    let temp = a + b;
    a = b;
    b = temp;
}
return b;
};

// Do not edit below this line
module.exports = fibonacci;
