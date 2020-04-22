var loginComponent={
    controller:"LoginController",
    template:`
        <div class="wrapper my-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mx-auto">
                        <form name="loginForm" ng-submit="login(loginForm.$valid)" novalidate>
                            <h4>Login</h4>
                            <p>Please enter your credential</p>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                    <input type="text" class="form-control" placeholder="Enter your email" id="email" ng-model="email" name="email" 
                                        ng-pattern="/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/" 
                                        required>
                                    <span style="color:red" ng-show="loginForm.$submitted && loginForm.email.$pristine">Email is required</span>
                                    <span style="color:red" ng-if="!loginForm.email.$valid&&loginForm.email.$dirty">Please enter valid email</span>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" placeholder="Enter password" id="password" ng-model="password" name="password">
                                <span style="color:red" ng-show="loginForm.$submitted && loginForm.password.$pristine">Password is required</span>
                                <a ui-sref="forgotPassword">Forgot password??</a>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                        <p>Don't have account <a ui-sref="userRegister">Sign up Here</a></p>
                    </div>
                </div>
            </div>
        </div>
    `
}
export default loginComponent;