var Day = React.createClass({displayName: "Day",

	render: function() {
		return(
			React.createElement("div", {className: "col-md-3"}, 
				React.createElement("div", {className: "day"}, 
					React.createElement("p", {className: "number"}, this.props.number), 
					React.createElement("p", {className: "month"}, this.props.month), 
					React.createElement("div", {className: "meeting_info"}, 
						React.createElement("p", {className: "ring"}, " Звонок клиенту ", React.createElement("span", {className: "quantity"}, this.props.quantity_rings)), 
						React.createElement("p", {className: "meet"}, " Встреча ", React.createElement("span", {className: "quantity"}, this.props.quantity_meetings))
					)
				)
			)
		)
	}
});	

var Calendar = React.createClass({displayName: "Calendar",
	getInitialState: function() {
		return({days: [] });
	},
	updateCalendar: function() {
		$.ajax ({
			type: "GET",
			url: this.props.source,
			dataType: 'json',
			cache: false,
			success: function(response) {
				console.log(this.state.days);
				this.replaceState({
					days: response
				});
				this.updateCalendar();
			}.bind(this),
			error: function() {
				this.updateCalendar();
			}.bind(this)

		});
	},
	componentDidMount: function() {
		this.updateCalendar();
	},
	render: function () {		
		return (
				React.createElement("div", null, 
				this.state.days.map(function(day,i)
					{
				return(
				React.createElement(Day, {key: i, number: day.number, month: day.month, quantity_rings: day.quantity_rings, quantity_meetings: day.quantity_meetings})
					  );
				})
				)
			 );	
	}
});

React.render(React.createElement(Calendar, {source: "http://crmapi-tommsawyer.rhcloud.com/longpolling"}), document.getElementById('calendars'));
