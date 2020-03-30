var appComponent={
    controller:"AppController",
    template:`
            <nav class="navbar">
                <div class="container">
                    <a ui-sref="home">
                        <img src="images/storelogo.png" class="logo"></img>
                    </a>
                    <div class="search-bar">
                        <input type="text" ng-model="searchQuery"></input>
                        <a ui-sref="search({productName:searchQuery})">Search</a>
                    </div>
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