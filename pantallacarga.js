$(window).on("load", function() {
    $(".loader-wrapper").fadeOut("slow");
    $(document.body).css('overflow', 'auto');

    let h = document.body.scrollHeight;
    let w = document.body.scrollWidth;

    $(".button").each(function(i) {
        $(this).css('left', w * 6.70 / 100)
    });
  });