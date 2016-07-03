Organizer.EventsListView = Backbone.View.extend({
	render: function() {
		var that = this;
		var events = [
			{title: 'go to work'},
			{title: 'meet with friends'},
			{title: 'visit mam'},
		];

		var events_element = [];

		_.each(events, function(event) {
			var eventView = new Organizer.EventView({
				model: event
			});
			events_element.push(eventView.render().el);
			
		});

		that.$el.append(events_element);

		$('#app').html(this.el);
	},
	tagName: 'ul'
	// el: '#events-list'
	// tagName: '',
	// className: '',
	// id: ''
});	


Organizer.EventView = Backbone.View.extend({
	tagName: 'li',
	render: function() {
		var template = Handlebars.compile($('#event-template').html());
		this.$el.html(template(this.model));
		return this;
	},
	events: {
		'click a': 'removeEvent'
	},
	removeEvent: function() {
		console.log('removed');
	}
});