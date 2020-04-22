var changePasswordComponent={
    controller:'ChangePasswordController',
    template:`
    <div class="container">
        <div class="row my-4">
            <div class="col-md-6 mx-auto">
                <h4>Change Password</h4>
                <form class="my-4" name="changePassword" ng-submit="submit(changePassword.$valid)" novalidate>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" placeholder="Enter password" id="password" ng-model="password" name="password" ng-minlength="6" required>
                    <span style="color:red" ng-show="changePassword.$submitted && changePassword.password.$pristine">Password is required</span>
                    <span style="color:red" ng-if="!changePassword.password.$valid&&changePassword.password.$dirty">Minimum password length is 6</span>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
    `
}
export default changePasswordComponent;