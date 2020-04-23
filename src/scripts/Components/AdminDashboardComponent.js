var adminDashboardComponent={
    controller:'AdminDashboardController',
    template:`
        <div class="container">
            <h3 class="my-4">Admin dashboard</h3>
            <div class="row">
                <div class="col-md-12">
                    <div class="card-deck">
                            <div class="card bg-primary">
                            <div class="card-body text-center">
                                <p class="card-text">Users {{users.length}}</p>
                            </div>
                            </div>
                            <div class="card bg-warning">
                            <div class="card-body text-center">
                                <p class="card-text">Orders {{orders.length}}</p>
                            </div>
                            </div>
                            <div class="card bg-success">
                            <div class="card-body text-center">
                                <p class="card-text">Products {{products.length}}</p>
                            </div>
                            </div> 
                    </div>
                </div>
            </div>
            <div class="row my-4">
                <div class="col-md-6">
                    <h3>Order History</h3>
                    <canvas id="line" class="chart chart-line" chart-data="orderdata"
                        chart-labels="labels" chart-options="options"
                        chart-dataset-override="datasetOverride">
                    </canvas>
                </div>
                <div class="col-md-6">
                    <h3>New User History</h3>
                    <canvas id="line" class="chart chart-line" chart-data="userdata"
                        chart-labels="labels" chart-options="options"
                        chart-dataset-override="datasetOverride">
                    </canvas>
                </div>
            </div>
        </div>
    `
}
export default adminDashboardComponent;