document.addEventListener('DOMContentLoaded', () => {
    const passwordEl = document.getElementById('password');
    const lengthEl = document.getElementById('length');
    const uppercaseEl = document.getElementById('uppercase');
    const lowercaseEl = document.getElementById('lowercase');
    const numbersEl = document.getElementById('numbers');
    const symbolsEl = document.getElementById('symbols');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    function generatePassword() {
        let password = '';
        let availableChars = '';
        const length = lengthEl.value;

        if (uppercaseEl.checked) availableChars += uppercaseChars;
        if (lowercaseEl.checked) availableChars += lowercaseChars;
        if (numbersEl.checked) availableChars += numberChars;
        if (symbolsEl.checked) availableChars += symbolChars;

        if (availableChars === '') {
            alert('Por favor, selecione pelo menos um tipo de caractere.');
            return '';
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * availableChars.length);
            password += availableChars[randomIndex];
        }

        return password;
    }

    generateBtn.addEventListener('click', () => {
        const newPassword = generatePassword();
        if (newPassword) {
            passwordEl.value = newPassword;
        }
    });

    copyBtn.addEventListener('click', () => {
        if (passwordEl.value) {
            navigator.clipboard.writeText(passwordEl.value)
                .then(() => {
                    alert('Senha copiada para a área de transferência!');
                })
                .catch(err => {
                    console.error('Erro ao copiar a senha: ', err);
                });
        } else {
            alert('Não há senha para copiar.');
        }
    });
});