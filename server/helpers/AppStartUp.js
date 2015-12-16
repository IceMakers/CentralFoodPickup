Meteor.startup(function () {
    BrowserPolicy.content.allowOriginForAll("https://js.stripe.com/");
    BrowserPolicy.content.allowOriginForAll("https://checkout.stripe.com/");
});