
// Membuat form
let form = document.createElement('form');

// Input nama
let labelNama = document.createElement('label');
labelNama.textContent = 'Nama Lengkap';

let inputNama = document.createElement('input');
inputNama.type = 'text';
inputNama.id = 'nama';
inputNama.placeholder = 'Masukkan nama lengkap';

// Input email
let labelEmail = document.createElement('label');
labelEmail.textContent = 'Alamat Email';

let inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.id = 'email';
inputEmail.placeholder = 'contoh@email.com';

// Tombol submit
let btnSubmit = document.createElement('button');
btnSubmit.type = 'button';
btnSubmit.textContent = 'Kirim Data ✨';

// Area pesan error
let errorDiv = document.createElement('div');
errorDiv.id = 'error-message';

// Menambahkan event listener
btnSubmit.onclick = function() {

    let nama = inputNama.value.trim();
    let email = inputEmail.value.trim();
    let errorMessage = "";

    if (nama === '') {
        errorMessage += 'Nama tidak boleh kosong. ';
    }

    if (email === '' || email.indexOf('@') === -1) {
        errorMessage += 'Email harus diisi dengan benar.';
    }

    if (errorMessage !== '') {
        errorDiv.textContent = errorMessage;
        errorDiv.style.color = '#d95375';
        errorDiv.style.backgroundColor = '#fff0f3';
    } else {
        errorDiv.textContent =
            'Data berhasil dikirim! Terima kasih 🌷';

        errorDiv.style.color = '#579b78';
        errorDiv.style.backgroundColor = '#eaf8ef';
    }
};

// Menambahkan elemen ke form
form.appendChild(labelNama);
form.appendChild(inputNama);

form.appendChild(labelEmail);
form.appendChild(inputEmail);

form.appendChild(btnSubmit);
form.appendChild(errorDiv);

// Menambahkan form ke output
let outputDiv = document.getElementById('output');
outputDiv.appendChild(form);