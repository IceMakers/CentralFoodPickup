Meteor.startup(function () {

    // code to run on server at startup
    var stripeKey = Meteor.settings.public.stripe.testPublishableKey;
    console.log("the stripe key is " + stripeKey);
    Stripe.setPublishableKey(stripeKey);

    var handler = StripeCheckout.configure({
        key: stripeKey,
        token: function (token) {
        }
    });
});