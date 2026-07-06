function downloadFile() {
    setTimeout(() => {
        console.log("Download selesai")
    }, 300);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });
}

downloadFile().then(() => {
    console.log("File berhasil didownload.");
});