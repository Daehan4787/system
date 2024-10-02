// 메인 슬라이드 전환 기능
let currentIndex = 0;
const slides = document.querySelectorAll('.slide-content');
const totalSlides = slides.length;
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[index].classList.add('active');
}

// 슬라이드 자동 전환 (기존 애니메이션 유지)
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 5000);

// 인디케이터 클릭 시 슬라이드 이동
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// 초기 슬라이드 표시
showSlide(currentIndex);
