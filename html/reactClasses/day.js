var Day = React.createClass({

	getInitialState: function() {
		return({
		number: 1,
		month:"Июль",
		quantity_rings: 2,
		quantity_meetings: 10
	})
	},

	render: function() {
		return(
			<div className="day">
			<p className="number">{this.state.number}</p>
			<p className="month">{this.state.month}</p>
			<div className="meeting_info">
			<p className="ring"> Звонок клиенту <span className="quantity">{this.state.quantity_rings}</span></p>  
			<p className="meet"> Встреча <span className="quantity">{this.state.quantity_meetings}</span></p>
			</div>
			</div>
			)
	}
});	

var Calendar = React.createClass({

	render: function () {		
		return (
				<div>
				<div className="next_button"><i className="fa fa-angle-right"></i></div>
				<div className="prev_button"><i className="fa fa-angle-left"></i></div>
				<div className="carousel" data-count="4">	
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				<Day/>
				</div>
				</div>
			);	
	}
});

React.render(<Calendar />, document.getElementById('calendars'));