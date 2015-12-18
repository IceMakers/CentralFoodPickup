Template.ViewPendingOrders.helpers({
    orders: function () {
        var start = moment().startOf('day')
        var end = moment().endOf('day');

        return Orders.find({
            status: 'pending', orderDate: {
                $gte: start.toDate(),
                $lte: end.toDate()
            }
        }, {sort: {orderDate: -1}});
    }
});

Template.ViewPendingOrders.events({
    "click .btn-warning": function (event) {
        event.preventDefault();
        var orderId = $(event.target).attr('orderId');
        Session.set('modaLData', orderId);
        Modal.show('AddViewComments', {orderId: orderId});
        //console.log($(event.target).attr('class'));
    },

    "click .btn-danger": function (event) {
        event.preventDefault();
        //console.log($(event.target).attr('class'));
        var orderId = $(event.target).attr('orderId');
        Orders.remove({_id: orderId}, function () {});
        var orderDetails = Orders.findOne(orderId);
        var fromEmail = 'kitchenstaff@central1.com';
        //console.log('the email to send it to is ' + orderDetails['email']);
        var subject = 'Order - ' + orderDetails['orderId'] + ': Your food has been cancelled!';
        var text = "Hi,\n\n Your food order has been cancelled. Please contact the kitchen staff for more details.\n\n Regards, \nCentral Food Pickup";
        Meteor.call('sendEmail', orderDetails['email'], fromEmail, subject, text);
    },


    "click .btn-primary": function (event) {
        event.preventDefault();
        var orderId = $(event.target).attr('orderId');
        //console.log('Orderid in ViewPendingOrder:' + orderId);

        var orderDetails = Orders.findOne(orderId);
        //console.log(orderDetails['email']);
        var fromEmail = 'kitchenstaff@central1.com';
        //console.log('the email to send it to is ' + orderDetails['email']);
        var subject = 'Order - ' + orderDetails['orderId'] + ': Your food is ready for pickup!';
        var text = "Hi,\n\n Your food is ready for the pick up! \n\n Regards, \nCentral Food Pickup";

        Meteor.call('sendEmail', orderDetails['email'], fromEmail, subject, text);
        Orders.update(orderId, {$set: {status: 'ready'}}, function () {
        });
        Router.go('/pendingOrders');
    }
});

Template.ViewPendingOrders.rendered = function () {
    $('#pendingOrders').DataTable({
        bSort: false, info: false, paging: false
    }).attr('class', '').addClass('table table-hover');
    $('.dataTables_paginate ul').addClass('pagination');
}


