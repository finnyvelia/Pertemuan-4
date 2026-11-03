
// Mengambil elemen HTML
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");

// Mengambil data dari localStorage
let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

// Fungsi menyimpan data
function saveTasks() {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
}

// Fungsi menampilkan daftar tugas
function renderTasks() {

    taskList.innerHTML = "";

    // Jika daftar tugas kosong
    if (tasks.length === 0) {

        let emptyMessage = document.createElement("li");
        emptyMessage.className = "empty";

        let icon = document.createElement("span");
        icon.textContent = "🌷";

        let text = document.createElement("p");
        text.textContent = "Belum ada tugas nih! Yuk tambahkan kegiatanmu ♡";

        emptyMessage.appendChild(icon);
        emptyMessage.appendChild(text);

        taskList.appendChild(emptyMessage);

    }

    // Menampilkan setiap tugas
    tasks.forEach(function(task, index) {

        let li = document.createElement("li");
        li.className = "task-item";

        // Checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        // Teks tugas
        let taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = task.name;

        // Jika tugas sudah selesai
        if (task.completed) {
            li.classList.add("completed");
        }

        // Event checkbox
        checkbox.addEventListener("change", function() {

            tasks[index].completed = checkbox.checked;

            saveTasks();
            renderTasks();

        });

        // Tombol hapus
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "🗑️";
        deleteBtn.title = "Hapus tugas";

        // Event hapus
        deleteBtn.addEventListener("click", function() {

            tasks.splice(index, 1);

            saveTasks();
            renderTasks();

        });

        // Memasukkan elemen ke dalam list
        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    });

    // Menghitung jumlah tugas
    let total = tasks.length;
    let selesai = tasks.filter(function(task) {
        return task.completed;
    }).length;

    taskCount.textContent =
        selesai + "/" + total + " Selesai";
}

// Fungsi menambahkan tugas
function addTask() {

    let taskName = taskInput.value.trim();

    // Validasi input
    if (taskName === "") {

        alert("🌸 Yuk, tulis tugas kamu terlebih dahulu!");

        return;
    }

    // Menambahkan tugas baru
    tasks.push({
        name: taskName,
        completed: false
    });

    // Menyimpan dan memperbarui tampilan
    saveTasks();
    renderTasks();

    // Mengosongkan input
    taskInput.value = "";
    taskInput.focus();

}

// Event tombol tambah
addBtn.addEventListener("click", addTask);

// Menambahkan tugas dengan tombol Enter
taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});

// Menampilkan data saat halaman dibuka
renderTasks();