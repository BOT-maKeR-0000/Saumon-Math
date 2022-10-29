window.onload(() => {
    let inputs = document.getElementsByTagName('input');
    inputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.value = e.value.replace(/[^\d]/g, '');
        }
    });
});