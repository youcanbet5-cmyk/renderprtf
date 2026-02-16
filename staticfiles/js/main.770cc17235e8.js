/* -------- ONLY ONE VIDEO PLAY -------- */

document.addEventListener("play", function (e) {

  if (e.target.tagName === "VIDEO") {

    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
      if (video !== e.target) {
        video.pause();
      }
    });

  }

}, true);
