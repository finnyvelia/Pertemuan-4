function hitungVolumeKubus(sisi) {
    return sisi * sisi * sisi;
}

function hitungVolume() {
    let sisi = document.getElementById("sisi").value;
    let volume = hitungVolumeKubus(Number(sisi));

    document.getElementById("hasil").innerHTML =
        "Volume kubus adalah: " + volume;
}


function hitungLuas(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

let luas1 = hitungLuas(10, 6);
let luas2 = hitungLuas(12, 8);

console.log("Luas segitiga dengan alas 10 dan tinggi 6 adalah: " + luas1);

console.log("Luas segitiga dengan alas 12 dan tinggi 8 adalah: " + luas2);

document.getElementById("hasil").innerHTML =
    "<p>Luas segitiga dengan alas 10 dan tinggi 6 adalah: " + luas1 + "</p>" +
    "<p>Luas segitiga dengan alas 12 dan tinggi 8 adalah: " + luas2 + "</p>";


    