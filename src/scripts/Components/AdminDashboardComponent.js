var adminDashboardComponent={
    controller:'AdminDashboardController',
    template:`
        <div class="container">
            <h3 class="my-4">Admin dashboard</h3>
            <div class="row my-4">
                <div class="col-md-6">
                    <h3>New Order</h3>
                    <cjs-bar dataset="someData" options="someOptions" segment-stroke-width="5"></cjs-bar>
                </div>
                <div class="col-md-6">
                    <h3>test </h3>
                </div>
            </div>
        </div>
    `
}
export default adminDashboardComponent;