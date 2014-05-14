/*执行事件*/
$(function() {

    //打印
    $('.button_print').click(function(){
        $('.main').print({
        addGlobalStyles : true,
        mediaPrint : true
        });
    });

    //animate avatar info
    $('.avatar_pic,.tel_me').click(function(){
        $('.tip_avatar_bg').show().transition({ 
            opacity: 100,
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            rotateX: '180deg'
        },1000,'easeOutQuart',function(){
            $('body').addClass('of');
            $('.tip_avatar').show().transition({
                opacity: 100
            },500,function(){
                $('.tip_avatar_bg').hide().css({
                    opacity: 0,
                    top: '50%',
                    left: '50%',
                    width: '20px',
                    height: '20px',
                    scale: 1,
                    y:0,
                    rotateX: '0'
                });
            });
        });
    });

    $('.tip_close').click(function(){
        $(this).transition({
            rotate: '180deg'
        },300);
        $('body').removeClass('of');
        $('.tip_avatar').transition({ 
            scale: 0.8,            
        },500,'easeOutQuart').transition({ 
            y: -500,
            opacity: 0
        },function(){
            $('.tip_avatar').hide().css({
                scale: 1,
                y: 0
            });
            $('.tip_close').css({
                rotate: '0'
            });
        });
    });

    //timeline action
    $('.info_timeline ul li').mouseenter(function(){
        $(this).addClass('curr');
        $(this).parent().addClass('focus');
        var s_id = $(this).attr('id');
        $('.info_content').addClass('over')
        $('.'+s_id).addClass('curr');
    });
    $('.info_timeline ul li').mouseleave(function(){
        $(this).removeClass('curr');
        $(this).parent().removeClass('focus');
        $('.info_content').removeClass('over')
        $('.info_content .desc').removeClass('curr');
    }); 

    //banner
    $('.carousel').carousel({
        interval: false,
        wrap: true
    });

    //product action
    function open_layout(){
        $('.tip_close').click();
        $('body').addClass('of');
        $('.tip_product').transition({
            top: '0',
            background: '#fff'
        },500,'easeOutQuart',function(){
            $('.tip_area_close').show().transition({
                opacity: 1
            });
        });
    }
    function del_slide(){
        $('.carousel').removeClass('slide');
    }
    function add_slide(){
        $('.carousel').addClass('slide');
    }

    //product carousel (以0为开始)
    $('.product_1').click(function(){
        del_slide();
        $('.carousel').carousel(0);
        add_slide();
        open_layout();
    }); 

    $('.product_2').click(function(){
        del_slide();
        $('.carousel').carousel(1);
        add_slide();
        open_layout();
    });

    $('.product_3').click(function(){
        del_slide();
        $('.carousel').carousel(2);
        add_slide();
        open_layout();
    });

    $('.product_4').click(function(){
        del_slide();
        $('.carousel').carousel(3);
        add_slide();
        open_layout();
    });

    $('.product_5').click(function(){
        del_slide();
        $('.carousel').carousel(4);
        add_slide();
        open_layout();
    });

    $('.btn_more').click(function(){
        del_slide();
        $('.carousel').carousel(5);
        add_slide();
        open_layout();
    });

    $('.carousel-control,.btn_go,.btn_more').bind('click',function(){
        $('.carousel-inner').scrollTop(0);
    });


    $('.tip_area_close').click(function(){
        $(this).hide().css({
            opacity: 0
        });
        $('.tip_product').transition({
            top: '100%',
            background: 'rgba(255,255,255,0.2)'
        },500,'easeOutQuart',function(){
            $('body').removeClass('of');
        });
    });

    //Scroll
    $('.carousel-inner').scroll(function() {
        scrollPos = $(this).scrollTop();
        $('.logo').css({
            opacity: 1-(scrollPos/300),
            top: 50+(scrollPos/8)+'%'       
        });
        $('.banner_bg').css({
            opacity: 1-(scrollPos/300)
        });
        $('.tip_area_close').css({
            background: 'rgba(0,0,0,'+(scrollPos/300)+')'
        });
    });

    //close sound help
    $('.close_help').click(function(){
        soundhelpClose();
    });

});

function soundhelp(){
    $('.sound_help').show().transition({
        opacity: 1,
        bottom: '-10px'
    },500);
}
function soundhelpClose(){
    $('.sound_help').transition({
        opacity: 0,
        bottom: '-360px'
    },500,function(){
        $(this).hide();
    });
}
function byebye(){
    $('.bye').show().transition({
        opacity: 1
    },1000,function(){
        $('body').addClass('of');
    });
}

//sound
if (annyang) {

  var commands = {
    'hello': function(){ soundhelp(); },
    'over': function(){ soundhelpClose(); },
    'contact (you)': function() { $('.tel_me').click(); },
    'close': function(){ $('.tip_close,.tip_area_close').click(); },
    'print (now)': function(){ $('.button_print').click(); },
    '(your) works': function(){ $('.product_1').click(); },
    'previous': function(){ $('.carousel-control.left').click(); },
    'next': function(){ $('.carousel-control.right').click(); },
    'up': function(){ $('.carousel-control.left').click(); },
    'down': function(){ $('.carousel-control.right').click(); },

    //product
    '(number) 1': function(){ $('.product_1').click(); },
    '(number) 2': function(){ $('.product_2').click(); },
    '(number) 3': function(){ $('.product_3').click(); },
    '(number) 4': function(){ $('.product_4').click(); },
    '(number) 5': function(){ $('.product_5').click(); },
    '(number) more': function(){ $('.btn_more').click(); },

    'goodbye': function(){ byebye(); }

  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();

}