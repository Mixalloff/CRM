var Day = React.createClass({

	getInitialState: function(){
		return({
			quantity_rings: this.props.quantity_rings,
			quantity_meetings: this.props.quantity_meetings
		});
	},

	render: function() {
		return(
			<div className="col-md-3">
				<div className="day">
					<p className="number">{this.props.number}</p>
					<p className="month">{this.props.month}</p>
					<div className="meeting_info">
						<p className="ring"> Звонок клиенту <span className="quantity">{this.state.quantity_rings}</span></p>  
						<p className="meet"> Встреча <span className="quantity">{this.state.quantity_meetings}</span></p>
					</div>
				</div>
			</div>
		)
	}
});	

var Calendar = React.createClass({
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
				<Day number={day.number} month = {day.month} quantity_rings={day.quantity_rings} quantity_meetings={day.quantity_meetings}/>
				);
			});
				return (
				<div>
					{calendarDays}
				</div>
					);	
	}
});

React.render(<Calendar source = "http://crmapi-tommsawyer.rhcloud.com/longpolling" />, document.getElementById('calendars'));