if (document.getElementById("tabs")) {

    $("#tabs .nav-tabs a").click(function (event) {
        // event.preventDefault();
        var position = $(this).parent().position();
        var width = $(this).parent().width();
        $("#tabs .slider").css({ "left": + position.left, "width": width });
        $("#tabs .nav-tabs a").removeClass("active")
        // event.currentTarget.addClass("active")
        $(event.target).addClass("active");

    });
    var actWidth = $("#tabs .nav-tabs").find(".active").parent("li").width();
    var actPosition = $("#tabs .nav-tabs .active").position();
    $("#tabs .slider").css({ "left": + actPosition.left, "width": actWidth });


    const tabs_nav = document.querySelectorAll("#tabs .nav-tabs a")
    const tabs_pane = document.querySelectorAll("#tabs .tab-pane")



    tabs_nav.forEach((el) => {

        let tab_id = "road";
        el.addEventListener("click", (e) => {
            e.preventDefault()
            tab_id = e.target.getAttribute("aria-controls");
            tabs_pane.forEach(el => {
                el.classList.remove("show")
                el.classList.remove("active")
                if (tab_id == el.id) {
                    console.log("working");
                    el.classList.add("show")
                    el.classList.add("active")
                }
            })
        })
    })

}
