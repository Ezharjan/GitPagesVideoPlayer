const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, 'videos');
const scriptPath = path.join(__dirname, 'assets', 'js', 'script.js');

fs.readdir(videosDir, (err, files) => {
    if (err) {
        console.error('Error reading videos directory:', err);
        return;
    }

    const videos = files.filter(file => path.extname(file) === '.mp4');

    const jsContent = `// Auto-generated list of videos
const videos = ${JSON.stringify(videos, null, 4)};

const videoList = document.getElementById('video-list');

videos.forEach(video => {
    const link = document.createElement('a');
    link.className = 'video-item';
    link.textContent = video;
    link.href = \`player.html?video=\${encodeURIComponent(video)}\`;
    link.target = '_blank';
    videoList.appendChild(link);
});`;

    fs.writeFile(scriptPath, jsContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing script.js:', err);
            return;
        }
        console.log('script.js updated with video list');
    });
});