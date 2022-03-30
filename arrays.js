// var data = Date.now();

// console.log(data);

function makeAdder(a) {
    return function(b) {
        return a + b;
    };
}

var x = makeAdder(5);
var y = makeAdder(20);

x(6);
y(7);

console.log(x)
console.log(y)
