var changePasswordComponent={
    controller:'ChangePasswordController',
    template:`
    <div class="container">
        <div class="row my-4">
            <div class="col-md-6 mx-auto">
                <h4>Change Password</h4>
                <div class="form-group">
                    <label for="password">Enter new Password:</label>
                    <input type="text" class="form-control" placeholder="Enter new password" id="password" ng-model="password">
                </div>
                <button type="submit" ng-click="submit()" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
    `
}
export default changePasswordComponent;