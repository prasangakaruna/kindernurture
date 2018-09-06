

$(document).ready(function(){

  $('#owl-demo').owlCarousel({
              loop:true,
              items : 4,
              singleItem:false,
              navigation:false,
              autoPlay: true,
              autoPlayTimeout:200,
              autoPlaySpeed:1000,
              pagination:false,
              lazyLoad: true,
              navText: false,
              navigationText: ['<i class=\'fa fa-angle-left\'></i>','<i class=\'fa fa-angle-right\'></i>'],
              responsive:{
                  320:{
                      items:1,
                      nav:true
                  },
                  600:{
                      items:2,
                      nav:false
                  },
                  1000:{
                      items:4,
                      nav:true,
                      loop:false
                  }
              }
  });
  $('.owl-carousel').owlCarousel({
              autoPlay: true,
              loop:true,
              singleItem:true,
              items : 1,
              autoplay: true,
              autoplayTimeout: 5000,
              autoplayHoverPause: true,
              nav: false,
              navigation:false,
              autoPlayTimeout:200,
              pagination:true,
              navText: true,
              navText: [
              '<i class=\'fas fa-arrow-circle-left\'></i>',
              '<i class=\'fas fa-arrow-circle-right\'></i>'
              ],
              responsive:{
                  320:{
                      items:1,
                      nav:true,
                      navText: false
                  },
                  600:{
                      items:1,
                      nav:false,
                      navText: false
                  },
                  1000:{
                      items:1,
                      nav:true,
                      loop:false
                  }
              }
  });

  $('.menu-selection').on('click',function (){
        $(this).next().toggle();
  });
  AOS.init();
});
