function goods(obj1,hot){
  // console.log(obj1);
  for (var i = 0; i < obj1.length; i++) {
    var li = $('<li>');
    li.addClass('goods');
    li.attr('index',i)
    li.css({
      border:'1px solid #f2f2f2',
      width:'281px',
      height:'356px'
    })
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
      ask({
        url:'../../php/code/goods_hospital.php?id='+obj1[i].hospital_id,
      },function(h_t){
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
  }
}
