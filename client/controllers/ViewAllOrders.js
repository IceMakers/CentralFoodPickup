Template.ViewAllOrders.helpers({
    orders: function () {
        return Orders.find({});
    }
});

Template.ViewAllOrders.rendered = function () {
    $('.allOrders').DataTable({
        bSort: false, info: false, paging: false
    }).attr('class', '').addClass('table table-hover');
    $('.dataTables_paginate ul').addClass('pagination');
}

Template.ViewAllOrders.events({
    "click .btn-danger": function (event) {
        event.preventDefault();
        //console.log($(event.target).attr('class'));

        var orderId = $(event.target).attr('orderId');
        Orders.remove({_id: orderId}, function () {

        });
    }
});