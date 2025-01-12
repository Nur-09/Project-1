const modal = document.querySelector(".modal");
const openModalClick = document.querySelector("#btn-get");
const closeModalClick = document.querySelector(".modal_close");

const openModal = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
};

openModalClick.onclick = openModal;
closeModalClick.onclick = closeModal;

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};

setTimeout(openModal, 1000);

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        openModal();
    }
});