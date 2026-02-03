# GitHub Pages Video Gallery

A modern, responsive video gallery website designed for hosting on GitHub Pages. Features automatic video list updates, clean design, and full video playback controls.

## Features

- **Automatic Video Listing**: Dynamically lists all `.mp4` videos from the `videos/` folder
- **Auto-Update on Push**: GitHub Actions automatically updates the video list when new videos are added to the repository
- **Responsive Design**: Modern, mobile-friendly interface with gradient backgrounds and smooth animations
- **Video Player**: Dedicated player page with native HTML5 controls plus custom speed control overlay
- **Full Screen Support**: Press `F` key or use the full screen button for immersive viewing
- **Playback Speed Control**: Adjustable speed from 0.5x to 2x speed, accessible via hover overlay
- **No Downloads**: Videos play directly in the browser without downloading

## Prerequisites

- Node.js (for running the build script locally)
- Git (for version control and GitHub deployment)
- A GitHub account (for hosting on GitHub Pages)

## Project Structure

```
.
├── index.html              # Main gallery page
├── player.html             # Video player page
├── assets/
│   ├── css/
│   │   ├── style.css       # Gallery page styles
│   │   └── player.css      # Player page styles
│   └── js/
│       ├── script.js       # Gallery page logic (auto-generated)
│       └── player.js       # Player page logic
├── videos/                 # Place your .mp4 video files here
├── build.js                # Script to update video list
├── package.json            # Node.js project configuration
└── .github/
    └── workflows/
        └── update-videos.yml # GitHub Actions workflow
```

## Local Development

### Setup

1. Clone or download this repository
2. Ensure Node.js is installed on your system
3. Place your `.mp4` video files in the `videos/` folder

### Building the Video List

The video list is automatically generated. Run the build script to update it:

```bash
npm run build
# or
node build.js
```

This will scan the `videos/` folder and update `assets/js/script.js` with the current list of videos.

### Testing Locally

1. After running the build script, start a local HTTP server:

   **Using Python (recommended):**
   ```bash
   python -m http.server 8000
   ```

   **Using Node.js (alternative):**
   ```bash
   npx http-server
   ```

2. Open your browser and navigate to `http://localhost:8000`

3. Click on any video in the gallery to open it in the player

**Important**: Videos must be served over HTTP (not opened as local files) to play properly in the browser.

## Adding Videos

1. Add your `.mp4` video files to the `videos/` folder
2. Run `node build.js` to update the video list
3. Commit and push the changes to your GitHub repository

The GitHub Actions workflow will automatically update the live site when you push video changes.

## Deployment to GitHub Pages

### Initial Setup

1. Create a new repository on GitHub
2. Push this project to the repository
3. Go to repository Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Choose the `main` branch and `/ (root)` folder
6. Click "Save"

### Automatic Updates

The included GitHub Actions workflow (`update-videos.yml`) will:
- Trigger on every push to the `videos/` folder
- Run the build script to update the video list
- Commit the changes back to the repository
- Deploy the updated site to GitHub Pages

### Manual Deployment

If you prefer manual control:
1. Make your changes locally
2. Run `node build.js` to update the video list
3. Commit and push all changes
4. GitHub Pages will automatically deploy from the `main` branch

## Usage

### Gallery Page
- Browse the list of available videos
- Click any video title to open it in the player
- Videos open in a new tab for easy navigation

### Video Player Page
- **Play/Pause**: Use the play button or spacebar
- **Seek**: Click and drag on the progress bar
- **Volume**: Adjust with the volume slider
- **Full Screen**: Click the full screen button or press `F` key
- **Speed Control**: Hover over the video to reveal the speed slider (bottom-right)
- **Close**: Use browser back button or close the tab

## Customization

### Styling
- Edit `assets/css/style.css` for the gallery page
- Edit `assets/css/player.css` for the player page
- Colors, fonts, and layout can be customized

### Functionality
- Modify `build.js` to change how videos are listed (e.g., add sorting, filtering)
- Update `assets/js/player.js` to add more player features
- The speed control range can be adjusted in `player.html` and `player.js`

## Troubleshooting

### Videos Not Playing
- Ensure videos are in `.mp4` format
- Check that the site is served over HTTP (not file://)
- Verify video files are committed to the repository

### Build Script Issues
- Ensure Node.js is installed
- Check that the `videos/` folder exists and contains `.mp4` files
- Run `node build.js` from the project root

### GitHub Pages Not Updating
- Wait a few minutes after pushing changes
- Check the Actions tab in your repository for workflow status
- Ensure the workflow file is in `.github/workflows/update-videos.yml`

## Citation

If you use this software in your research or project, please cite it using the provided [CITATION.cff](CITATION.cff) file.

## Search Engine Indexing

The site includes a [robots.txt](robots.txt) file that allows all major search engines to index the content. Update the sitemap URL in robots.txt with your actual GitHub Pages URL for better SEO.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
