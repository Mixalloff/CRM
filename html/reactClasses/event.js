var Event = React.createClass({

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
		<div className="row event">
			<div className="col-md-3 eventname">
				{this.state.eventname}
				</div>
			<div className="col-md-3 name">
				{this.state._name}
				</div>
			<div className="col-md-3 date">
				{this.state.date}
			</div>
			<div className="col-md-3 state">
				{this.state._state}
			</div>
		</div>
		)
	}
});

var Events = React.createClass({
	render: function () {
		return (
				<div>
					<Event />
					<Event />
					<Event />
					<Event />
					<Event />
					<Event />
					<Event />
				</div>
			)
	}


});

React.render(<Events />, document.getElementById('events'));