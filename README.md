## hodu-fe-project

## 📝프로젝트 개요

'호두' 웹 페이지는 사랑스러운 고양이 '호두'를 주인공으로 담은 정적 웹 페이지입니다.<br>
'호두'는 PC 웹 규격 화면에 최적화된 UI로 구현되었으며,<br>
ESTsoft 오르미 백엔드 개발자 과정 4기의 프론트엔드 미니 프로젝트의 일환으로 진행되었습니다.

`GitHub Pages 바로가기` : https://biiit4894.github.io/hodu-fe-project/

<br>

### 📆 개발 기간

2024.01.15 ~ 2024.01.23

<br>

### 🛠 기술 스택

`HTML/CSS`, `JavaScript`

<br>

## 📌 UI 주요 기능

**1. 이미지 무한 스크롤**

- 랜덤 이미지를 제공하는 <a href="https://picsum.photos/">Lorem Picsum</a>을 사용합니다.
  - `Show More` 버튼을 클릭한 이후 스크롤이 내려감에 따라 랜덤 이미지를 출력합니다.
- 스크롤 이벤트 감지의 민감도를 조절하기 위해 `스로틀링`을 적용합니다.
  - `더보기 버튼`을 클릭했을 때 또는 스로틀링 함수가 호출되었을 당시의 `scrollY` 값과 스크롤이 내려간 이후의 `scrollY` 값을 1초에 한 번씩 비교합니다.
  - 결과적으로 후자의 값이 더 큰 경우, 곧 스크롤이 내려갔을 경우에만 이미지가 로딩되도록 합니다.
  - 이처럼 `스로틀링`을 통해 스크롤 다운 감지 함수가 지나치게 잦게 호출되지 않도록 해 이미지 로딩을 조절함으로써 유저 경험을 개선합니다.
- 이미지 로딩 이후 유저는 화면을 원상복구할 수 있습니다.
  - 10회 이상 이미지가 로딩될 경우, `더 이상 조회할 이미지가 없습니다.` 문구와 새로고침 버튼을 출력해 유저가 이미지 로딩 이전으로 화면을 복구할 수 있도록 합니다.

<p align="center">
  <img src="https://github.com/biiit4894/hodu-fe-project/assets/82032418/b79bc623-53fe-478b-867c-badb9ba383df">
  <img src="https://github.com/biiit4894/hodu-fe-project/assets/82032418/4e1888c7-19a6-4643-8534-288bee4da561">
</p>

**2. 카카오맵 API 연동**

- <a href="https://apis.map.kakao.com/">카카오맵 API</a>가 제공하는 지도 확대 및 축소, 스카이뷰 조회 기능을 사용합니다.
    - 고양이 호두의 이미지 마커를 지도 영역에 자유롭게 클릭할 수 있습니다.
    - 확대 및 축소 아이콘으로 지도의 확대 레벨을 조절할 수 있습니다.
    - 스카이뷰 아이콘을 눌러 지도 화면의 스카이뷰 버전을 조회할 수 있습니다.
<p align="center">
  <img src="https://github.com/biiit4894/hodu-fe-project/assets/82032418/be7a5eef-865a-4c54-9f28-86e09413d2cd">
</p>

**3. 호두 블로그를 구독하세요!**

- 화면 하단의 `"Subscribe to Hodu Blog post"` 구간을 통해 이메일 주소를 입력하고 호두 블로그 구독을 신청할 수 있습니다.
  - 정적 페이지이기 때문에 웹 서버로의 실 데이터 전송은 불가합니다.
- 총 세 가지 경우를 고려해 이메일의 정상적인 입력 여부를 판단합니다.
  1. `input` 태그 내부에 `문자열@문자열` 형식의 데이터를 입력한 경우
     - 정규표현식 테스트를 거쳐 이메일 형식 유효하다고 판단되어 구독 신청이 완료되고 `"Thank You!"` 모달이 출력됩니다.
  2. 공백문자열로 `trim`되어 지는 문자열을 입력한 경우
     - 구독 신청이 반려되고 `alert`창에 `이메일을 입력해 주세요.` 문구를 출력합니다.
  3. 앞의 두 경우에 해당하지 않을 경우
     - 구독 신청이 반려되고 `alert`창에 `이메일 형식이 올바르지 않습니다.` 문구를 출력합니다.
  <p align="center">
    <img src="https://github.com/biiit4894/hodu-fe-project/assets/82032418/6a9d0a89-6e5e-4cb6-a331-71943f2b3c0e">
  </p>
  <p align="center">
    <img src="https://github.com/biiit4894/hodu-fe-project/assets/82032418/b3089202-4024-4272-99a3-4ae1c2708309">
    <img src="https://github.com/biiit4894/hodu-fe-project/assets/82032418/557000d8-eb1c-427d-815d-32aaaecc17a4">
  </p>
(시연을 위해 화면 확대 후 녹화를 진행했습니다)

<br>

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

<br>

### 🎨 UI 시안

'호두'는 아래의 PC 웹 규격 화면 디자인 시안을 바탕으로 제작되었습니다.

<img width="60%" src="https://github.com/biiit4894/hodu-fe-project/assets/82032418/ea9e2806-8dab-414f-a197-2cc0c9b6a777">
