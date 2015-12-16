Router.configure({
    layoutTemplate: 'Main'
});

Router.map(function () {
    this.route('HomePage', {
        path: '/',

        onBeforeAction: function (pause) {
            if (!Meteor.user()) {
                // render the login template but keep the url in the browser the same
                this.render('LoginPage');

                // pause the rest of the before hooks and the action function
                pause();
            }
        },

        action: function () {
            // render the main template
            this.render();
        },

        onAfterAction: function () {
            // this is run after our action function
            if (Meteor.user()) {
                console.log('Email of logged in user is ' + JSON.stringify(Meteor.user().emails[0].address));
                if(Meteor.user().emails[0].address === 'iagu@central1.com') {
                    this.render('ViewPendingOrders');
                } else {
                    this.render('HomePage');
                }
            }
        }
    });
});

Router.route('/orders', function () {
    this.render('Orders');
});

Router.route('/pendingOrders', function () {
    this.render('ViewPendingOrders');
});

Router.route('/allOrders', function () {
    this.render('ViewAllOrders');
});