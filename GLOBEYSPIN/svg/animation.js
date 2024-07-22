const svgFiles = ['frame1.svg', 'frame2.svg', 'frame3.svg', 'frame4.svg'];
const svgContainer = document.getElementById('svgContainer');

let currentFrame = 0;

function loadSVG(file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            svgContainer.innerHTML = data;
            if (callback) callback();
        })
        .catch(error => console.error('Error loading SVG:', error));
}

function animateSVG() {
    loadSVG(svgFiles[currentFrame], () => {
        currentFrame = (currentFrame + 1) % svgFiles.length;
        setTimeout(animateSVG, 1000); // Change every 1 second
    });
}

// Start the animation
animateSVG();
