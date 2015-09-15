var Deal = React.createClass ({displayName: "Deal",

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
	
	React.createElement("div", {className: "deal "}, 
			React.createElement("p", {className: "companyname"}, " ", this.state.companyname, " "), 
			React.createElement("p", {className: "dealname"}, this.state.dealname), 
			React.createElement("p", {className: "nextaction"}, " Следующее действие: ", this.state.nextaction, " "), 
			React.createElement("p", {className: "dealdate"}, " Дата: ", this.state.dealdate, " "), 
			React.createElement("p", {className: "dealstatus"}, " Статус: ", this.state.dealstatus)
	)
	)
}
});
var Step = React.createClass({displayName: "Step",
	render: function () {
		return (
			React.createElement("div", {className: "row steps"}, 

			React.createElement("i", {className: "left-step col-md-1 fa fa-arrow-circle-left"}), 
			React.createElement("div", {className: "col-md-10"}, 
			React.createElement("div", {className: "carousel", "data-count": "4"}, 
			React.createElement(Deal, null), 
			React.createElement(Deal, null), 
			React.createElement(Deal, null), 
			React.createElement(Deal, null), 
			React.createElement(Deal, null), 
			React.createElement(Deal, null), 
			React.createElement(Deal, null)
			)
			), 
				React.createElement("i", {className: "right-step col-md-1 fa fa-arrow-circle-right"})
			)
			)
	}
});


var Steps = React.createClass({displayName: "Steps",
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement(Step, null), 
				React.createElement(Step, null), 
				React.createElement(Step, null), 
				React.createElement(Step, null), 
				React.createElement(Step, null), 
				React.createElement(Step, null), 
				React.createElement(Step, null), 
				React.createElement(Step, null)
			)

			)
	}
});
React.render(React.createElement(Steps, null),document.getElementById("steps"));
