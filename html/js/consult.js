// 咨询点击后页面覆盖层部分
function ZI(){
  var consult = $('.question')
  consult.on('click',function(){
      var body = $('body');
      var html = $('html');
      var Div = $('<div>');
      Div.addClass('Div')
      body.css({
        width:'100%',
        height:'100%',
        position:'relative',
      })
      Div.css({
        width:'100%',
        height:'100%',
        position:'fixed',
        background:'rgba(0,0,0,0.4)',
        top:'0',
        zIndex:'9999'
      })
      $(body[0]).append(Div)
      var zhong = $('<div>')
      zhong.css({
        width:'675px',
        height:'275px',
        position:'absolute',
        left:'32%',
        top:'35%',
        background:'#fff',
        borderRadius:'8px',
      })
      Div.append(zhong)
      var px = $('<p>');
      var span = $('<span>')
      span.text('×');
      px.append(span);
      span.addClass('px')
      var x = $('.px');
      px.css({
        textAlign:'right',
        height:'46px',
        borderBottom:'1px solid #ccc'
      })
      zhong.append(px)
      span.on('click',function(){
        Div.remove();
      })
      var p2 = $('<p>')
      p2.text('为保证您求美过程的沟通安全，畅通，请选择使用U聊院方客服联系');
      p2.css({
        width:'675px',
        height:'25px',
        textAlign:'center',
        fontSize: '18px',
        color: '#666',
        marginTop:'35px',
        fontWeight:'900'
      })
      zhong.append(p2)
      var a1 = $('<a>');
      a1.css({
        display:'inline-block',
        width:'212px',
        height:'57px',
        background:'#ff5566',
        textAlign:'center',
        color:'#fff',
        fontWeight:'900',
        lineHeight:'57px',
        fontSize:'18px',
        margin:'25px 25px 25px 100px',
        borderRadius:'6px',
        cursor:'pointer'
      })
      a1.text('下载U聊');
      zhong.append(a1);
      var a2 = $('<a>');
      a2.css({
        display:'inline-block',
        width:'212px',
        height:'57px',
        background:'#ff5566',
        textAlign:'center',
        color:'#fff',
        fontWeight:'900',
        lineHeight:'57px',
        fontSize:'18px',
        margin:'25px',
        borderRadius:'6px',
        cursor:'pointer'
      })
      a2.text('我已下载U聊咨询');
      zhong.append(a2);
      a1.on('mouseover',function(){
        a1.css({
          opacity:'0.9',
        })
      })
      a1.on('mouseout',function(){
        a1.css({
          opacity:'1',
        })
      })
      a2.on('mouseover',function(){
        a2.css({
          opacity:'0.9',
        })
      })
      a2.on('mouseout',function(){
        a2.css({
          opacity:'1',
        })
      })
      var p3 = $('<p>');
      p3.text('建议：安装成功后重启浏览器（有糖官方出品）')
      p3.css({
        width:'675px',
        height:'25px',
        textAlign:'center',
        fontSize: '14px',
        color: '#999',
      })
      zhong.append(p3);
      var a3 = $('<a>')
      a3.text('继续使用网页咨询>>');
      zhong.append(a3);
      a3.css({
        display:'block',
        float:'right',
        color: "#44a0fe",
        fontSize: '14px',
        paddingRight:'20px',
        cursor:'pointer'
      })

  })

}
ZI();
