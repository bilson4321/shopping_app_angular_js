var userRegisterComponent={
    controller:"UserRegisterController",
    template:`
    <div class="container">
    <div class="row">
        <div class="col-md-6 mx-auto">
            <form class="my-4">
                <h4>Enter Your Detail</h4>
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" class="form-control" placeholder="Enter your first name" id="firstName" ng-model="firstName">
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" class="form-control" placeholder="Enter your last name" id="lastName" ng-model="lastName">
                </div>
                <div class="form-group">
                    <label for="address">Address:</label>
                    <input type="text" class="form-control" placeholder="Enter your address" id="address" ng-model="address">
                </div>
                <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input type="text" class="form-control" placeholder="Enter your Phone" id="phone" ng-model="mobile">
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="text" class="form-control" placeholder="Enter your email" id="email" ng-model="email">
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" placeholder="Enter password" id="password" ng-model="password">
                </div>
                <button type="submit" ng-click="register()" class="btn btn-primary">Register</button>
            </form>
        </div>
    </div>
    </div>
    `
}

export default userRegisterComponent;