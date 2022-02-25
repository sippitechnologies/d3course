function add(a)
{
    return a;
}

let value = add(10);
console.log(value);


let parameterfunction = function(d){
    console.log("Shady  "+d);
};
let value1 = add(parameterfunction);
value1("Abdalla");