// Function untuk mensimulasikan fitur login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple login simulation
    if (username && password) {
        if (username === password) {
            alert(`Selamat! Berhasil login sebagai ${username}`);

            window.location.href = "dashboard.html";
        } else if (username !== password) {
            alert('Password tidak sama dengan username');
        }
    } else {
        alert('Harap isi username dan password');
    }
}

// Function untuk mensimulasikan fitur cari lokasi
function fetchLocation() {
    const location = document.getElementById('location').value;
    
    if (location) {
        alert(`Lokasi yang dicari: ${location}`);
    } else {
        alert('Harap ketik lokasi.');
    }
}
