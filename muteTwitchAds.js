let pass = true;

const muteVideo = mute => {
  if (mute) {
    document.querySelectorAll("video").forEach((video) => {
      video.muted = true
    })
  } else {
    document.querySelectorAll("video").forEach((video) => {
      video.muted = false
    })

  }
}

const handleVideoMute = () => {
  pass = false
  const querySelectorLength = document.querySelectorAll('span[data-a-target="video-ad-label"]').length

  if(querySelectorLength == 0) {
    // Unmute
    pass = true
    muteVideo(false)
    
  } else {
    setTimeout(() => {
      handleVideoMute()
    },500)
  }

}

setInterval(() => {

  const querySelectorLength = document.querySelectorAll('span[data-a-target="video-ad-label"]').length

  if (querySelectorLength > 0 && pass) {
    // If querySelectorLenght is more than one, it means that an ad is running.
    muteVideo(true)
    handleVideoMute()
  }
}, 500);
