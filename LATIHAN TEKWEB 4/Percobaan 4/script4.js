
// Membuat form
let form = document.createElement("form");

// Label dan input nama
let labelNama = document.createElement("label");
labelNama.textContent = "🌸 Nama Lengkap";

let inputNama = document.createElement("input");
inputNama.type = "text";
inputNama.id = "nama";
inputNama.placeholder = "Tulis nama cantik kamu...";

// Label dan input email
let labelEmail = document.createElement("label");
labelEmail.textContent = "💌 Email Address";

let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.id = "email";
inputEmail.placeholder = "Masukkan email kamu...";

// Tombol submit
let btnSubmit = document.createElement("button");
btnSubmit.type = "submit";
btnSubmit.textContent = "Daftar Sekarang ♡";

// Area pesan
let errorDiv = document.createElement("div");
errorDiv.id = "message";

// Event submit
form.addEventListener("submit", function(event) {

    event.preventDefault();

    let nama = inputNama.value.trim();
    let email = inputEmail.value.trim();
    let errorMessage = "";

    // Validasi nama
    if (nama === "") {
        errorMessage += "🌷 Nama tidak boleh kosong! ";
    }

    // Validasi email
    if (email === "") {
        errorMessage += "💌 Email tidak boleh kosong!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMessage += "💗 Format email tidak valid!";
    }

    // Menampilkan pesan
    if (errorMessage !== "") {

        errorDiv.textContent = errorMessage;
        errorDiv.className = "error";

    } else {

        errorDiv.textContent =
            "🎀 Pendaftaran berhasil! Welcome, " + nama + " ♡";

        errorDiv.className = "success";

        form.reset();
    }

});

// Menambahkan elemen ke form
form.appendChild(labelNama);
form.appendChild(inputNama);

form.appendChild(labelEmail);
form.appendChild(inputEmail);

form.appendChild(btnSubmit);
form.appendChild(errorDiv);

// Menampilkan form ke HTML
let outputDiv = document.getElementById("output");
outputDiv.appendChild(form);