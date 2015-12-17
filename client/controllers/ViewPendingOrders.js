Template.ViewPendingOrders.helpers({
    orders: function() {
            //console.log(Items.find({}));
            return Orders.find({status : 'pending'});
        }
});

Template.ViewPendingOrders.events({
    "click .btn-warning": function(event) {
        event.preventDefault();
        Modal.show('AddViewComments');
        //console.log($(event.target).attr('class'));
    },

    "click .btn-primary": function(event) {
        event.preventDefault();
        var orderId = $(event.target).attr('orderId');
        console.log('Orderid in ViewPendingOrder:'+orderId);
        Orders.update(orderId, {status: 'ready'});
        var orderDetails = Orders.find({_id:orderId });
        var fromEmail = 'mkaur@central1.com';
        var subject = 'OrderId -'+orderId+': Your food is ready for pickup!';
        var text = "Hi,<br> Your food is ready for the pick up! <br> Regards, Central Food Pickup";
        Meteor.call('sendEmail',orderDetails.email,fromEmail,subject,text);

        //console.log($(event.target).attr('class'));
        //update the order and set the appropriate status
        //send an email to the user saying the order is ready for pickup
    }
});

Template.ViewPendingOrders.rendered=function() {
    this.$('.btn-danger').confirmation({
        placement: 'bottom',
        onConfirm: function(){
            //get the id and call the appropriate delete method
            console.log("delete confirmed");
        }});


    $('#pendingOrders').DataTable({
        "bSort" : false
    }).attr('class', '').addClass('table table-hover');
    $('.dataTables_paginate ul').addClass('pagination');

}


