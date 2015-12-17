
Template.ConfirmationScreen.helpers({
    orderId: function() {
        var pickupdata = Session.get('pickupdata');
        return pickupdata.orderId;
    }
});