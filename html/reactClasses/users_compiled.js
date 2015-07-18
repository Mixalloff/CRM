var User = React.createClass({displayName: "User",
	getInitialState:function() {
		return({
			name:"Иванов Иван",
			post: "Директор"
		})
	},
	render: function() {
		return(
			React.createElement("div", {className: "col-md-2"}, 
			React.createElement("div", {className: "profile-border"}, 
			React.createElement("div", {className: "profile"}, 
			React.createElement("i", {className: "fa fa-user"})
			), 
			React.createElement("div", {className: "user-name"}, 
			this.state.name
			), 
			React.createElement("div", {className: "post"}, 
			this.state.post
			)
			), 
			React.createElement("div", {className: "pass"}, 
			React.createElement("input", {type: "password", placeholder: "Пароль"}), 
			React.createElement("i", {className: "fa fa-lock"})
			)
			)
			);
	}
});
var Users = React.createClass({displayName: "Users",

	render: function() {
		return(
			React.createElement("div", {className: "col-md-offset-1 col-md-10 department"}, 
			React.createElement("div", {className: "name-department"}, 
			this.props.dep
			), 

			React.createElement("div", {className: "profiles"}, 
			React.createElement(User, null), 
			React.createElement(User, null), 
			React.createElement(User, null), 
			React.createElement(User, null), 
			React.createElement(User, null)
			)
			)
			);
	}
});


var GroupsUsers = React.createClass({displayName: "GroupsUsers",
	render: function() {
		return(
	React.createElement("div", null, 	
			React.createElement(Users, {dep: "Администрация"}), 
			React.createElement(Users, {dep: "Отдел продаж"}), 
			React.createElement(Users, {dep: "Отдел маркетинга"}), 	
			React.createElement(Users, {dep: "Отдел разработки"})	
	)	
			);
	}
});
React.render(React.createElement(GroupsUsers, null), document.getElementById('groups-users'));
