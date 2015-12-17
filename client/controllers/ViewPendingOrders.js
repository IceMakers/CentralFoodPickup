Template.ViewPendingOrders.helpers({

});

Template.ViewPendingOrders.events({
    "click .btn-warning": function(event) {
        event.preventDefault();
        Modal.show('AddViewComments');
        //console.log($(event.target).attr('class'));
    },

    "click .btn-primary": function(event) {
        event.preventDefault();

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
