window.onload=function () {
	// 实现按需加载
/*  1、获取元素节点
    2、添加滚动轴事件
    3、处理scrollTop在各个浏览器中的兼容
    4、遍历每个floor
    5、获取到每个floor下的img
    6、遍历img
    7、获取img身上的自定义属性
    8、替换img src 属性值
*/
	var floors=document.getElementsByClassName("floor");
	window.onscroll=function () {
		var scrollTop=window.scrollY || document.body.scrollTop || document.documentElement.scrollTop||window
		.pageYOffset;
		
		for (var i = 0; i < floors.length; i++) {
			var imgs=floors[i].getElementsByTagName("img");
			if (scrollTop > (floors[i].offsetTop-400)){
				
				for (var j = 0; j < imgs.length; j++) {
					var jiazai=imgs[j].getAttribute("attr");
					imgs[j].src=jiazai;
				}

			}	
		}
		
	};

	//实现侧导航的选项卡效果
/*    1、初始化css  display:none;
    2、获取元素节点
    3、遍历title 添加onmouseover事件
    4、遍历所有选项卡
    5、給当前标签下的选项卡添加 active类 active{display:block}*/

    let cennavs=document.getElementsByClassName('cenav')[0].getElementsByTagName('li');

    // console.log(cennavs[0]);
    for (let i=0;i<cennavs.length;i++) {
        let items = cennavs[i].getElementsByClassName('cenav_item');
        cennavs[i].onmouseover = function () {
            // alert(i);
            // console.log(items[0]);
            items[0].classList.add('active');
        };
        cennavs[i].onmouseout = function (){
                items[0].classList.remove('active');
        }
    }
};