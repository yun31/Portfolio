
// 카테고리 필터링 기능
document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');
    const researchEntries = document.querySelectorAll('.research-entry');

    categories.forEach(category => {
        category.addEventListener('click', function (e) {
            e.preventDefault();

            // 현재 활성화된 버튼 스타일 적용
            categories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter'); // 선택된 카테고리 값

            // 연구 항목 필터링
            researchEntries.forEach(entry => {
                const category = entry.getAttribute('data-category'); // 연구 항목의 카테고리 값

                // 'all'이거나 해당 카테고리가 포함된 경우만 표시
                if (filter === 'all' || category.includes(filter)) {
                    entry.classList.add('visible');
                } else {
                    entry.classList.remove('visible');
                }
            });
        });
    });

    // 초기화: 'All' 버튼 클릭 상태에서 시작
    document.querySelector('.category.active').click();
});