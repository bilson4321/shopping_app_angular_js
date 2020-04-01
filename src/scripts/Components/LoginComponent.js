var loginComponent={
    controller:"LoginController",
    template:`
                <div class="container">
                    <h2>Login</h2>
                    <h4>Please enter your login Credential</h4>
                    <label>email</label>
                    <input type="text" ng-model="email"><br>
                    <label>password</label>
                    <input type="password" ng-model="password"><br>
                    <input type="button" ng-click="login()" value="Submit"></input>
                </div>
    `
}
export default loginComponent;