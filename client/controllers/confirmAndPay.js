Template.ConfirmAndPay.rendered = function () {

}

Template.ConfirmAndPay.helpers({
    OrderedItems: function() {
        //console.log(Items.find({}));
        console.log(Session.get('orderedItems'));
        return Session.get('orderedItems');
    },
    tax: function(){
        var total = 0;
        Session.get('orderedItems').forEach(function (item){
                total += Number(item.price);
            });
        console.log(total);
        return '$' + (total/100*0.13).toFixed(2);
    },
    total: function() {
        var total = 0;
        Session.get('orderedItems').forEach(function (item){
            total += Number(item.price);
        });
        console.log(total);
        var totalPrice = Number(((total*0.13)+total)/100).toFixed(2);
        Session.set('totalPricePaid',(totalPrice*100));
        return '$' + totalPrice;
    }
});

Template.ConfirmAndPay.events({
    'click button': function (e) {
        e.preventDefault();
        StripeCheckout.open({
            key: 'pk_test_NC9qpZjq7Uoss14zHNMVXnUR',
            amount: Number(Session.get('totalPricePaid')),
            name: 'Central1 Food Pickup',
            description: 'Payment for food',
            panelLabel: 'Pay Now',
            token: function (res) {
                stripeToken = res.id;
                console.info(res);
                Meteor.call('chargeCard', stripeToken, Number(Session.get('totalPricePaid')),Session.get('orderedItems'),Session.get('pickupdata'), function(err, data) {
                    if(!err) {
                        Router.go('/confirmationScreen');
                    }
                });
            }
        });
    }

});