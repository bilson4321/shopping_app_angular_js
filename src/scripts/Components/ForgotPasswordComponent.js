var forgotPasswordComponent={
    controller:'ForgotPasswordController',
    template:`
    <div class="container">
            <div class="row">
            
                <div class="col-md-6 mx-auto">
                        <h4>Forgot Password</h4>
                        <div class="form-group">
                            <label for="email">Enter your email:</label>
                            <input type="text" class="form-control" placeholder="Enter your email" id="email" ng-model="email">
                        </div>
                        <button ng-if="!userFound" type="submit" ng-click="submit()" class="btn btn-primary">Submit</button>
                        <div ng-show="userFound">
                        <h5>{{question}}</h5>
                        {{answer}}
                        <div class="form-group">
                            <label for="answer">Your Answer:</label>
                            <input type="text" class="form-control" placeholder="Enter your Answer" id="answer" ng-model="answer">
                        </div>
                        <button type="submit" ng-click="submitAnswer()" class="btn btn-primary">Submit</button>
                        </div>
                </div>
            </div>
    </div>
    `
}
export default forgotPasswordComponent;