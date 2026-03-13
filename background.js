chrome.action.onClicked.addListener(async (tab) => {
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: togglePip,
  });
});

function togglePip() {
  const video = document.querySelector("video");

  if (!video) {
    alert("tiny-yt: No video found on this page.");
    return;
  }

  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else {
    video.requestPictureInPicture().catch((err) => {
      alert(`tiny-yt: Could not enter Picture-in-Picture.\n${err.message}`);
    });
  }
}
