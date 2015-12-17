Template.FoodMenu.rendered = function () {

}

Template.FoodMenu.helpers({
    items: function() {
        //console.log(Items.find({}));
        return Items.find({});
    }
});

Template.FoodMenu.events({
    'click a.btn': function(event) {
        console.log("a link clicked");
        event.preventDefault();
        console.log($('input:checked').length);
        var checkedItemsArray = [];
        $.each($('input:checked'), function(index, checkBox){
            var itemObject = {};
            console.log(checkBox);
            itemObject.name = $(checkBox).attr('itemname');
            itemObject.price = $(checkBox).attr('itemprice');
            itemObject.displayprice = $(checkBox).attr('itempricedisplay');
            checkedItemsArray.push(itemObject);
        });
        console.log(checkedItemsArray);
        Session.set('orderedItems', checkedItemsArray);
        Router.go('/pickUpTime');
    }
});
