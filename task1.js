document.addEventListener("DOMContentLoaded", function() {
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var counter = 0;
  var newButton = '<button type="button" class="btn btn-success">Success</button>'
  var p1 = document.getElementById("p1");
  var p2 = document.getElementById("p2");

  function clicks(event){
    counter += 1;
    p1.innerHTML = "click " + counter;
    console.log(p1);
  }

  function add_buton(event){
    p2.innerHTML += newButton;
  }

  btn1.addEventListener("click" , clicks);
  btn2.addEventListener("click" , add_buton);
})
