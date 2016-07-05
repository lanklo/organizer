Organizer.EventsListView = Backbone.View.extend({
	render: function() {
		var events_element = [];

		this.collection.each(function(event) {
			var eventView = new Organizer.EventView({
				model: event
			});
			events_element.push(eventView.render().el);
			
		});

		this.$el.append(events_element);

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
//		this.$el.html(Handlebars.templates['event'](this.model));

		var template = Handlebars.compile($('#event-template').html());
		this.$el.html(template(this.model.toJSON()));

		return this;
	},
	events: {
		'click a': 'removeEvent'
	},
	removeEvent: function() {
		console.log('removed');
	}
});