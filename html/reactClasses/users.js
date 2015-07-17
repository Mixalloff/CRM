var User = React.createClass({
	getInitialState:function() {
		return({
			name:"Иванов Иван",
			post: "Директор"
		})
	},
	render: function() {
		return(
			<div className="col-md-2">
			<div className="profile-border">
			<div className="profile">
			<i className="fa fa-user"></i>
			</div>
			<div className="user-name"> 
			{this.state.name}
			</div>
			<div className="post">
			{this.state.post}
			</div>
			</div>
			<div className="pass">
			<input type="password" placeholder="Пароль"/>
			<i className="fa fa-lock"></i>
			</div>
			</div>
			);
	}
});
var Users = React.createClass({
	getInitialState: function() {
		return({
			department: "Администрация"
		})
	},
	render: function() {
		return(
			<div>
			<div className="name-department">
			{this.state.department}
			</div>

			<div className="profiles">
			<User/>
			<User/>
			<User/>
			<User/>
			<User/>
			</div>
			</div>
			);
	}
});
React.render(<Users/>, document.getElementById('user-groups'));
