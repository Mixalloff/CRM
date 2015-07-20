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
	
	<div className="deal ">
			<p className = "companyname"> {this.state.companyname} </p>
			<p className="dealname">{this.state.dealname}</p>
			<p className="nextaction"> Следующее действие: {this.state.nextaction} </p>
			<p className="dealdate"> Дата: {this.state.dealdate} </p>
			<p className="dealstatus"> Статус: {this.state.dealstatus}</p> 
	</div>
	)
}
});
var Step = React.createClass({
	render: function () {
		return (
			<div>
				<div className="carousel" data-count ="4">
					<Deal />
					<Deal />
					<Deal />
					<Deal />
					<Deal />
					<Deal />
					<Deal />
					</div>
				</div>
			)
	}
});


var Steps = React.createClass({
	render: function() {
		return (
			<div>
				<Step/>
						
			</div>

			)
	}
});
React.render(<Steps/>,document.getElementById("deal-steps"));

