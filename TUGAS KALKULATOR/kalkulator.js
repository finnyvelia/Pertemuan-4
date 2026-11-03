
function hitung(operator) {

    // Mengambil nilai input
    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;

    let hasilDiv = document.getElementById("hasil");
    let layar = document.getElementById("layar");

    // Memeriksa input kosong
    if (angka1 === "" || angka2 === "") {
        hasilDiv.textContent = "Input kosong!";
        layar.textContent = "Error";
        return;
    }

    // Mengubah input menjadi angka
    angka1 = parseFloat(angka1);
    angka2 = parseFloat(angka2);

    let hasil;

    // Penjumlahan
    if (operator === "+") {
        hasil = angka1 + angka2;
    }

    // Pengurangan
    else if (operator === "-") {
        hasil = angka1 - angka2;
    }

    // Perkalian
    else if (operator === "*") {
        hasil = angka1 * angka2;
    }

    // Pembagian
    else if (operator === "/") {

        if (angka2 === 0) {
            hasilDiv.textContent = "Tidak bisa dibagi 0!";
            layar.textContent = "Error";
            return;
        }

        hasil = angka1 / angka2;
    }

    // Menampilkan hasil
    hasilDiv.textContent = hasil;
    layar.textContent = hasil;
}
s