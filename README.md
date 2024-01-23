## hodu-fe-project

### 📝프로젝트 개요

ESTsoft 오르미 백엔드 개발자 과정 4기의 첫 작업물로 제작한 프론트엔드 미니 프로젝트 '호두' 페이지를 소개합니다.
'호두' 웹 페이지는 사랑스러운 고양이 '호두'가 주인공으로, PC 웹 규격 화면에 최적화되어 제작되었습니다.<br>
'호두'는 HTML/CSS, JavaScript를 기반으로 제작된 정적 웹 페이지입니다.<br>

`GitHub Pages 바로가기` : https://biiit4894.github.io/hodu-fe-project/
<br>

### 📆 개발 기간

2024.01.15~2024.01.23
<br>

### 🛠 기술 스택

`HTML/CSS`, `JavaScript`
<br>

### 📌 UI 주요 기능

1. 이미지 무한 스크롤

- <a href="https://picsum.photos/">Lorem Picsum</a>을 연동해 'Show More' 버튼을 클릭한 이후 스크롤이 내려감에 따라 랜덤 이미지름 출력합니다.
- 스크롤 이벤트 감지의 민감도를 조절하기 위해 스로틀링을 적용합니다.
  - 1초 간격으로 '더보기 버튼' 클릭 당시 또는 스로틀링 함수 호출 당시의 `scrollY` 값과 스크롤이 내려간 이후의 `scrollY` 값을 비교해, 스크롤이 내려갔을 때에만 이미지가 로딩되도록 합니다.
  - 이와 같이 스크롤 다운을 감지하는 함수가 지나치게 잦게 호출되지 않도록 해 이미지 로딩을 조절함으로써 유저 경험을 개선합니다.
- 10회 이상 이미지가 로딩될 경우, "더이상 조회할 이미지가 없습니다" 문구와 새로고침 버튼을 출력해 유저가 화면을 원상복구할 수 있도록 합니다.

<p align="center">
  <img src="https://github.com/biiit4894/hodu-fe-project/assets/82032418/8c45c0a1-f196-42ef-9de0-29e68a5e11aa">
  <img src="https://github.com/biiit4894/hodu-fe-project/assets/82032418/b79bc623-53fe-478b-867c-badb9ba383df">
</p>
<p align="center">
  <img src="https://github.com/biiit4894/hodu-fe-project/assets/82032418/4e1888c7-19a6-4643-8534-288bee4da561">
</p>

2. 카카오맵 API 연동

- <a href="https://apis.map.kakao.com/">카카오맵 API</a>를 연동해 지도 확대 및 축소, 스카이뷰 조회 기능을 활용합니다.
- 카카오맵 API 제공 기능을 활용해 호두 이미지 마커를 지도 영역에 자유롭게 클릭할 수 있으며, 확대 및 축소 아이콘으로 지도의 확대 레벨을 조절하고, 스카이뷰 조회 아이콘을 눌러 지도 화면의 스카이뷰 버전을 조회할 수 있습니다.

<p align="center">
  <img src="https://github.com/biiit4894/hodu-fe-project/assets/82032418/be7a5eef-865a-4c54-9f28-86e09413d2cd">
</p>

3. 호두 블로그를 구독하세요!

- 화면 하단의 `"Subscribe to Hodu Blog post"` 구간을 통해 이메일 주소를 입력하고 호두 블로그 구독을 신청할 수 있습니다. 정적 페이지이기 때문에 웹 서버로의 실 데이터 전송은 불가합니다.
- `<input type="email">` 태그, 정규표현식, `alert`를 활용해 이메일의 정상적인 입력 여부를 판단합니다.
  - `input` 태그 내부에 이메일 형식의 문자열을 입력한 후 엔터 키를 누르거나 "subsribe" 버튼을 클릭하면 정규표현식 테스트를 거쳐 이메일 형식이 유효함이 판단된 경우에 "Thank You!" 모달이 출력되도록 합니다.
  - 공백문자열을 입력한 경우, 그리고 앞의 두 경우에 해당하지 않을 경우 `alert`창을 출력합니다.

### 📁 Foldering

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

### 🎨 UI 시안

'호두'는 아래의 PC 웹 규격 디자인 시안을 바탕으로 제작되었습니다.

<img width="60%" src="https://github.com/biiit4894/hodu-fe-project/assets/82032418/ea9e2806-8dab-414f-a197-2cc0c9b6a777">
