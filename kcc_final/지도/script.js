function togglePanel() {
  var panel = document.getElementById("infoPanel");
  if (panel.classList.contains("hide")) {
    panel.classList.remove("hide");
  } else {
    panel.classList.add("hide");
  }
}
