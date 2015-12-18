
Template.ConfirmationScreen.helpers({
    orderId: function() {
        var pickupdata = Session.get('pickupdata');
        console.log(Orders.find({_id: "53m4Wf4q6WwreguXa"}));
        return pickupdata.orderId;
    }
});