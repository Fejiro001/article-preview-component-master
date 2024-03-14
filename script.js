const shareButton = document.getElementById("share-button");
let tooltip = document.getElementById("tooltip");

const openToolTip = () => {
  tooltip.classList.toggle("show");
};

shareButton.addEventListener("click", openToolTip);
