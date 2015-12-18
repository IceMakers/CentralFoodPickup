Template.AddViewComments.helpers({
    comments: function() {
        console.log(Session.get('modaLData'));
        var order = Orders.find({_id: Session.get('modaLData')});
        console.log(order.comments);
    }
});