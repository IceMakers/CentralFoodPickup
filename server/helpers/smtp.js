Meteor.startup(function(){
    var username = encodeURIComponent(Meteor.settings.private.email.username);
    var password = encodeURIComponent(Meteor.settings.private.email.password);
    console.log(username + '  ' + password);
    process.env.MAIL_URL = 'smtp://' + username + ':' + password + '@smtp.mailgun.org:587';
    //process.env.MAIL_URL = "smtp://postmaster%40<your-mailgun-address>.mailgun.org:password@smtp.mailgun.org:587";
   // process.env.MAIL_URL = 'smtp://505520project:justdoit505@smtp.gmail.com:465/'
});