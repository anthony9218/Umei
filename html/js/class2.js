function getvl(name) {
      var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
      if (reg.test(location.href)) return decodeURI(RegExp.$2.replace(/\+/g," "));
      return "";
  };
  // 排序
    function paixu(arr1){
        
      }
  	var name = getvl("name")
  	requestAjax("../../php/code/class2.php?name="+name,function(obj){
  			var myObj = obj[0];
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

        requestAjax("../../php/code/index.php",function(obj){
            var ori = myObj.origin.split("/")[0].replace(" ","")
            var allGoodsArr = [];
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].good_part == ori) {
                  allGoodsArr.push(obj[i])
                };
            };
            for (var i = 0; i < allGoodsArr.length-1; i++) {
              for (var j = 0; j < allGoodsArr.length-1-j; j++) {
                  if (parseInt(allGoodsArr[j].goods_vip) > parseInt(allGoodsArr[j+1].goods_vip)) {
                    var temp = allGoodsArr[j]
                    allGoodsArr[j]= allGoodsArr[j+1]
                    allGoodsArr[j+1] = temp
                  };
              };
            };
            console.log(allGoodsArr.length)
            if (allGoodsArr.length >0) {
                var right = $("<div/>")
                right.addClass("right")
                right.appendTo($("#content"))
                var h4 = $("<h4>");
                var line = $("<em>")
                var span1 = $("<span>")
                span1.text("该项目推荐服务")
                line.appendTo(h4)
                span1.appendTo(h4)
                h4.appendTo(right)
                function goods(obj1,hot){
                  for (var i = 0; i < obj1.length; i++) {
                    var li = $('<li>');
                    li.addClass('goods');
                    hot.append(li);
                    var img = $('<img src='+'../img/img_goods/'+obj1[i].goods_img+'>');
                    img.addClass('goods_img');
                    li.append(img)
                    var h3 = $('<h3>');
                    h3.addClass('goods_h3');
                    h3.text(obj1[i].goods_title);
                    li.append(h3);
                    var h4 = $('<h4>');
                    h4.addClass('goods_hospital');
                    // h4.text(obj1[i].hospital_id);
                    h4.text(obj1[i].hospital_id);
                    li.append(h4);
                      // 商品上的医院名称
                      requestAjax('../../php/code/goods_hospital.php?id='+obj1[i].hospital_id
                      ,function(h_t){
                        var h44 = $('.goods_hospital');
                        for (var i = 0; i < h44.length; i++) {
                          h44[i].innerHTML = h_t[0].hospital_title;
                        }
                      })
                    var p = $('<p>');
                    p.addClass('goods_money');
                    li.append(p);
                    var span1 = $('<span>');
                    span1.addClass('goods_s')
                    span1.text('会员价 ');
                    p.append(span1);
                    var span2 = $('<span>');
                    span2.addClass('goods_vip')
                    span2.text('￥'+obj1[i].goods_vip)
                    p.append(span2);
                    var span3 = $('<span>');
                    span3.addClass('goods_cost')
                    span3.text('￥'+obj1[i].goods_cost)
                    p.append(span3);

                    if (i == 2) {
                      break;
                    };
                  }

                }
                goods(allGoodsArr,right)
            };
            
        })
  	})