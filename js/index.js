window.onload=function () {
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
		
	}
	
	
}