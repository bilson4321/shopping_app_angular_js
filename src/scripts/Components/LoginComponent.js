var loginComponent={
    controller:"LoginController",
    template:`
        <div class="wrapper my-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mx-auto">
                        <form>
                            <h4>Login</h4>
                            <p>Please enter your credential</p>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" placeholder="Enter email" id="email" ng-model="email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" placeholder="Enter password" id="password" ng-model="password">
                            </div>
                            <button type="submit" ng-click="login()" class="btn btn-primary">Login</button>
                        </form>
                        <p>Don't have account <a ui-sref="userRegister">Sign up Here</a></p>
                    </div>
                </div>
            </div>
        </div>
    `
}
export default loginComponent;