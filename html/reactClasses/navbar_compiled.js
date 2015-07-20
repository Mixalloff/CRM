var Navbar = React.createClass({displayName: "Navbar",
	render: function() {
		return(
			React.createElement("div", null, 
			React.createElement("nav", null, 
			React.createElement("ul", {className: "col-md-12", id: "menu"}, 
			React.createElement("li", {className: "desktop col-md-1"}, React.createElement("a", {href: "index.html"}, React.createElement("i", {className: "fa fa-desktop"}), 
			"Рабочий стол")), 
			React.createElement("li", {className: "col-md-1"}, " ", React.createElement("a", {href: "deals.html"}, React.createElement("i", {className: "fa fa-usd"}), "Сделки")), 
			React.createElement("li", {className: "col-md-1"}, " ", React.createElement("a", {href: "#contacts"}, React.createElement("i", {className: "fa fa-phone"}), "Контакты")), 
			React.createElement("li", {className: "col-md-1"}, " ", React.createElement("a", {href: "#calendar"}, React.createElement("i", {className: "fa fa-calendar"}), "Задачи")), 
			React.createElement("li", {className: "col-md-1"}, " ", React.createElement("a", {href: "#analytics"}, React.createElement("i", {className: "fa fa-bar-chart"}), "Аналитика")), 

			React.createElement("li", {className: "col-md-offset-3 col-md-1"}, 
			React.createElement("a", {href: "#add"}, 
			React.createElement("i", {className: "fa fa-plus-circle", id: "add-in-menu"}), 
			"Добавить"
			)
			), 
			React.createElement("li", {className: "avatar col-md-3"}, 
			React.createElement("img", {src: "images/emptyavatar.jpg", alt: ""}), 
			React.createElement("div", {className: "info"}, 
			React.createElement("div", {className: "user-name"}, " Иванов Иван "), 
			React.createElement("div", {className: "post"}, "Менеджер "), 
			React.createElement("i", {className: "fa fa-clock-o"}), " ", React.createElement("span", {className: "clock-number"}, " 1 "), 
			React.createElement("i", {className: "fa fa-envelope-o"}), " ", React.createElement("span", {className: "message-number"}, " 10 ")
			)
			)
			)
			), 
			React.createElement("div", {className: "list"}, 
			React.createElement("ul", {className: "add-menu"}, 
			React.createElement("li", null, 
			React.createElement("div", null, " ", React.createElement("i", {className: "fa fa-user"})), " Сотрудника"  
			), 
			React.createElement("li", null, 
			React.createElement("div", null, " ", React.createElement("i", {className: "fa fa-users"}), " "), " Отдел"
			), 
			React.createElement("li", null, 
			React.createElement("div", null, React.createElement("i", {className: "fa fa-calendar"}), " "), " Задачу"
			), 
			React.createElement("li", null, 
			React.createElement("div", null, React.createElement("i", {className: "fa fa-usd"}), " "), " Сделку"         
			), 
			React.createElement("li", null, 
			React.createElement("div", null, React.createElement("i", {className: "fa fa-phone"}), " "), " Контакт"

			)
			)
			)
			)
			)
}
});
React.render(React.createElement(Navbar, null),document.getElementById('header'));
