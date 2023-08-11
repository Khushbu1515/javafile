let uppercase=function(str){
    return str.toUpperase();
}

let lowercase=function(str){
    return str.toLowerCase();
}
let transformer = function(str,fun)
{
    return fun(str)
}
console.log(transformer ("HELLO PRogrammers",lowercase))
