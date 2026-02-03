const urlParams = new URLSearchParams(window.location.search);
const videoName = urlParams.get('video');

if (videoName) {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.src = `videos/${videoName}`;

    const speedInput = document.getElementById('speed');
    const speedValue = document.getElementById('speed-value');

    speedInput.addEventListener('input', () => {
        videoPlayer.playbackRate = speedInput.value;
        speedValue.textContent = `${speedInput.value}x`;
    });

    // Full screen support
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            videoPlayer.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }

    // F key for full screen
    document.addEventListener('keydown', (e) => {
        if (e.key === 'f' || e.key === 'F') {
            toggleFullScreen();
        }
    });

} else {
    document.body.innerHTML = '<h1 style="color: white; text-align: center; margin-top: 50px;">No video specified</h1>';
}