var sidebarComponent={
    controller:"NavbarController",
    template:`
    <!-- mobilenavbar -->
    <div class="mobile-navbar">
       <div class="container-fluid">
           <a href="#" style="display: inline;"><h3 style="display: inline;">Store</h3></a>
           <button style="float: right;" data-toggle="collapse" data-target="#mobMenu"><i class="fas fa-bars"></i></button>
       </div>
       <div id="mobMenu" class="collapse">
           <ul class="list-group">
               <li class="list-group-item"><a href="#">My Profile</a></li>
               <li class="list-group-item"><a href="#">My Order</a></li>
               <li class="list-group-item"><a href="#">Logout</a></li>
           </ul>
       </div>
   </div>
   <div class="wrapper-side">
       <div class="container-fluid">
           <div class="row">
               <div class="sidebar">
                   <div class="sidebar-header">
                       <h3>{{userName}}</h3>
                   </div>
                    <a href="javascript:void(0)" ui-sref="addProduct">Add Product</a>
                    <a href="javascript:void(0)" ui-sref="viewProduct">View Product</a>
                    <a href="javascript:void(0)" ui-sref="addCategory">Add Category</a>
                    <a href="javascript:void(0)" ui-sref="viewCategory">View Category</a>
                    <a href="javascript:void(0)" ng-click="logout()">Logout</a>
               </div>
    `
}
export default sidebarComponent;