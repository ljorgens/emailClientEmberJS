EmailClient.Email = DS.Model.extend({
	senderName: DS.attr(),
	senderSubject: DS.attr(),
	senderBody: DS.attr()
});