Template.ViewPendingOrders.helpers({

});

Template.ViewPendingOrders.events({
    "click .btn-warning": function(event) {
        event.preventDefault();
        Modal.show('AddViewComments');
        //console.log($(event.target).attr('class'));
    },

    "click .btn-danger": function(event) {
        event.preventDefault();
        Modal.show('AddViewComments');
        //console.log($(event.target).attr('class'));
    }
});
