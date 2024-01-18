const moreBtn = document.querySelector(".main-img-grid-more-button");
moreBtn.addEventListener("click", (event) => {
  fetchImages(); // 버튼을 클릭하면 picsum url을 통해 이미지 데이터를 fetch
});

const imageList = document.querySelector(".main-img-grid-container");
let pageToFetch = 1;

async function fetchImages(pageNum) {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=" + pageNum + "&limit=10"
    );
    if (!response.ok) {
      throw new Error("네트워크 응답에 문제가 있습니다.");
    }
    const datas = await response.json();
    console.log(datas);
    makeImageList(datas); // HTML상에 img 태그를 새로 생성해 fetch한 이미지 데이터를 출력
  } catch (error) {
    console.error("데이터를 가져오는데 문제가 발생했습니다: ", error);
  }
}
function makeImageList(datas) {
  datas.forEach((item) => {
    imageList.innerHTML +=
      "<img class='main-img-grid-item' src=" + item.download_url + " alt=''>";
  });
}

const ifScrollDown = () => {
  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 10 >=
      document.documentElement.offsetHeight
    ) {
      fetchImages((pageToFetch += 1));
    }
    // 스크롤이 화면 상단에서 얼마나 떨어졌는지 판단.
    // 최하단에 도달하면 fetchImage를 통해 url query를 변경시키며 새로운 이미지를 10개 로딩
  });
};

// 스로틀링
const throttling = (callback, delay) => {
  let timer = null;
  return () => {
    console.log(timer);

    if (timer === null) {
      timer = setTimeout(() => {
        callback();
        timer = null;
      }, delay);
    }
  };
};

// window.addEventListener('scroll', throttling(ifScrollDown, 3000));
// 스로틀링을 통해 3초 간격으로 스크롤 간격 판단 함수를 실행시킨다.
