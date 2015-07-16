var Navbar = React.createClass({displayName: "Navbar",
	render: function() {
		return(
		React.createElement("nav", null, 
				React.createElement("ul", {className: "col-md-12", id: "menu"}, 
					React.createElement("li", {className: "active col-md-2"}, React.createElement("a", {href: "index.html"}, React.createElement("i", {className: "fa fa-desktop"}), 
					"Рабочий стол")), 
					React.createElement("li", {className: "col-md-2"}, " ", React.createElement("a", {href: "deals.html"}, React.createElement("i", {className: "fa fa-usd"}), "Сделки")), 
					React.createElement("li", {className: "col-md-2"}, " ", React.createElement("a", {href: "#contacts"}, React.createElement("i", {className: "fa fa-phone"}), "Контакты")), 
					React.createElement("li", {className: "col-md-2"}, " ", React.createElement("a", {href: "#calendar"}, React.createElement("i", {className: "fa fa-calendar"}), "Календарь")), 
					React.createElement("li", {className: "col-md-2"}, " ", React.createElement("a", {href: "#analytics"}, React.createElement("i", {className: "fa fa-bar-chart"}), "Аналитика")), 
					React.createElement("li", {className: "col-md-2 avatar"}, 
						React.createElement("div", {className: "row"}, 
							React.createElement("span", {className: "glyphicon glyphicon-off"}, " "), 
							React.createElement("div", {className: "profile col-md-6"}, 
								React.createElement("a", {href: "#downloadprofile"}, 
									React.createElement("span", {className: "glyphicon glyphicon-envelope"}, " "), 
									React.createElement("span", {className: "glyphicon glyphicon-time"}, " "), 
									React.createElement("img", {src: "images/emptyavatar.jpg"})	
								)
							), 	

							React.createElement("div", {className: "info col-md-6"}, 		
								React.createElement("div", {className: "name"}, " Иванов Иван "), 
								React.createElement("div", {className: "position"}, " Менеджер ")		
							)	
						)

					)
				)
			)
			)
	}
});
React.render(React.createElement(Navbar, null),document.getElementById('header'));
