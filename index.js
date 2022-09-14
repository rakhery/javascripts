const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var a=true;
var b=1;
const c=a+b;
//out
console.log(c);

function validateForm() {
    let username = document.forms["myLogin"]["fusername"].value;
    let password= document.forms["myLogin"]["fpassword"].value;

    if (username != "username" && password !="password") {
      alert("Entrer username et password correct svp");
      return false;
    }
    //
    const x = function (a, b) {return a * b};
    let z = x(4, 3);
    console.log(z);

    //Constructor
    const myFunction = new Function("a", "b", "return a * b");
    let y = myFunction(4, 3);
    console.log(y);

  } 