Template.Orders.rendered = function () {
    $('#myorders').DataTable().attr('class', '').addClass('table table-hover');
    $('.dataTables_paginate ul').addClass('pagination');
}

Template.Orders.helpers({
    orders: function(){
        return Orders.find({user: Meteor.userId()}, {sort: {orderDate: -1}});
    }
});