// 프로젝트 리스트 복제하여 무한 스크롤 구현
const projectList = document.querySelector('.project-list');
const clone = projectList.cloneNode(true); // 프로젝트 리스트 복제
document.querySelector('.project-wrapper').appendChild(clone);
