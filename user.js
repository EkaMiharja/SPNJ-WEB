// FUNCTION NAVBAR START
function navHome() {
    window.location.href = "dashboard.html";
}
function navCart() {
    window.location.href = "recent.html";
}

function navExplore() {
    window.location.href = "explore.html";
}

function navUser() {
    window.location.href = "user.html";
}   
// FUNCTION NAVBAR END

// FUNCION UPDATE START
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Cegah reload halaman

    // Ambil semua nilai dari form
    const userData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      birthDate: document.getElementById('birthDate').value,
      email: document.getElementById('email').value,
      gender: document.getElementById('gender').value,
      phone: document.getElementById('phone').value,
      password: document.getElementById('password').value,
      address: document.getElementById('address').value,
    };

    // Simulasikan penyimpanan dengan menampilkan di console dan alert
    console.log("Data berhasil diperbarui:");
    console.table(userData);

    // Tampilkan alert Bootstrap
    const alertBox = document.getElementById('successAlert');
    alertBox.classList.remove('d-none');
    alertBox.classList.add('show');

    setTimeout(() => {
      alertBox.classList.remove('show');
      alertBox.classList.add('d-none');
    }, 3000);
  });
});

// FUNCTION UPDATE END