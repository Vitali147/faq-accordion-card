let acc = document.getElementsByClassName("question");

for (let i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {


    for (let j = 0; j < acc.length; j++) {
    acc[j].classList.remove("active");

      if(j!=i){
        acc[j].nextElementSibling.style.display = null;
      }
    }


    this.classList.add("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block"){
      panel.style.display = null;
      this.classList.remove("active");
    } else {
      panel.style.display = "block";
    }


  });

}
