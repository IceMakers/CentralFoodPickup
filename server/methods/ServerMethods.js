Meteor.methods({
    'chargeCard': function (stripeToken, amount, items, timeInfo) {
        var Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);

        Stripe.charges.create({
            amount: amount,
            currency: 'cad',
            source: stripeToken
        }, function (err, charge) {
            if (err) {
                console.log(err);
            } else {
                console.log(charge);
                console.log('items:' + JSON.stringify(items));
                console.log('timeInfo:' + JSON.stringify(timeInfo));

            }
        });
        var order = {};
        order.pickuptime = timeInfo.pickuptime;
        order.comments = [{name: timeInfo.user.emails[0].address, comment: timeInfo.comments}];
        order.price = Number(Number(amount) / 100).toFixed(2);
        order.orderId = timeInfo.orderId;
        order.user = Meteor.userId();
        order.email = timeInfo.user.emails[0].address;
        //console.log(order.email);
        order.orderDate = new Date();
        var itemArray = [];
        items.forEach(function (item) {
            itemArray.push(item.name);
        });
        order.description = itemArray.join(', ');
        order.status = 'pending';
        //Session.set('order',order);
        Orders.insert(order);
    },
    'sendEmail': function (to, from, subject, text) {
        //check([to, from, subject, text], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Email.send({
            to: to,
            from: from,
            subject: subject,
            text: text
        });
    },
    'getMenuData': function () {
        return JSON.parse(Assets.getText('Menu.json'));
    }
});