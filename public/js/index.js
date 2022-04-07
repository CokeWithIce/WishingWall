$("body").ready(function(){
    var container=$("#container");
    var colors=['#207de0','#42baec','#e3e197','#6cde47','#ecc733'];
    var createItem=function (name, content) {
        var color=colors[parseInt(Math.random()*5)];
        $('<div class="item"><p>'+name+':</p><p>'+content+'</p><a href="#">关闭</a></div>').css({'background':color}).appendTo(container);
    };
    var list=container.attr('data-list');
    $.each(JSON.parse(list),function(i,v){
        createItem(v.name,v.content);
    })
})