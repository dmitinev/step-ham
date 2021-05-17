$(() => {
    const serviceTabs = $(".service_item");
    const serviceGreenDecorationArrow = $(".green_arrow_decoration");
    const amazingWorksTabs = $(".amazing_works_menu_item");
    const tabsText = $(".service_description");
    const loadMoreImagesBtn = $(".load_more_button");
    const allGalleryItems = $(".amazing_works_gallery_item");

    serviceTabs.on("click", function () {
        addRemoveClass(serviceTabs, "active_service", "remove");
        serviceGreenDecorationArrow.remove();
        addRemoveClass($(this), "active_service");
        $(this).append(serviceGreenDecorationArrow);
        tabsText.each((index, element) => {
            if ($(element).data("textId") === $(this).data("textId")) {
                addRemoveClass($(element), "hidden", "remove");
            } else {
                addRemoveClass($(element), "hidden");
            }
        });
    });

    amazingWorksTabs.on("click", function () {
        addRemoveClass(amazingWorksTabs, "amazing_works_active", "remove");
        addRemoveClass($(this), "amazing_works_active");
        allGalleryItems.each((index, element) => {
            if ($(element).data("textCategory").includes($(this).data("textCategory"))) {
                addRemoveClass($(element), "hidden", "remove");
            } else {
                addRemoveClass($(element), "hidden");
            }
        });
    });

    loadMoreImagesBtn.one("click", function (evt) {
        allGalleryItems.each((index, element) => {
            if ($(element).data("visible") === false) {
                $(element).attr("data-visible", "true");
            }
        });
        evt.target.remove();
    });

    $(".workers_list").slick({
        centerMode: false,
        infinite: true,
        focusOnSelect: true,
        nextArrow: $(".slide_forward"),
        prevArrow: $(".slide_backward"),
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        asNavFor: ".slider_thumbnail_container"
    });

    $(".slider_thumbnail_container").slick({
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".workers_list",
        infinite: true,
        arrows: false,
        draggable: false,
        fade: true,
    })

    function addRemoveClass(elemToOperate, classToOperate, action = "add") {
        if (action === "add") {
            elemToOperate.addClass(classToOperate);
        }
        if (action === "remove") {
            elemToOperate.removeClass(classToOperate);
        }
    }
});
