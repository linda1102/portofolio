const form = document.querySelector('.contact-form');
const nama = document.querySelector('input[Name="Name"]');
const email = document.querySelector('input[Email="Email"]');
const pesan = document.querySelector('textarea[Send message="Send Message"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    nama.value = '';
    email.value = '';
    pesan.value = '';
});