const projectWrapper = document.querySelector('.project-wrapper');

// 자동 스크롤 함수
function autoScroll() {
    projectWrapper.scrollLeft += 1; // 1px씩 오른쪽으로 스크롤
}

// 자동 스크롤 실행
let autoScrollInterval = setInterval(autoScroll, 50); // 50ms마다 실행 (속도 조정 가능)

// 사용자가 스크롤을 시작하면 자동 스크롤 중지
projectWrapper.addEventListener('scroll', () => {
    clearInterval(autoScrollInterval);
});

// 일정 시간 후 자동 스크롤 재시작
projectWrapper.addEventListener('mouseleave', () => {
    autoScrollInterval = setInterval(autoScroll, 50); // 자동 스크롤 재시작
});
