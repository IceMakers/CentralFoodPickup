Template.ConfirmAndPay.events({
    'click button': function (e) {
        e.preventDefault();

        StripeCheckout.open({
            key: 'pk_test_NC9qpZjq7Uoss14zHNMVXnUR',
            amount: 6000, // this is equivalent to $50
            name: 'Central1 Food Pickup',
            description: 'On how to use Stripe ($60.00)',
            panelLabel: 'Pay Now',
            token: function (res) {
                stripeToken = res.id;
                console.info(res);
                Meteor.call('chargeCard', stripeToken);
            }
        });
    }
});