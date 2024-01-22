const moreBtn = document.querySelector(".main-img-grid-more-button");
let btnIsClicked = false;
let fetchedImagesHeight = 0;

moreBtn.addEventListener("click", () => {
  btnIsClicked = true;

  fetchImages(); // 버튼을 클릭하면 picsum url을 통해 이미지 데이터를 fetch

  console.log(btnIsClicked);
  if (btnIsClicked) {
    let startYOffset = window.scrollY;
    window.addEventListener(
      "scroll",
      throttling(ifScrollDown, 1000, startYOffset)
    );
  }
});

// 스로틀링을 통해 3초 간격으로 스크롤 간격 판단 함수를 실행시킨다.

const imageList = document.querySelector(".main-img-grid-container");

let isFetching = false;
let pageToFetch = 1;

async function fetchImages(pageNum) {
  try {
    isFetching = true;
    if (isFetching) {
      imageList.innerHTML +=
        "<img class='loading-image' src='./media/loading.gif' alt='로딩중 이미지' style='width: 10%; border-radius: 0px; box-shadow: 0 0 0 transparent;'>";
    }
    const response = await fetch(
      "https://picsum.photos/v2/list?page=" + pageNum + "&limit=3"
    );
    if (!response.ok) {
      throw new Error("네트워크 응답에 문제가 있습니다.");
    }

    const datas = await response.json();
    isFetching = false;

    makeImageList(datas); // HTML상에 img 태그를 새로 생성해 fetch한 이미지 데이터를 출력
  } catch (error) {
    console.error("데이터를 가져오는데 문제가 발생했습니다: ", error);
  }
}
function makeImageList(datas) {
  if (!isFetching) {
    datas.forEach((item) => {
      imageList.innerHTML +=
        "<img id='new-fetched-image' class='new-fetched-image' src=" +
        item.download_url +
        " alt=''>";
    });
    document.querySelectorAll(".loading-image").forEach((e) => e.remove());
  }
}

const ifScrollDown = (startY) => {
  const newImages = document.getElementsByClassName("new-fetched-image");

  for (let i = 0; i < newImages.length; i++) {
    newImages[i].id = "";
  }
  console.log(startY);
  console.log(window.scrollY);

  if (pageToFetch >= 10) {
    const btn = document.querySelector(".main-img-grid-text-below");
    btn.innerHTML = `<p class="main-img-grid-text-below-bold">더 이상 조회할 이미지가 없습니다.</p>`;
    return;
  } else if (window.scrollY - startY > 50) {
    fetchImages((pageToFetch += 1));
  }
};

// 스로틀링
const throttling = (callback, delay, startY) => {
  console.log("throttle start");
  let timer = null;
  return () => {
    console.log(timer);

    if (timer === null) {
      timer = setTimeout(() => {
        callback(startY);

        timer = null;
        startY = window.scrollY;
      }, delay);
    }
  };
};
