var Navbar = React.createClass({
	render: function() {
		return(
		<nav>
				<ul className="col-md-12" id="menu">
					<li className="active col-md-2"><a href="index.html"><i className="fa fa-desktop"></i>
					Рабочий стол</a></li>
					<li className="col-md-2"> <a href="deals.html"><i className="fa fa-usd"></i>Сделки</a></li>
					<li className="col-md-2"> <a href="#contacts"><i className="fa fa-phone"></i>Контакты</a></li>
					<li className="col-md-2"> <a href="#calendar"><i className="fa fa-calendar"></i>Календарь</a></li>
					<li className="col-md-2"> <a  href="#analytics"><i className="fa fa-bar-chart"></i>Аналитика</a></li>
					<li className="col-md-2 avatar">
						<div className="row">
							<span className="glyphicon glyphicon-off"> </span>
							<div className="profile col-md-6">
								<a href="#downloadprofile">
									<span className="glyphicon glyphicon-envelope"> </span>
									<span className="glyphicon glyphicon-time"> </span>
									<img src="images/emptyavatar.jpg"/>	
								</a> 
							</div>	

							<div className="info col-md-6">		
								<div className="name"> Иванов Иван </div> 
								<div className= "position"> Менеджер </div>		
							</div>	
						</div>

					</li>
				</ul>
			</nav>
			)
	}
});
React.render(<Navbar />,document.getElementById('header'));