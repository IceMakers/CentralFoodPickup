Meteor.methods({
    'chargeCard': function(stripeToken) {
        var Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);

        Stripe.charges.create({
            amount: 6000,
            currency: 'usd',
            source: stripeToken
        }, function(err, charge) {
            console.log(err, charge);
        });
    }
});