EmailClient.NewEmailController = Ember.Controller.extend({
	actions: {
		save: function(){
			var NewEmail = this.store.createRecord('email', {
				senderName: this.get('senderName'),
				senderSubject: this.get('senderSubject'),
				senderBody: this.get('senderBody'),
			});
		NewEmail.save();
		this.set('senderName', null),
		this.set('senderSubject', null),
		this.set('senderBody', null),
		this.transitionToRoute('emails');
		}
	}
});