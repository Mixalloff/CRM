var Event = React.createClass({displayName: "Event",

	getInitialState: function() {
		return ({
			eventname: "Статус(YYY)",
			_name: "Иванов Иван",
			date: "10.07.2015 1:36",
			_state: "Договорились о встрече"
		})
	},

	render: function() {
		return(
		React.createElement("div", {className: "row event"}, 
			React.createElement("div", {className: "col-md-3 eventname"}, 
				this.state.eventname
				), 
			React.createElement("div", {className: "col-md-3 name"}, 
				this.state._name
				), 
			React.createElement("div", {className: "col-md-3 date"}, 
				this.state.date
			), 
			React.createElement("div", {className: "col-md-3 state"}, 
				this.state._state
			)
		)
		)
	}
});

var Events = React.createClass({displayName: "Events",
	render: function () {
		return (
				React.createElement("div", null, 
					React.createElement(Event, null), 
					React.createElement(Event, null), 
					React.createElement(Event, null), 
					React.createElement(Event, null), 
					React.createElement(Event, null), 
					React.createElement(Event, null), 
					React.createElement(Event, null)
				)
			)
	}


});

React.render(React.createElement(Events, null), document.getElementById('events'));
