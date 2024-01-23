# hodu-fe-project

🍀 ESTsoft 오르미 백엔드 개발자 과정 4기의 첫 작업물로 제작한 프론트엔드 미니 프로젝트 '호두' 페이지를 소개합니다.
<br>

## 📝프로젝트 소개

'호두' 웹 페이지는 사랑스러운 고양이 '호두'가 주인공으로, PC 웹 규격 화면에 최적화되어 제작되었습니다.<br>
'호두'는 HTML/CSS, JavaScript를 기반으로 제작된 정적 웹 페이지입니다.<br>

`GitHub Pages 바로가기` : https://biiit4894.github.io/hodu-fe-project/
<br>

## 📆 개발 기간

2024.01.15~2024.01.23
<br>

## 🛠 기술 스택

`HTML/CSS`, `JavaScript`
<br>

## 📌 UI 주요 기능

1. 이미지 무한 스크롤

- <a href="https://picsum.photos/">Lorem Picsum</a>을 연동해 'Show More' 버튼을 클릭한 이후 스크롤이 내려감에 따라 랜덤 이미지름 출력합니다.
- 스크롤 이벤트 감지의 민감도를 조절하기 위해 스로틀링을 적용했습니다.
  - 1초 간격으로 '더보기 버튼' 클릭 당시 또는 스로틀링 함수 호출 당시와 스크롤이 내려간 이후의 `scrollY` 값을 비교합니다.
  - 지나치게 잦은 이벤트 리스닝을 방지하고 스크롤이 올라갈 때는 이미지가 로딩되지 않도록 해 유저 경험을 개선합니다.

2. 카카오맵 API 연동

- <a href="https://apis.map.kakao.com/">카카오맵 API</a>를 연동해 지도 확대 및 축소, 스카이뷰 조회 기능을 활용합니다.

   <br>

## 📁 Foldering

```
.
|-- index.html
|-- media
|-- script
|   |-- hamburgerMenu.js
|   |-- imageScroll.js
|   |-- kakaoMap.js
|   |-- scrollBtn.js
|   `-- subscribeModal.js
`-- style
    |-- hodu.css
    `-- reset.css
```

## 🎨 UI 시안

'호두'는 아래의 PC 웹 규격 디자인 시안을 바탕으로 제작되었습니다.

<img width="60%" src="https://github.com/biiit4894/hodu-fe-project/assets/82032418/ea9e2806-8dab-414f-a197-2cc0c9b6a777">
