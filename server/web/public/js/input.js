window.onload = () => {
    let inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        input.oninput = () => {
            input.value = input.value.replace(/[^\d]/g, '');
            if(input.value.length > 11) input.value = input.value.slice(0, 11);
        }
    });
}