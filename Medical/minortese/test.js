const navHtml = `
<nav style="background:#4a7c59;color:#fff;padding:1rem;">
  导航已插入
</nav>`;
document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('afterbegin', navHtml);
});