			function ask(obj,callback){
				var request = new XMLHttpRequest();
				request.open("GET",obj.url,true)
				request.send();
				request.onreadystatechange = function(){
					if (request.readyState == 4 && request.status == 200) {
						var str = request.responseText;
						var obj = JSON.parse(str);
						callback(obj);
					}
				}
			}
			function getvl(name) {
		      var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
		      if (reg.test(location.href)) return decodeURI(RegExp.$2.replace(/\+/g," "));
		      return "";
	      };
			getvl('oid')
			var aa = getvl('oid');
			ask({
			  url:'../../php/code/doctor.php?id='+aa,
			},function(obj){
				console.log(obj)
				var obj1 = obj[0]
				var doctor = $(".doctor");
				var left = $("<div/>");
				left.addClass("left");
				var leftimg = $("<img>");
				leftimg[0].src = "../img/img_doctor/"+obj1.doctor_img;
				leftimg.appendTo(left);
				left.appendTo(doctor);
				var right = $("<ul/>");
				right.addClass("right");
				right.appendTo(doctor);
				var li1 = $("<li/>");
				li1.addClass("name");
				var name = $("<span>");
				name.text(obj1.doctor_name);
				var span = $("<span>");
				span.addClass("Umei");
				var Umei = $("<img>");
				Umei[0].src = "../img/img_doctor/tag-icon.png";
				Umei.appendTo(span);
				name.appendTo(li1);
				span.appendTo(li1);
				li1.appendTo(right);
				var li2 = $("<li/>");
				li2.text("性别："+ obj1.doctor_sex);
				li2.appendTo(right)
				var li3 = $("<li/>");
				li3.text("职务："+ obj1.doctor_job);
				li3.appendTo(right)
				var li4 = $("<li/>");
				li4.text("学历："+ obj1.doctor_degree);
				li4.appendTo(right)
				var li5 = $("<li/>");
				li5.text("擅长项目："+ obj1.doctor_skilled);
				li5.appendTo(right)
				var navLeft = $(".navleft")
				var navimg = $("<img>");
				navimg[0].src = "../img/img_doctor/"+obj1.doctor_img;
				navimg.css({
					height:"50px",width:"50px",borderRadius:"50%",float:"left",marginRight:"10px"
				})
				navimg.appendTo(navLeft);
				var navname = $("<div>")
				navname.css({
					float:"left",color: "#999"
				})
				var navspan1 = $("<div>")
				navspan1.text(obj1.doctor_name)
				navspan1.css({
					fontS7ize: "16px",fontWeight: "600",color:" #333"
				})
				var navspan2 = $("<div>")
				navspan2.text(obj1.doctor_job)
				navspan1.appendTo(navname)
				navspan2.appendTo(navname)
				navname.appendTo(navLeft)
				var content1 = $("#content1")
				var p1 = $("<p/>")
				p1.text(obj1.doctor_skilled)
				p1.appendTo(content1)
				var content2 = $("#content2")
				var p2 = $("<p/>")
				p2.text(obj1.doctor_introduce)
				p2.appendTo(content2)
				var jingli = $("#jingli")
				jingli[0].innerHTML = obj1.doctor_undergo;

				function getPoint(obj) {
				    var l = obj.offsetTop;
				    while (obj = obj.offsetParent) {
				        l += obj.offsetTop;
				    }
				   return l
				}
				var doctorNav = document.querySelector(".doctorNav")
				var question1 = document.querySelector(".question1")
				var navTop = getPoint(doctorNav);
				function judgeP(){
					01014
					if (top >= navTop) {
						doctorNav.className = "doctorNavF"
						question1.style.transform = "scale(1)"
					}else{
						doctorNav.className = "doctorNav"
						question1.style.transform = "scale(0)"
					}
				}
				judgeP()
				window.onscroll = function(){
					judgeP()
				}




			})
