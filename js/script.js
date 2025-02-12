//Ini file Javascript
document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("main-input");
    const resultField = document.getElementById("main-result");
    const howField = document.getElementById("how-konversi");
    const buttonKonversi = document.getElementById("buttonKonversi");
    const buttonReset = document.getElementById("buttonReset");
    const buttonReverse = document.getElementById("buttonReverse");
    const toastElement = document.getElementById("toast-notification");
    
    let isCelsiusToFahrenheit = true;
    
    window.addEventListener("load", function () {
        document.body.style.opacity = 1;
    });

    //Notifikasi Mengambang
    function showToast(message) {
        toastElement.textContent = message;
        toastElement.classList.add("show");
        setTimeout(() => {
            toastElement.classList.remove("show");
        }, 3000);
    }

    //Button Konversi Suhu
    buttonKonversi.addEventListener("click", function () {
        let inputValue = parseFloat(inputField.value);
        if (isNaN(inputValue)) {

            //Notifikasi Mengambang Tombol
            showToast("Masukkan Nilai Suhu !");

            return;
        }
        
        let convertedValue, formula;
        if (isCelsiusToFahrenheit) {
            convertedValue = (inputValue * 9 / 5) + 32;
            formula = `(${inputValue} × 9/5) + 32 = ${convertedValue.toFixed(2)}°F`;
        } else {
            convertedValue = (inputValue - 32) * 5 / 9;
            formula = `(${inputValue} - 32) × 5/9 = ${convertedValue.toFixed(2)}°C`;
        }
        
        resultField.value = convertedValue.toFixed(2);

        //Menampilkan Rumus Konversi Suhu
        howField.value = formula;
    });
    
    //Button Reset
    buttonReset.addEventListener("click", function () {
        inputField.value = "";
        resultField.value = "";
        howField.value = "";
        showToast("Nilai Telah Direset !");
    });
    
    //Button Reverse
    buttonReverse.addEventListener("click", function () {
        isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
        document.querySelector("label[for='main-input']").textContent = isCelsiusToFahrenheit ? "Celcius :" : "Fahrenheit :";
        document.querySelector("label[for='main-result']").textContent = isCelsiusToFahrenheit ? "Fahrenheit" : "Celcius";
        showToast("Satuan Telah Diubah !");
    });
});