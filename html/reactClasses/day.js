var Day = React.createClass({

	render: function() {
		return(
			<div className="col-md-3">
				<div className="day">
					<p className="number">{this.props.number}</p>
					<p className="month">{this.props.month}</p>
					<div className="meeting_info">
						<p className="ring"> Звонок клиенту <span className="quantity">{this.props.quantity_rings}</span></p>  
						<p className="meet"> Встреча <span className="quantity">{this.props.quantity_meetings}</span></p>
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
				<div>
				{this.state.days.map(function(day,i)
					{
				return(
				<Day key={i} number={day.number} month = {day.month} quantity_rings={day.quantity_rings} quantity_meetings={day.quantity_meetings}/>
					  );
				})}
				</div>
			 );	
	}
});

React.render(<Calendar source = "http://crmapi-tommsawyer.rhcloud.com/longpolling" />, document.getElementById('calendars'));