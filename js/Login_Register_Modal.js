document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.auth-container');
    const showRegisterBtn = document.getElementById('show-register');
    const showLoginBtn = document.getElementById('show-login');

    showRegisterBtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    showLoginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });
    document.querySelector('#authModal').addEventListener('click', function (event) {
        if (event.target === this) {
            const modalInstance = bootstrap.Modal.getInstance(this);
            modalInstance.hide();
        }
    });
});