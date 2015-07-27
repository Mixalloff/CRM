var Company = React.createClass({

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
			<div className="col-md-12">
							<div className="company">
								<div className="company-header">{this.state.company_name}
									<i className="fa fa-bars"></i>
								</div>
								<div className="company-body">
									<p>Тип: {this.state.company_type}</p>
									<p>Сфера деят.: {this.state.company_activity}</p>
									<p>Email: {this.state.company_email}</p>
									<p>Сайт: {this.state.company_site} </p>
								</div>
							</div>
						</div>
			)
	}
});	

var Companies = React.createClass({

	render: function () {		
		return (
				<div>
				<div className="next_button"><i className="fa fa-angle-right"></i></div>
				<div className="prev_button"><i className="fa fa-angle-left"></i></div>
				<div className="carousel" data-count="4">	
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				<Company/>
				</div>
				</div>
			);	
	}
});

React.render(<Companies />, document.getElementById('companies'));

						