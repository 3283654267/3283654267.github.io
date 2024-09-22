document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮元素
    const button = document.getElementById('openModalButton');

    // 获取模态框元素
    const modal = document.getElementById('myModal');

    // 获取关闭按钮元素
    const closeBtn = document.querySelector('.close');

    // 显示模态框
    button.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // 关闭模态框
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // 点击模态框外部区域关闭模态框
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});