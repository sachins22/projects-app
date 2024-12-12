// Paths to your APK files
const apkFiles = {
    app1: './apks/Book.apk',
    app2: './apks/chatwith.apk',
    app3: './apks/e-commers-app.apk',
    app4: './apks/game.apk',
    app5: './apks/music-app.apk',
    app6: './apks/myQuote-app.apk',
    app7: './apks/tic-tac-toe.apk',
    app8: './apks/Wallpaper-App.apk',
};

// Add event listeners for buttons
document.getElementById('app1Btn').addEventListener('click', () => {
    downloadAPK('./apks/Book.apk', 'Book-App.apk');
});

document.getElementById('app2Btn').addEventListener('click', () => {
    downloadAPK(apkFiles.app2, 'Chat-App.apk');
});

document.getElementById('app3Btn').addEventListener('click', () => {
    downloadAPK(apkFiles.app3, 'E-commerce-App.apk');
});

document.getElementById('app4Btn').addEventListener('click', () => {
    downloadAPK(apkFiles.app4, 'Ball-Game.apk');
});

document.getElementById('app5Btn').addEventListener('click', () => {
    downloadAPK(apkFiles.app5, 'Music-App.apk');
});

document.getElementById('app6Btn').addEventListener('click', () => {
    downloadAPK(apkFiles.app6, 'MyQuote-App.apk');
});

document.getElementById('app7Btn').addEventListener('click', () => {
    downloadAPK(apkFiles.app7, 'Tic-Tac-Toe-Game.apk');
});

document.getElementById('app8Btn').addEventListener('click', () => {
    downloadAPK(apkFiles.app8, 'Wallpaper-App.apk');
});

// Function to handle APK download
function downloadAPK(url, fileName) {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
}
