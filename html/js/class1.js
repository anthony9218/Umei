var ul = $("#box");
		function requestAjax(url,callback){
			var request = new XMLHttpRequest();
			request.open("GET",url,true);
			request.send();
			request.onreadystatechange = function(){
				if (request.readyState == 4 && request.status == 200) {
					var str = request.responseText;
					var obj = JSON.parse(str)
					if (callback) {
						callback(obj)
					};
				};
			}
		}
requestAjax("../../php/code/class1.php",function(obj){
		for (var i = 0; i < obj.length; i++) {
			var two = JSON.parse(obj[i].secondClass)
			var object = JSON.parse(obj[i].names)
			var li = $("<li/>");
			li.css({
				overflow:"hidden",
			});
			li.appendTo(ul);
			var oneClass = $("<div/>");
			oneClass.addClass("oneClass");
			var img = $("<img/>");
			img[0].src = "../img/img_class/" + obj[i].class_img;
			img.appendTo(oneClass);
			var span1 = $("<span/>");
			span1.text(obj[i].firstClass);
			span1.appendTo(oneClass);
			oneClass.appendTo(li);
			var div2 = $("<div/>");
			div2.css({
				float:"left",width:"201px"
			})
			for (var j = 0; j < two.length; j++) {
				var twoClass = $("<div/>");
				twoClass.addClass("twoClass");
				twoClass.css({
					height:Math.ceil(object[j].length/5)*41+"px",
					lineHeight:Math.ceil(object[j].length/5)*41+"px"
				})
				var span2 = $("<span/>");
				span2.text(two[j]);
				span2.appendTo(twoClass);
				twoClass.appendTo(div2);
			};
			div2.appendTo(li);
			oneClass.css({
				height:div2.css("height"),
				lineHeight:div2.css("height")
			})
			var div3 = $("<div/>");
			div3.css({
				float:"left",width:"827px"
			})
			div3.appendTo(li)
			for (var j = 0; j < object.length; j++) {
				var arr = object[j]
				var namesbox = $("<div>")
				namesbox.addClass("names")
				namesbox.appendTo(div3)
				for (var k = 0; k < arr.length; k++) {
					var a = $("<a>")
					a.addClass("a")
					a.text(arr[k])
					a.appendTo(namesbox)
				};
			};
		};

		$(".a").on("click",function(){
			var value = $(this).text();
			window.open("class2.html?name="+value);
		});



});