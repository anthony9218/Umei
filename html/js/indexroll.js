        function Home(){
			var home_roll = $('.home_roll');
			var span1 = $('.span1');
			var roll_one = $('.roll_one');
			$(span1[0]).css({
				background:'#ff5776',
				width:'30px',
				borderRadius:'10px'
			})
			for (var i = 0; i < span1.length; i++) {
			    $(span1[i]).attr('index',i)
                	$(span1[i]).on('click',function(){
                		clearInterval(timer)
                		for (var j = 0; j < span1.length; j++) {
	                    	$(span1[j]).css({
	                    		background:'#fff',
	                    		width:'12px',
							borderRadius:'50%'
	                    	})
                    }
                		$(this).css({
                    		background:'#ff5776',
						width:'30px',
						borderRadius:'10px'
	                 })
                		var num = $(this).attr('index');
                		home_roll.animate({
                			left:num*(-1200)+'px',
                		},300,function(){
                        	jishi();
                		})
                	})
            }
			var timer = null;
			function jishi(){
				var off = home_roll.position().left;
				timer = setInterval(function(){
					off -= roll_one[0].offsetWidth;
					home_roll.animate({
						left:off
					},600,function(){
						if (off <= -2*roll_one[0].offsetWidth) {
							home_roll.css('left',0);
							off = 0;
						}
	                    for (var i = 0; i < span1.length; i++) {
		                    	$(span1[i]).css({
		                    		background:'#fff',
		                    		width:'12px',
								borderRadius:'50%'
		                    	})
	                    }
						if (off == 0 ) {
							$(span1[0]).css({
								background:'#ff5776',
								width:'30px',
								borderRadius:'10px'
							})
						}
						if (off == -roll_one[0].offsetWidth) {
							$(span1[1]).css({
								background:'#ff5776',
								width:'30px',
								borderRadius:'10px'
							})
						}
					})
				},4000)
			}
			jishi();
       }
	   Home();
