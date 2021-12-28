$('.partner__item').slick({
    slidesToShow: 5,
    autoplay:true,
    responsive:[
        {
            breakpoint: 992,
            settings:{
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 4}
        },
        {
            breakpoint:767,

            settings:{
                arrows: false,
                centerPadding: '40px',

                slidesToShow:3}
        },
        {
            breakpoint: 580,
            settings: {
                arrows: false,
                centerPadding: '20px',
                slidesToShow: 2

            },

        }]
})

