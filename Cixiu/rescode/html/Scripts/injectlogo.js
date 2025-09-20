/**
 * injectLogo.js
 * 在页面顶部插入可复用的 logo
 * 配置项：image/url/width/alt
 */
(function injectLogo(opt) {
    opt = opt || {};
    var src   = opt.src   || '../images/feiyicixiu.png';   // 图片路径
    var url   = opt.url   || 'index.html';        // 点击跳转（空字符串=无链接）
    var width = opt.width || 200;                 // 默认宽度 px
    var alt   = opt.alt   || 'FeiyiChina';

    /* 1. 创建 DOM */
    var wrapper = document.createElement('div');
    wrapper.className = 'js-logo-wrapper';
    wrapper.style.cssText = 'text-align:center;padding:15px 0;background:#fff;';

    var img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = 'width:' + width + 'px;height:auto;display:inline-block;';

    /* 2. 可选包裹链接 */
    var finalElem = url
        ? (function() {
            var a = document.createElement('a');
            a.href = url;
            a.appendChild(img);
            return a;
        })()
        : img;

    wrapper.appendChild(finalElem);

    /* 3. 插入到页面首个大块之前（可改） */
    var anchor = document.querySelector('.main,header,.container'); // 优先选择器
    if (anchor) {
        anchor.parentNode.insertBefore(wrapper, anchor);
    } else {
        // 保险：插到 body 最前
        document.body.insertBefore(wrapper, document.body.firstChild);
    }

    /* 4. 对外暴露刷新接口，提高复用率 */
    window.updateLogo = function(newOpt) {
        if (newOpt.src)  img.src = newOpt.src;
        if (newOpt.url && url) a.href = newOpt.url;
        if (newOpt.width) img.style.width = newOpt.width + 'px';
    };
})