var Day = React.createClass({displayName: "Day",

	getInitialState: function(){
		return({
			quantity_rings: this.props.quantity_rings,
			quantity_meetings: this.props.quantity_meetings
		});
	},

	render: function() {
		return(
			React.createElement("div", {className: "col-md-3"}, 
				React.createElement("div", {className: "day"}, 
					React.createElement("p", {className: "number"}, this.props.number), 
					React.createElement("p", {className: "month"}, this.props.month), 
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
	getInitialState: function() {
		return({days: [] });
	},
	updateCalendar: function() {
		alert("update");
		var self = this;
		$.ajax ({
			type: "GET",
			url: self.props.source,
			success: function(response) {
				alert("success");
				self.setState({
					days: response
				});
				self.updateCalendar();
			},
			error: function() {
				alert("error");
				self.updateCalendar();
			}

		});
	},
	componentDidMount: function() {
		alert("component");
		this.updateCalendar();
	},
	render: function () {		
		alert("render");
			var calendarDays = this.state.days.map(function(day)
			{
				alert(day.quantity_rings);
				return(
				React.createElement(Day, {number: day.number, month: day.month, quantity_rings: day.quantity_rings, quantity_meetings: day.quantity_meetings})
				);
			});
				return (
				React.createElement("div", null, 
					calendarDays
				)
					);	
	}
});

React.render(React.createElement(Calendar, {source: "http://crmapi-tommsawyer.rhcloud.com/longpolling"}), document.getElementById('calendars'));
