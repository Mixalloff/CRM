var User = React.createClass({
	getInitialState:function() {
		return({
			name:"Иванов Иван",
			post: "Директор"
		})
	},
	render: function() {
		return(
			<div className="col-md-12">
			<div className="profile-border">
			<div className="profile">
			<img src="images/emptyavatar.jpg" width="110px"/>
			</div>
			<div className="user-name"> 
			{this.state.name}
			</div>
			<div className="post">
			{this.state.post}
			</div>
			</div>
			<div className="pass">
			<input type="password" placeholder="Пароль" className="pass-input"/>
			<i className="fa fa-lock"></i>
			</div>
			</div>
			);
	}
});
var Users = React.createClass({

	render: function() {
		return(
			<div className="col-md-12"  id={this.props.id} >
			<div className="col-md-offset-1 col-md-1 left">

			<div className="left-bar">
			<i className="fa fa-user user-icon"></i>
			<span className="quantity-left-users"> 0 </span>	
			<div>
			<i className="fa fa-arrow-circle-o-left left-user"></i>
			</div>
			</div>

			</div>
			<div className="col-md-8 department">
			<div className="name-department">
			{this.props.dep}
			</div>
			<div className="profiles carousel" data-count="4">
			<User/>
			<User/>
			<User/>
			<User/>
			<User/>
			<User/>
			<User/>
			<User/>
			</div>
			</div>
			<div className="col-md-1 right">
			<div className="right-bar">
				<i className="fa fa-user user-icon "></i>
				<span className="quantity-right-users"></span>	
				<div>
				<i className="fa fa-arrow-circle-o-right right-user"></i>
				</div>
			</div>
			</div>
			</div>
			);
	}
});


var GroupsUsers = React.createClass({
	render: function() {
		return(
	<div>	
			<Users dep="Администрация" id="administration"/>
			<Users dep="Отдел продаж" id="trade"/>
			<Users dep="Отдел маркетинга" id="marketing"/>
			<Users dep="Отдел разработки" id="develop"/>
	</div>	
			);
	}
});
React.render(<GroupsUsers/>, document.getElementById('groups-users'));