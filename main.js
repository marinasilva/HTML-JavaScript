const form = document.getElementById('form-numbers');

function validaNumeros(A, B) {
    if (B > A){
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e){
    let formValido = false;
    e.preventDefault();

    const A = document.getElementById('a-number');
    const B = document.getElementById('b-number');
    const success = document.querySelector('.success-message');
    const error = document.querySelector('.error-message');

    successMessage = 'SUCESSO';

    formValido = validaNumeros(A.value, B.value);

    if (formValido) {
       error.style.display = 'none'; 
       success.innerHTML = successMessage;
       success.style.display = 'block';
       
        A.value = '';
        B.value = '';
    } else {
        success.style.display = 'none';
        error.innerHTML = 'ERRO, TENTE NOVAMENTE';
        error.style.display = 'block';        
    }
})