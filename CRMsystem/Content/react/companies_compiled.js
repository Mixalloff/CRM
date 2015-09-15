var Company = React.createClass({displayName: "Company",

	getInitialState: function() {
		return({
		company_name: "ООО Компания",
		company_type: "партнер",
		company_activity: "IT",
		company_email: "company@mail.ru",
		company_site: "www.comp.ru"
	})
	},

	render: function() {
		return(
			React.createElement("div", {className: "col-md-12"}, 
							React.createElement("div", {className: "company"}, 
								React.createElement("div", {className: "company-header"}, this.state.company_name, 
									React.createElement("i", {className: "fa fa-bars"})
								), 
								React.createElement("div", {className: "company-body"}, 
									React.createElement("p", null, "Тип: ", this.state.company_type), 
									React.createElement("p", null, "Сфера деят.: ", this.state.company_activity), 
									React.createElement("p", null, "Email: ", this.state.company_email), 
									React.createElement("p", null, "Сайт: ", this.state.company_site, " ")
								)
							)
						)
			)
	}
});	

var Companies = React.createClass({displayName: "Companies",

	render: function () {		
		return (
				React.createElement("div", null, 
				React.createElement("div", {className: "next_button"}, React.createElement("i", {className: "fa fa-angle-right"})), 
				React.createElement("div", {className: "prev_button"}, React.createElement("i", {className: "fa fa-angle-left"})), 
				React.createElement("div", {className: "carousel", "data-count": "4"}, 	
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null), 
				React.createElement(Company, null)
				)
				)
			);	
	}
});

React.render(React.createElement(Companies, null), document.getElementById('companies'));
