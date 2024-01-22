const moreBtn = document.querySelector(".main-img-grid-more-button");

let fetchedImagesHeight = 0;

moreBtn.addEventListener("click", () => {
  btnIsClicked = true;
  console.log("btnIsClicked: ", btnIsClicked);

  fetchImages(); // 버튼을 클릭하면 picsum url을 통해 이미지 데이터를 fetch
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
        "<img class='loading-image' src='./media/loading.gif' alt='로딩중 이미지' style='width: 20%; border-radius: 0px; box-shadow: 0 0 0 transparent;'>";
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
    document.querySelectorAll(".loading-image").forEach((e) => e.remove());
    datas.forEach((item) => {
      imageList.innerHTML +=
        "<img class='new-fetched-image' id='new-fetched-image' src=" +
        item.download_url +
        " alt=''>";
    });
    // const newImage = document.getElementsByClassName("new-fetched-image");
    // const img = newImage[0];
    // console.log(newImage);
    // console.log(img);
    // console.log(img.clientHeight);
    // fetchedImagesHeight += newImage[0].clientHeight;
    // console.log("fetchedImagesHeight: ", fetchedImagesHeight);
  }
}

const ifScrollDown = () => {
  console.log("imageList: ", imageList.clientHeight);
  console.log("fetchedImagesHeight2: ", fetchedImagesHeight);
  console.log("window.innerHeight: ", window.innerHeight);
  console.log(
    "document.documentElement.offsetHeight",
    document.documentElement.offsetHeight
  );
  // if (
  //   window.innerHeight + document.documentElement.scrollTop + 10 >=
  //   document.documentElement.offsetHeight
  // ) {
  //   fetchImages((pageToFetch += 1));
  // }

  if (pageToFetch >= 20) {
    return;
  } else if (imageList.clientHeight >= window.innerHeight) {
    fetchImages((pageToFetch += 1));
    console.log("pageToFetch: " + pageToFetch);
  }
};

// 스로틀링
const throttling = (callback, delay) => {
  console.log("throttle start");
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
window.addEventListener("scroll", throttling(ifScrollDown, 1000));
