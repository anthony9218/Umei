function getvl(name) {
      var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
      if (reg.test(location.href)) return decodeURI(RegExp.$2.replace(/\+/g," "));
      return "";
  };
  	var name = getvl("name")
  	console.log(name)
  	requestAjax("../../php/code/class2.php?name="+name,function(obj){
  			var myObj = obj[0];
  			console.log(myObj);
  			$(".pageSrc1").text(myObj.origin);
  			$(".name").text(myObj.name);
  			var change = $(".change");
  			$(change[0]).text(myObj.effect);
  			$(change[1]).text(myObj.price);
  			$(change[2]).text(myObj.means);
  			$(change[3]).text(myObj.time);
  			$(change[4]).text(myObj.rest);
  			$(change[5]).text(myObj.people);
  			$("#text")[0].innerHTML = myObj.indroduce;
  	})