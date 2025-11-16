// Toggle Side Panel
const hamburgerBtn = document.getElementById("hamburgerBtn");
const sidePanel = document.getElementById("sidePanel");

hamburgerBtn.addEventListener("click", () => {
  if (sidePanel.style.right === "0px") {
    sidePanel.style.right = "-250px";
  } else {
    sidePanel.style.right = "0px";
  }
});
