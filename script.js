const shareButton = document.getElementById("share-button");
let popup = document.getElementById("popup");

const openPopup = () => {
  popup.classList.toggle("show");
};

shareButton.addEventListener("click", openPopup);
