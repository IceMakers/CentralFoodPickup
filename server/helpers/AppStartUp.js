Meteor.startup(function () {
    BrowserPolicy.content.allowOriginForAll("https://js.stripe.com/");
    BrowserPolicy.content.allowOriginForAll("https://checkout.stripe.com/");

    //empty the collection
    Items.remove({});

    //load the menu data
    Meteor.call('getMenuData', function(err, data) {
        //clear all items in the Item collection
        if(err) {
            console.log(err);
        } else {
            data.forEach(function(item) {
                Items.insert(item);
            });
        }
    });
});