const navHtml = `
<nav class="tcm-nav">
  <a href="../../index/index.html">首页</a>
  <a href="../med-index1.html">医药主页</a>
  <a href="../list/list.html">名录</a>
  <a href="pedia.html">知识库</a>
  <a href="../feedback/feedback_contact.html">反馈</a>
</nav>`;

/* 插入到页面 */
document.body.insertAdjacentHTML('afterbegin', navHtml);