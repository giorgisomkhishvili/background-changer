const button = document.querySelector("#button");

const changeBackground = () => {
    const colors = Math.floor(Math.random() * 0xffffff).toString(16);
    document.body.style.background = `#${colors}`;
}

button.addEventListener("click", changeBackground);