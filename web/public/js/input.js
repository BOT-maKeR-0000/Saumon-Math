window.onload = () => {
    let inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        input.oninput = () => {
            input.value = input.value.replace(/[^\d]/g, '');
        }
    });
}