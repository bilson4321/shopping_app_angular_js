var viewUserComponent={
    controller:'ViewUserController',
    template:`
            <div class="container">
                    <div class="row">
                        <div class="col-md-12 mx-auto my-4">
                            <h4>User List</h4>
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th>FirstName</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr ng-repeat='u in users'>
                                        <td>{{u.firstName}}</td>
                                        <td>{{u.lastName}}</td>
                                        <td>{{u.email}}</td>
                                        <td>{{u.address}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
    `
}
export default viewUserComponent;