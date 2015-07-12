var Day = React.createClass({

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
			<div className="col-md-3">
				<div className="day">
					<p className="number">{this.state.number}</p>
					<p className="month">{this.state.month}</p>
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
	render: function () {
		return (
				<div>
					<Day />
					<Day />
					<Day />
					<Day />
					<Day />
					<Day />
					<Day />
					<Day />
					<Day />
					<Day />
					<Day />
					<Day />
				</div>
			)
	}


});

React.render(<Calendar />, document.getElementById('calendars'));