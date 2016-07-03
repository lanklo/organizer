Organizer = {
	initialize: function() {
		var eventList = new Organizer.EventsListView();

		eventList.render();
	}
};

$(document).ready(function() {
	Organizer.initialize();
});