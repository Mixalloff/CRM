var Day = React.createClass({displayName: "Day",

	getInitialState: function(){
		return({
				number:11,
				month: "Июль",
				quantity_rings: 1,
				quantity_meetings: 2}
	)},

	componentDidMount: function() { // kogda otrisovalsa component
	
	},

	render: function() {
		return(
			React.createElement("div", {className: "col-md-3"}, 
				React.createElement("div", {className: "day"}, 
					React.createElement("p", {className: "number"}, this.state.number), 
					React.createElement("p", {className: "month"}, this.state.month), 
					React.createElement("div", {className: "meeting_info"}, 
						React.createElement("p", {className: "ring"}, " Звонок клиенту ", React.createElement("span", {className: "quantity"}, this.state.quantity_rings)), 
						React.createElement("p", {className: "meet"}, " Встреча ", React.createElement("span", {className: "quantity"}, this.state.quantity_meetings))
					)
				)
			)
		)
	}
});	

var Calendar = React.createClass({displayName: "Calendar",
	render: function () {
		return (
				React.createElement("div", null, 
					React.createElement(Day, null), 
					React.createElement(Day, null), 
					React.createElement(Day, null), 
					React.createElement(Day, null), 
					React.createElement(Day, null), 
					React.createElement(Day, null), 
					React.createElement(Day, null), 
					React.createElement(Day, null), 
					React.createElement(Day, null), 
					React.createElement(Day, null), 
					React.createElement(Day, null), 
					React.createElement(Day, null)
				)
			)
	}


});

React.render(React.createElement(Calendar, null), document.getElementById('calendars'));
