function clickedArrow() {
  const emailInput = document.getElementById("input");
  const errorImg = document.getElementById("icon-error");
  const unvalidTxt = document.getElementById("why");
  const btn = document.getElementById("btn")
  const tnx = document.getElementById("submitted")
  if (!emailInput.checkValidity() || emailInput.value==""){
    unvalidTxt.hidden = false;
    errorImg.hidden = false;
  }
  else {
    errorImg.hidden = true;
    unvalidTxt.hidden = true;
    emailInput.hidden = true;
    btn.hidden = true;
    tnx.hidden = false;
    
    
  }

}