var Deal = React.createClass ({

getInitialState: function() {
	return({
		companyname: "ООО YYY",
		dealname: "Закупка CRM-системы",
		nextaction: "Выезд к клиенту",
		dealdate: "10.07.2015 18:00",
		dealstatus: "Встреча"
	})
},

	render:function() {
	return(
	<div className="deal">
			<p className = "companyname"> {this.state.companyname} </p>
			<p className="dealname">{this.state.dealname}</p>
			<p className="nextaction"> Следующее действие: {this.state.nextaction} </p>
			<p className="dealdate"> Дата: {this.state.dealdate} </p>
			<p className="dealstatus"> Статус: {this.state.dealstatus}</p> 
	</div>
	)
}
});
var Deals = React.createClass({
	render: function () {
		return (
				<div>
					<Deal />
					<Deal />
					<Deal />
					<Deal />
					<Deal />
					<Deal />
					<Deal />
				</div>
			)
	}
});

React.render(<Deals />, document.getElementById('deals'));
