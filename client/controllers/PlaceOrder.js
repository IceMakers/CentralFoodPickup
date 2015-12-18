Template.PlaceOrder.events({
    'click a.btn': function (e) {
        e.preventDefault();
        var pickuptime = $('#pickUpId').val();
        var comments = $('#commentsId').val();
        var orderId =  Math.floor(Math.pow(10, 5) + Math.random() * 9 * Math.pow(10, 5));
        console.log(orderId);
        Session.set('pickupdata', {pickuptime: pickuptime, comments: comments, orderId: orderId, user: Meteor.user()});
        var message = 'Thank you for your order. Your order number is ' + orderId;
        Meteor.call('sendEmail', Meteor.user().emails[0].address, 'kitchenstaff@central1.com', 'Thank you for your order', message);

        Router.go('/confirmAndPay');

    }
});