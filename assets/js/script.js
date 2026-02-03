// Auto-generated list of videos
const videos = [
    "test_video_1.mp4",
    "test_video2.mp4",
];

const videoList = document.getElementById('video-list');

videos.forEach(video => {
    const link = document.createElement('a');
    link.className = 'video-item';
    link.textContent = video;
    link.href = `player.html?video=${encodeURIComponent(video)}`;
    link.target = '_blank';
    videoList.appendChild(link);
});