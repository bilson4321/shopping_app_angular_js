var userRegisterComponent={
    controller:"UserRegisterController",
    template:`
    <div class="container">
    <div class="row">
        <div class="col-md-6 mx-auto">
            <form class="my-4" name="userRegister" ng-submit="register(userRegister.$valid)" novalidate>
                <h4>Enter Your Detail</h4>
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" class="form-control" placeholder="Enter your first name" id="firstName" required name="firstName" ng-model="firstName">
                    <span style="color:red" ng-show="submitted && userRegister.firstName.$pristine">First Name is required</span>
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" class="form-control" placeholder="Enter your last name" id="lastName" ng-model="lastName" name="lastName" required>
                    <span style="color:red" ng-show="submitted && userRegister.lastName.$pristine">Last Name is required</span>
                </div>
                <div class="form-group">
                    <label for="address">Address:</label>
                    <input type="text" class="form-control" placeholder="Enter your address" id="address" ng-model="address" name="address" required>
                    <span style="color:red" ng-show="submitted && userRegister.address.$pristine">Address is required</span>
                </div>
                <div class="form-group">
                    <label for="mobile">Phone:</label>
                    <input type="number" class="form-control" placeholder="Enter your Phone" id="mobile" ng-model="mobile" name="mobile" required>
                    <span style="color:red" ng-show="submitted && userRegister.mobile.$pristine">Phone is required</span>
                    <span style="color:red" ng-show="userRegister.mobile.$dirty && !userRegister.mobile.$valid">Please input phone number in correct format</span>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="text" class="form-control" placeholder="Enter your email" id="email" ng-model="email" name="email" 
                        ng-pattern="/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/" 
                        required>
                    <span style="color:red" ng-show="submitted && userRegister.email.$pristine">Email is required</span>
                    <span style="color:red" ng-if="!userRegister.email.$valid&&userRegister.email.$dirty">Please enter valid email</span>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" placeholder="Enter password" id="password" ng-model="password" name="password" ng-minlength="6" required>
                    <span style="color:red" ng-show="submitted && userRegister.password.$pristine">Password is required</span>
                    <span style="color:red" ng-if="!userRegister.password.$valid&&userRegister.password.$dirty">Minimum password length is 6</span>
                </div>
                <div class="form-group">
                    <label for="question">Security Question:</label>
                    <input type="text" class="form-control" placeholder="Enter a Question" id="question" ng-model="question1" autocomplete="off" name="question" required>
                    <span style="color:red" ng-show="submitted && userRegister.question.$pristine">question is required</span>
                </div>
                <div class="form-group">
                    <label for="answer">Your Answer:</label>
                    <input type="text" class="form-control" placeholder="Enter your answer" id="answer" ng-model="answer1" autocomplete="off" name="answer" required>
                    <span style="color:red" ng-show="submitted && userRegister.answer.$pristine">Answer is required</span>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>
    </div>
    </div>
    `
}

export default userRegisterComponent;