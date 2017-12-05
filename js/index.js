$(function() {
    (function(w) {
        w.index = {
            init: function() {
                $(".search-down-item").click(function() {
                    $(".search-down").toggleClass("show");
                    var isActive = $(this).hasClass("active");
                    if (isActive) {
                        return;
                    } else {
                        $(".search-down-item").removeClass("active");
                        $(this).addClass("active");
                        $("#search-down").prepend($(this))
                    }
                })
            }
        }
    }(window))
    index.init();
})