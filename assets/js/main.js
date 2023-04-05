const btn = document.getElementById('submit');
const input = document.querySelectorAll('input');

btn.addEventListener("click", ()  => {
    input.forEach(e => {
        if (!e.value) {
            e.setAttribute("required", true);
        }
    });
});