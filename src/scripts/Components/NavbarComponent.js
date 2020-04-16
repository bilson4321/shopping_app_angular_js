var navbarComponent={
    controller:"NavbarController",
    template:`
            <!-- navbar -->
            <nav class="desktop-navbar">
                <div class="navbar-wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-2">
                                <a ui-sref="home"><h2>Store</h2></a>
                            </div>
                            <div class="col-sm-8">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search" ng-model="searchQuery">
                                    <div class="input-group-append">
                                        <a ui-sref="search({productName:searchQuery})" class="btn btn-danger">Search</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <a href="javascript:void(0)" ui-sref="login" class="btn btn-primary" ng-if="!isAuthenticated">
                                    Login
                                </a>
                                <div class="dropdown" ng-if="isAuthenticated&&userRole==='customer'">
                                    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                                        {{userName}}
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0)" ui-sref="customerProfile">My Profile</a>
                                        <a class="dropdown-item" href="javasrcipt:void(0)" ui-sref="customerOrder">My Order</a>
                                        <a class="dropdown-item" href="javasrcipt:void(0)" ng-click="logout()">Logout</a>
                                    </div>
                                </div>
                                <div class="dropdown" ng-if="isAuthenticated&&userRole==='admin'">
                                    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                                        {{userName}}
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0)" ui-sref="admin">Dashboard</a>
                                        <a class="dropdown-item" href="javasrcipt:void(0)" ng-click="logout()">Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </nav>
            <!-- mobilenavbar -->
            <div class="mobile-navbar">
                <div class="container-fluid">
                    <a ui-sref="home" style="display: inline;"><h3 style="display: inline;">Store</h3></a>
                    <button style="float: right;" data-toggle="collapse" data-target="#mobMenu"><i class="fas fa-bars"></i></button>
                </div>
                <div id="mobMenu" class="collapse">
                    <input type="text">
                    <li class="list-group-item" ng-if="!isAuthenticated"><a href="javascript:void(0)" ui-sref="login">Login</a></li>
                    <ul class="list-group" ng-if="isAuthenticated&&userRole==='customer'">
                        <li class="list-group-item"><a href="javascript:void(0)" ui-sref="customerProfile">My Profile</a></li>
                        <li class="list-group-item"><a href="javasrcipt:void(0)" ui-sref="customerOrder">My Order</a></li>
                        <li class="list-group-item"><a href="javasrcipt:void(0)" ng-click="logout()">Logout</a></li>
                    </ul>
                    <ul class="list-group" ng-if="isAuthenticated&&userRole==='admin'">
                        <li class="list-group-item"><a href="javascript:void(0)" ui-sref="admin">Dashboard</a></li>
                        <li class="list-group-item"><a href="javasrcipt:void(0)" ng-click="logout()">Logout</a></li>
                    </ul>
                </div>
            </div> 
    `
}
export default navbarComponent;
