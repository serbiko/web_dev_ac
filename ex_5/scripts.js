document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("prime-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let number = parseInt(document.getElementById("number-input").value);
        const result = isPrime(number);
        if (result) {
            alert(`${number} é um número primo.`);
        } else {
            alert(`${number} não é um número primo.`);
        }
    });

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;

        let i;
        for (i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }
});
