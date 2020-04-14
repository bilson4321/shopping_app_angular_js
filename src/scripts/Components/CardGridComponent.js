var cardGridComponent={
    controller:'CardGridController',
    bindings:{
        displaylist:'<'
    },
    template:`
        <div class="container">
            <div class="card-columns">
                <div class="card" ng-repeat='i in filteredItems'><card item='i'></card></div>
            </div>
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item" ng-repeat='x in noOfPage'><a class="page-link" ng-click='changeCurrentPage(x)'>{{x}}</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </div>
    `
}
export default cardGridComponent;