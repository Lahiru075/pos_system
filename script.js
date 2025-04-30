// hide other section

$("#customer-section").css("display", "none");
$("#item-section").css("display", "none");
$("#order-section").css("display", "none");

$("#home_nav").on('click', function () {
    $("#home-section").css("display", "block");
    $("#customer-section").css("display", "none");
    $("#item-section").css("display", "none");
    $("#order-section").css("display", "none");
})

$("#customer_nav").on('click', function () {
    $("#customer-section").css("display", "block");
    $("#home-section").css("display", "none");
    $("#item-section").css("display", "none");
    $("#order-section").css("display", "none");
})

$("#item_nav").on('click', function () {
    $("#item-section").css("display", "block");
    $("#customer-section").css("display", "none");
    $("#home-section").css("display", "none");
    $("#order-section").css("display", "none");
})

$("#order_nav").on('click', function () {
    $("#order-section").css("display", "block");
    $("#customer-section").css("display", "none");
    $("#home-section").css("display", "none");
    $("#item-section").css("display", "none");
})
