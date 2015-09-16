var User = React.createClass({displayName: "User",
	getInitialState:function() {
		return({
			name:"Иванов Иван",
			post: "Директор"
		})
	},
	render: function() {
		return(
			React.createElement("div", {className: "col-md-12"}, 
			React.createElement("div", {className: "profile-border"}, 
			React.createElement("div", {className: "profile"}, 
			React.createElement("img", {src: "../Content/images/emptyavatar.jpg", width: "110px"})
			), 
			React.createElement("div", {className: "user-name"}, 
			this.state.name
			), 
			React.createElement("div", {className: "post"}, 
			this.state.post
			)
			), 
			React.createElement("div", {className: "pass"}, 
			React.createElement("input", {type: "password", placeholder: "Пароль", className: "pass-input"}), 
			React.createElement("i", {className: "fa fa-lock"})
			)
			)
			);
	}
});
var Users = React.createClass({displayName: "Users",

	render: function() {
		return(
			React.createElement("div", {className: "col-md-12", id: this.props.id}, 
			React.createElement("div", {className: "col-md-offset-1 col-md-1 left"}, 

			React.createElement("div", {className: "left-bar"}, 
			React.createElement("i", {className: "fa fa-user user-icon"}), 
			React.createElement("span", {className: "quantity-left-users"}, " 0 "), 	
			React.createElement("div", null, 
			React.createElement("i", {className: "fa fa-arrow-circle-o-left left-user"})
			)
			)

			), 
			React.createElement("div", {className: "col-md-8 department"}, 
			React.createElement("div", {className: "name-department"}, 
			this.props.dep
			), 
			React.createElement("div", {className: "profiles carousel", "data-count": "4"}, 
			React.createElement(User, null), 
			React.createElement(User, null), 
			React.createElement(User, null), 
			React.createElement(User, null), 
			React.createElement(User, null), 
			React.createElement(User, null), 
			React.createElement(User, null), 
			React.createElement(User, null)
			)
			), 
			React.createElement("div", {className: "col-md-1 right"}, 
			React.createElement("div", {className: "right-bar"}, 
				React.createElement("i", {className: "fa fa-user user-icon "}), 
				React.createElement("span", {className: "quantity-right-users"}), 	
				React.createElement("div", null, 
				React.createElement("i", {className: "fa fa-arrow-circle-o-right right-user"})
				)
			)
			)
			)
			);
	}
});


var GroupsUsers = React.createClass({displayName: "GroupsUsers",
	render: function() {
		return(
	React.createElement("div", null, 	
			React.createElement(Users, {dep: "Администрация", id: "administration"}), 
			React.createElement(Users, {dep: "Отдел продаж", id: "trade"}), 
			React.createElement(Users, {dep: "Отдел маркетинга", id: "marketing"}), 
			React.createElement(Users, {dep: "Отдел разработки", id: "develop"})
	)	
			);
	}
});
React.render(React.createElement(GroupsUsers, null), document.getElementById('groups-users'));
