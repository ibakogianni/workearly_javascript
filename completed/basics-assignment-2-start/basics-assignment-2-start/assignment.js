const task3Element = document.getElementById('task-3');
let name = "irida";
let str1 = "str1";
let str2 = 'str2';
let str3 = 'str3';
function stepOne() {
    alert('hey i am the function stepOne');
}
stepOne();
function stepOneOne(name){
    alert(name);
}
stepOneOne(name);
function concat(str1, str2, str3){
    return str1 +' '+ str2 +' '+ str3;
}

task3Element.addEventListener('click', stepOne);
alert(concat(str1, str2, str3));