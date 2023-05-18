// 한게임 모바일 프로모션 마크업 전용 스크립트입니다.
// 10px = 1rem 단위에 맞춰 작업한 요소의 크기를 반응형으로 만들기 위해
// html의 font-size를 배경이미지 비율에 맞춰 상대적으로 조정합니다.

function remAutoSizing(){
  const bgImg = document.getElementById('bgImg');
  const wrap = document.getElementById('wrap');
  let htmlFontSize = 10 / bgImg.naturalWidth * wrap.clientWidth;
  document.querySelector('html').style.fontSize = htmlFontSize + 'px';
};

// 창 크기가 resize 될 때마다 함수를 호출합니다.
window.addEventListener('resize',() => {remAutoSizing();});
