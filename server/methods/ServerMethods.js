Meteor.methods({
    'chargeCard': function(stripeToken) {
        var Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);

        Stripe.charges.create({
            amount: 6000,
            currency: 'cad',
            source: stripeToken
        }, function(err, charge) {
            console.log(err, charge);
        });
    },
    sendEmail: function (to, from, subject, text) {
        check([to, from, subject, text], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Email.send({
            to: to,
            from: from,
            subject: subject,
            text: text
        });
    }
});