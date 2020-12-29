
function play() {
  var nenuobjects=
    document.getElementsByClassName("nenu");
    console.log(nenuobjects.length);
    for(var obj=0;obj<nenuobjects.length;obj++){   
    nenuobjects[obj].style.visibility = "visible";
      console.log(obj);
  }
}