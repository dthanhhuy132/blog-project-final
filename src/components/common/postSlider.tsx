export default function postSlider(
  firstTimeRun: boolean,
  callback: () => void
) {
  callback();
  let activePostEl: any = document.querySelector(".get-post-active");
  let fastPostWrapperEl: any = document.querySelector(".fast-post-wrapper");
  let fastPostSliderEl: any = document.querySelector(".fast-post-slider");

  if (activePostEl && fastPostSliderEl && fastPostWrapperEl) {
    let activePostBounding = activePostEl.getBoundingClientRect();
    const windowWidth = window.innerWidth;

    const postElRight = activePostBounding.right;
    const postElLeft = activePostBounding.left;
    const postElWidth = activePostEl.offsetWidth;
    const postElOffsetLeft = activePostEl.offsetLeft;
    const centerScreen = windowWidth / 2 - postElWidth / 2;

    fastPostWrapperEl.style.padding = windowWidth + "px";

    if (firstTimeRun) {
      fastPostSliderEl.scrollLeft = postElOffsetLeft - centerScreen;
    } else {
      if (postElLeft <= windowWidth - postElRight) {
        fastPostSliderEl.scrollLeft =
          postElOffsetLeft - centerScreen + postElWidth + 70;
      } else {
        fastPostSliderEl.scrollLeft =
          postElOffsetLeft - centerScreen - postElWidth - 70;
      }
    }
  }
}
