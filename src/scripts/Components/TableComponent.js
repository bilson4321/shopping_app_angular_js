var tableComponent={
    bindings:{
        heading:'=',
        action:'=',
        data:'=',
        editlink:'@',
        loading:'=',
        deletelink:'&'
    },
    template:`
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th ng-repeat='x in $ctrl.heading'>{{x | uppercase}}</th>
                    <th ng-if='$ctrl.action'>Action</th>
                </tr>
            </thead>
            <tbody ng-show="!$ctrl.loading">
                <tr ng-hide="$ctrl.data.length>0"><td><h1>No data to show</h1></td></tr>
                <tr ng-repeat='c in $ctrl.data'>
                    <td ng-repeat='x in $ctrl.heading'>{{c[x]}}</td>
                    <td ng-if='$ctrl.action'><a href="javascript:void(0)" ng-click='linkGenerate(c._id)'>Edit</a> |
                    <a href='' ng-click="$ctrl.deletelink({id:c._id})"> Delete</a></td>
                </tr>
            </tbody>
        </table>
    `,
    controller:['$scope','$state',function($scope,$state){
        var self=this;
        $scope.linkName="";

        $scope.linkGenerate=function(id)
                        {   
                            $state.go($scope.linkName,{"id":id});
                        }
        this.$onInit=function(){
            console.log("hello",this);
            $scope.isLoading=this.loading;
        }
        this.$onChanges=function(changes)
        {
            if(changes.editlink)
            {
                $scope.linkName=changes.editlink.currentValue;
            }
        }
    }]
}

export default tableComponent;