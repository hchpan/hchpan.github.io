function createVercount() {
    var postBody = document.getElementById('postBody');
    if (postBody){
        postBody.insertAdjacentHTML('afterend','<div id="busuanzi_container_page_pv" style="display:none;float:left;margin-top:8px;font-size:small;">Page views: <span id="busuanzi_value_page_pv"></span></div>');
    }
    var runday = document.getElementById('runday');
    runday.insertAdjacentHTML('afterend', '<span id="busuanzi_container_site_pv" style="display:none">Total site views: <span id="busuanzi_value_site_pv"></span> • </span>');
}

document.addEventListener("DOMContentLoaded", function() {
    createVercount();
    var element = document.createElement('script');
    element.src = 'https://vercount.one/js';
    document.head.appendChild(element);
    console.log("\n %c GmeekVercount Plugins https://github.com/Meekdai/Gmeek \n","padding:5px 0;background:#bc4c00;color:#fff");
});
