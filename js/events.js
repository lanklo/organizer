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

		$('#events-list').html(this.el);
	},
	tagName: 'ul',
	className: 'list-group'
	// el: '#events-list'
	// tagName: '',
	// className: '',
	// id: ''
});	


Organizer.EventView = Backbone.View.extend({
	tagName: 'li',
	className: 'list-group-item',
	render: function() {
		this.$el.html(Handlebars.templates['event'](this.model));
		return this;
	},
	events: {
		'click a': 'removeEvent'
	},
	removeEvent: function() {
		console.log('removed');
	}
});