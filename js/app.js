Organizer = {
	initialize: function() {
		var events = new Organizer.Events();

		var eventList = new Organizer.EventsListView({
			collection: events
		});

		events.fetch({
			success: function() {
				events.reset([
					{title: 'title 1'},
					{title: 'title 2'},
					{title: 'title 3'}
				]);

				eventList.render();
			},
			error: function() {
				console.error('error');
			}
		});
	}
};

$(document).ready(function() {
	Organizer.initialize();
});