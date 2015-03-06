EmailClient.EmailController = Ember.Controller.extend({
	isEditing: false,
	actions: {
		edit: function(){
			this.set('isEditing', true);
		},
		save: function(){
			this.set('isEditing', false);
		}
	}
});