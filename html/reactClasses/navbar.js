var Navbar = React.createClass({
	render: function() {
		return(
			<nav>
			<ul className="col-md-12" id="menu">
			<li className="desktop col-md-1"><a href="index.html"><i className="fa fa-desktop"></i>
			Рабочий стол</a></li>
			<li className="col-md-1"> <a href="deals.html"><i className="fa fa-usd"></i>Сделки</a></li>
			<li className="col-md-1"> <a href="#contacts"><i className="fa fa-phone"></i>Контакты</a></li>
			<li className="col-md-1"> <a href="#calendar"><i className="fa fa-calendar"></i>Задачи</a></li>
			<li className="col-md-1"> <a  href="#analytics"><i className="fa fa-bar-chart"></i>Аналитика</a></li>
			<li className="col-md-offset-3 col-md-1"> <a href="#add"><i className="fa fa-plus-circle"></i>Добавить</a></li>
			<li className="avatar col-md-3">
			<img src="images/emptyavatar.jpg" alt=""/>
			<div className="info">
			<div className="user-name"> Иванов Иван </div>
			<div className="post">Менеджер </div>
			<i className="fa fa-clock-o"></i> <span className="clock-number"> 1 </span> 
			<i className="fa fa-envelope-o"></i> <span className="message-number"> 10 </span>
			</div>
			</li>


			</ul>
			</nav>
			)
	}
});
React.render(<Navbar />,document.getElementById('header'));