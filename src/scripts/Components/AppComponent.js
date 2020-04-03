var appComponent={
    controller:"AppController",
    template:`
            <nav class="navbar navbar-expand-sm">
                <div class="container-fluid">
                    <a ui-sref="home" class="navbar-brand">
                        <img src="images/storelogo.png" class="img-responsive logo"></img>
                    </a>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="text" ng-model="searchQuery" placeholder="Search">
                        <a class="btn btn-success" type="submit" ui-sref="search({productName:searchQuery})>Search</a>
                    </form>
                    <ul class="nav justify-content-end">
                        <a ui-sref="login">Login</a>
                        <button ng-click="logout()">Logout</button>
                    </ul>
                </div>
            </nav>
            <div class="container">
                <div class="categories">
                    <ul>
                        <li ng-repeat='c in categories'><a ui-sref="category({categoryName:c.name})">{{c.name}}</a><li>
                    </ul>
                </div>
            </div>
            
            <div ui-view>
            </div>     
    `
}
export default appComponent;
