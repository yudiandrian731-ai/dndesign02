// Menunggu seluruh konten halaman dimuat
window.addEventListener('load', () => {
    // Memberikan sedikit waktu sebelum menghilangkan preloader
    setTimeout(() => {
        const body = document.querySelector('body');
        body.style.opacity = '1';
    }, 200); // 200ms delay
});