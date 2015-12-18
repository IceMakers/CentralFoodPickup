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
                //console.log('Email of logged in user is ' + JSON.stringify(Meteor.user().emails[0].address));
                if(Meteor.user().emails[0].address === 'iagu@central1.com') {
                    this.render('ViewPendingOrders');
                } else {
                    this.render('FoodMenu');
                }
            }
        }
    });
});

Router.map(function () {
    this.route('ConfirmAndPay', {
        path: '/confirmAndPay',
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
                this.render('ConfirmAndPay');
            }
        }
    });
});

Router.map(function () {
    this.route('ViewOrders', {
        path: '/ViewOrders',
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
                this.render('Orders');
            }
        }
    });
});

Router.map(function () {
    this.route('PendingOrders', {
        path: '/pendingOrders',
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
                this.render('ViewPendingOrders');
            }
        }
    });
});

Router.map(function () {
    this.route('AllOrders', {
        path: '/allOrders',
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
                this.render('ViewAllOrders');
            }
        }
    });
});

Router.map(function () {
    this.route('PickUpTime', {
        path: '/pickUpTime',
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
                this.render('PlaceOrder');
            }
        }
    });
});

Router.map(function () {
    this.route('FoodMenu', {
        path: '/FoodMenu',
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
                this.render('FoodMenu');
            }
        }
    });
});

Router.map(function () {
    this.route('ConfirmationScreen', {
        path: '/confirmationScreen',
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
                this.render('ConfirmationScreen');
            }
        }
    });
});