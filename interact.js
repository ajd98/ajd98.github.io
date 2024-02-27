document.getElementById("emailLogo").onclick = function () {
  p1 = "degr";
  p2 = "ave";
  p3 = "@";
  p4 = "uw.e";
  p5 = "du";
  window.location = "mailto:"+p1+p2+p3+p4+p5;
}

let mail = document.getElementById("mail");
if (mail) {
  mail.innerHTML = "degrave" + "@" + "uw.edu";
}
