        var down = document.getElementsByClassName('down')[0];
		var down_1 = document.getElementsByClassName('down_1')[0];
		down.onmouseover = function(){
			down_1.style.display = 'block';
		}
		down.onmouseout = function(){
			down_1.style.display = 'none';
		}
		down_1.onmouseover = function(){
			down_1.style.display = 'block';
		}
		down_1.onmouseout = function(){
			down_1.style.display = 'none';
		}

		var home_all = document.getElementsByClassName('home_all')[0];
		var jumpWrap = document.createElement("div");
		jumpWrap.className = "jumpWrap";
		home_all.appendChild(jumpWrap)
    // var jumbWrap = document.getElementsByClassName('.jumbWrap')
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
			};
		};
    requestAjax("../../php/code/class1.php",function(obj){
			var ul = document.createElement("ul");
			ul.className = "jumpBox";
			ul.style.background = "rgba(0,0,0,.7)";
			jumpWrap.appendChild(ul);
			for (var i = 0; i < obj.length; i++) {
				var li = document.createElement("li");
				li.className = "jumpList"
				li.second = JSON.parse(obj[i].secondClass);
				var img = document.createElement("img");
				img.src = "../img/img_class/" + obj[i].class_img;
				li.appendChild(img)
				li.innerHTML += obj[i].firstClass;
				var span = document.createElement("span");
				span.innerHTML = "＞"
				li.appendChild(span)
				ul.appendChild(li)
			};
			var jumpList = document.querySelectorAll(".jumpList")
			var jumpBox = document.querySelector(".jumpBox")
			var secondjump = document.createElement("ul")
			secondjump.className = "secondjump";
			jumpBox.appendChild(secondjump)
			for (var i = 0; i < jumpList.length; i++) {
				var a = jumpList[i]
				a.index = i;
				a.onmouseover = function(){
					secondjump.innerHTML = ""
					jumpList[this.index].style.color = "#FF6E7D";
					jumpList[this.index].style.background = "#0f0f0f";
					for (var j = 0; j < this.second.length; j++) {
						var li = document.createElement("li")
						li.className = "secondjumpList";
						li.innerHTML = this.second[j];
						secondjump.appendChild(li)
						secondjump.style.display = "block"
					};
				}
				a.onmouseout = function(){
					secondjump.style.display = "none";
					jumpList[this.index].style.color = "#fff";
					jumpList[this.index].style.background = "transparent";
					var b = jumpList[this.index]
					secondjump.onmouseover = function(){
						secondjump.style.display = "block"
						b.style.color = "#FF6E7D";
						b.style.background = "#0f0f0f";
					}
					secondjump.onmouseout = function(){
						secondjump.style.display = "none"
						b.style.color = "#fff";
						b.style.background = "transparent";
					}
				}
			};

		})
    home_all.onmouseover = function(){
      jumpWrap.style.display = "block"
    }
    home_all.onmouseout = function(){
      jumpWrap.style.display = "none"
    }
