<div id="main-menu" class="view">

	<div id="stars-background" class="stars-frame"></div>
	<div id="stars-midground" class="stars-frame"></div>
	<div id="stars-foreground" class="stars-frame"></div>

	<div class="bar">
		<h1>APHELION</h1>
		<div class="screens">
			<div class="menu screen">
				<a href="#" class="btn large btn-primary open" data-open="login">Login</a>
				<a href="#" class="btn large btn-primary open" data-open="register">Register</a>
				<a href="#" class="btn large btn-primary disabled">Settings</a>
				<a href="#" class="btn large btn-primary disabled">Credits</a>
			</div>
			<form class="login screen white form-horizontal" method="post" action="" >
				<div class="modal-header">
					<h3>Login</h3>
				</div>
				<div class="modal-body">
                    <div class="control-group">
                        <label class="control-label" for="login-username">Username</label>
                        <div class="controls">
                            <input id="login-username" class="required" name="username" size="12" type="text" minlength="4" maxlength="12">
                        </div>
                    </div>
					<div class="control-group">
						<label class="control-label" for="login-password">Password</label>
						<div class="controls">
							<input id="login-password" class="required" name="password" size="24" type="password" minlength="6" maxlength="24">
						</div>
					</div>
					<p class="message alert alert-error"></p>
				</div>
				<div class="modal-footer">
					<input type="submit" class="btn btn-success" name="submit" value="Sign in">
					<a href="#" class="btn btn-secondary open" data-open="menu">Cancel</a>
				</div>
			</form>
			<form class="register screen white form-horizontal" method="post" action="" autocomplete="off">
				<div class="modal-header">
					<h3>Registration</h3>
				</div>
				<div class="modal-body">
					<div class="control-group">
						<label class="control-label" for="register-username">Username</label>
						<div class="controls">
							<input id="register-username" class="required alpha" name="username" size="12" type="text" minlength="4" maxlength="12">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="register-email">Email</label>
						<div class="controls">
							<input id="register-email" class="required email" name="email" size="48" type="text" minlength="4" maxlength="48">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="register-password">Password</label>
						<div class="controls">
							<input id="register-password" class="required" name="password" size="24" type="password" minlength="6" maxlength="24">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="register-password-confirm">Confirm</label>
						<div class="controls">
							<input id="register-password-confirm" class="required" name="password_confirm" size="24" type="password" minlength="6" maxlength="24">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label">Gender</label>
						<div class="controls">
							<label class="radio">
								<input type="radio" name="gender" id="register-gender-male" value="male" checked="" />
								Male
							</label>
							<label class="radio">
								<input type="radio" name="gender" id="register-gender-female" value="female" />
								Female
							</label>
						</div>
					</div>
					<p class="message alert alert-error"></p>
				</div>
				<div class="modal-footer">
					<input type="submit" class="btn btn-success" name="submit" value="Register">
					<a href="#" class="btn btn-secondary open" data-open="menu">Cancel</a>
				</div>
			</form>
			<div class="after-register screen white">
				<div class="modal-header">
					<h3>Registration</h3>
				</div>
				<div class="modal-body">
					<p>You've successfully been registered!</p>
				</div>
				<div class="modal-footer">
					<a href="#" class="btn btn-primary open" data-open="login">Sign in</a>
					<a href="#" class="btn btn-secondary open" data-open="menu">Back to Main Menu</a>
				</div>
			</div>
		</div><!-- screens end -->
	</div>
	<p class="credit">From Rakuhana with love.</p>
	<div class="ui360 music">
		<a href="mp3/aurora.mp3"></a>
	</div>
</div><!-- main-menu view end -->