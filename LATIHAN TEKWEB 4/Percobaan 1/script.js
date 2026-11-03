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