/**
 * Created by kristina on 05.07.16.
 */

Organizer.Events = Backbone.Collection.extend({
	model: Organizer.Event,
	localStorage: new Backbone.LocalStorage('events')
});