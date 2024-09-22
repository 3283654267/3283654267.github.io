function exportPageAsPNG() {
    console.log("开始转换页面为PNG...");

    html2canvas(document.body, {
        onrendered: function(canvas) {
            console.log("Canvas渲染完成，准备保存为PNG...");
            const imgData = canvas.toDataURL('image/png');
            downloadPNG(imgData);
        },
        logging: true // 开启日志记录，查看html2canvas的详细日志
    });
}

function downloadPNG(dataUrl) {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'resume.png';
    link.click();
}