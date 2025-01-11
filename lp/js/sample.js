
/*top戻るボタン変数*/
var pagetop=$('#page-top');

/*heddar ハンバーガーメニュー*/

/*jQuery g-header_fixed-blockをclickはクリックしたときの処理 */
$('.g-header_fixed-block').on('click',function(){
    /*hasClassは対象のHTML要素にそのクラスあるか*/
    if($(this).hasClass('active')){
        console.log("ifなか");
        /*activeクラスを削除*/
        $(this).removeClass('active');
        /*openクラス削除*/
        $('main').removeClass('open');
        $('nav').removeClass('open');
        $('.overlay').removeClass('open');
    }else{
        $(this).addClass('active');
        $('main').addClass('open');
        $('nav').addClass('open');
        $('.overlay').addClass('open');
    }
});

/*メニュー全体*/
$('.overlay').on('click',function(){
    if($(this).hasClass('open')){
        /*removeClass openクラス削除*/
        $(this).removeClass('open');
        $('.g-header_fixed-block').removeClass('active');
        $('main').removeClass('open');
        $('nav').removeClass('open');
    }
});

/*コンセプトをクリックするとメニュー閉じる*/
$('.concept-contents').on('click',function(){
        /*removeClass openクラス削除*/
        $(this).removeClass('open');
        $('.g-header_fixed-block').removeClass('active');
        $('main').removeClass('open');
        $('nav').removeClass('open');
        $('.overlay').removeClass('open');
});

/*サービスをクリックするとメニュー閉じる*/
$('.service').on('click',function(){
    /*removeClass openクラス削除*/
    $(this).removeClass('open');
    $('.g-header_fixed-block').removeClass('active');
    $('main').removeClass('open');
    $('nav').removeClass('open');
    $('.overlay').removeClass('open');
});

/*ご利用の流れをクリックするとメニュー閉じる*/
$('.usageflows').on('click',function(){
    /*removeClass openクラス削除*/
    $(this).removeClass('open');
    $('.g-header_fixed-block').removeClass('active');
    $('main').removeClass('open');
    $('nav').removeClass('open');
    $('.overlay').removeClass('open');
});


/*top戻るボタン*/
pagetop.hide();
$(window).scroll(function(){
    if($(this).scrollTop()>100){
        pagetop.fadeIn();
    }else{
        pagetop.fadeOut();
    }
});
pagetop.click(function(){
    $('body,html').animate({scrollTop:0},500);
    return false;
});


/*モーダルウィンドウ*/

    $('#openModal').click(function(){
        $('#modalArea').fadeIn();
    });
    $('#closeModal , #modalBg').click(function(){
      $('#modalArea').fadeOut();
    });
