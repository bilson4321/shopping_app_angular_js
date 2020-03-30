var searchComponent={
    controller:"SearchController",
    template:`
                <div style="float:right;">
                <input type="text" ng-model="searchQuery"></input>
                <a ui-sref="search({productName:searchQuery})">Search</a>
                </div>
                `
}
export default searchComponent;
