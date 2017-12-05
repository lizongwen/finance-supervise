$(function() {
    (function(w) {
        w.index = {
            init: function() {
                $(".search-down").click(function() {
                    $(this).toggleClass("show");
                })
                $(".search-down-item").click(function() {
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