// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();
 const sayhello = (name)=> console.log('Hi' + name);

 const hello = ()=> {
  let name = 'irida';
  let greed = 'hello';
  return alert(`${greed} ${name}`);

 }
 const greeting = (gr, nm)=>{
  return alert(`${gr} ${nm}`);
 }

 const sayhello2 = (greeting, name='Angelos')=> console.log(greeting , name);

 const checkInput = ( callback,...name)=> {
    for(const names of name ){
       let pw = names + " " + names
    }
    callback;
 };

const oups = (names)=>{
  if(names.length < 0 ){
    alert('ooups!');
  }
}
sayhello('irida');
hello();
greeting('irida', 'hello');
sayhello2('bye');
checkInput();