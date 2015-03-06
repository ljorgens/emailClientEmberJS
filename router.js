EmailClient.Router.map(function(){
	this.resource("emails", {path: '/'});
	this.resource("new-email");
	this.resource("about");
	this.resource("email", {path: '/:email_id'});
});