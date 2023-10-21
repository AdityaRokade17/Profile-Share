function openModal() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";

    setTimeout(function () {
        modal.style.opacity = 1;
        overlay.style.opacity = 1;
    }, 100);
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";

}

document.getElementById("overlay").addEventListener("click", closeModal);
document.getElementById("shareProfileButton").addEventListener("click", openModal);
