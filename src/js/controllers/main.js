//main.js
angular
  .module('app')
  .controller('formUpdateCtrl', formUpdateCtrl)
  .controller('updateDataCtrl', updateDataCtrl);


formUpdateCtrl.$inject = ['$scope', '$http', '$window'];
function formUpdateCtrl($scope, $http, $window) {
  var vm = this;
  $scope.routeUrl = 'http://localhost:8092';
  $scope.enableCustomerTableEdit = [];
  $scope.customerss = {
    "displayName": null,
    "name": null,
    "uuid": null,
    "version": null
  }

  $scope.order = {
    "name": null,
    "description": null,
    "orderset": null
  }

  _getFormData();

  function _getFormData() {
    this.route = $scope.routeUrl + '/file/getFormData';
    $http.get(this.route).then(function (response) {
      $scope.customers = response.data;
    });
  }

  $scope.saveCustomerValues = function (index) {
    $scope.enableCustomerTableEdit[index] = false;
    this.route = $scope.routeUrl + '/file/updateCustomerFormData';
    $http.post(this.route, $scope.customers).then(function (response) {
      $scope.customers = response.data;
    });
  }



  $scope.saveFormTable = function () {
    $scope.customers.push($scope.customerss);
    this.route = $scope.routeUrl + '/file/updateCustomerFormData';
    $http.post(this.route, $scope.customers).then(function (response) {
      $scope.customers = response.data;
    });
    $scope.addData = false;
  }


  $scope.deleteCustomerTable = function (index) {
    $scope.customers.splice(index, 1);
    this.route = $scope.routeUrl + '/file/updateCustomerFormData';
    $http.post(this.route, $scope.customers).then(function (response) {
      $scope.customers = response.data;
    });
  }

  $scope.saveOrder = function () {
    this.route = $scope.routeUrl + '/file/saveOrder';
    $http.post(this.route, $scope.order).then(function (response) {
      $scope.order = response.data;
    });
  }

  $scope.editCustomerTable = function (index) {
    $scope.enableCustomerTableEdit[index] = true;
  }


  $scope.cancelCustomerTable = function (index) {
    $scope.enableCustomerTableEdit[index] = false;
    _getFormData();
  }
}



updateDataCtrl.$inject = ['$scope', '$http', '$window', '$document'];
function updateDataCtrl($scope, $http, $window, $document) {

  /*  var vm = this;
   $scope.name = "Nishant";
   $scope.enableEdit = [];
   $scope.ind;
   $scope.customerRecord = null;
   $scope.addData = false;
   $scope.routeUrl = 'http://localhost:8080';
   $scope.attributeDetailss = {
     "attributeId": null,
     "displaySeq": null,
     "name": null,
     "type": null,
     "desc": null,
     "expression": null,
     "key": null,
     "partition": null,
     "dispName": null,
     "active": null,
     "length": null,
     "attrUnitType": null,
     "domain": null,
     "piiFlag": null,
     "cdeFlag": null,
     "precision": null,
     "scale": null,
     "nullFlag": null
   };
 
   _getDataForTable();
 
   function _getDataForTable() {
     this.route = $scope.routeUrl + '/file/getTableData';
     $http.get(this.route).then(function (response) {
       $scope.customerRecord = response.data;
       $scope.attributeDetails = response.data;
     });
   }
 
 
   $scope.editTable = function (index) {
     $scope.ind = index;
     $scope.enableEdit[index] = true;
   }
 
   $scope.updateTable = function (index) {
     $scope.enableEdit[index] = false;
     this.route = $scope.routeUrl + '/file/updateTableData';
     $http.post(this.route, $scope.attributeDetails).then(function (response) {
       $scope.customerRecord = response.data;
       $scope.attributeDetails = response.data;
     });
   }
 
   $scope.cancelTable = function (index) {
     $scope.enableEdit[index] = false;
     _getDataForTable();
   }
 
   $scope.deleteTable = function (index) {
     $scope.attributeDetails.splice(index, 1);
     this.route = $scope.routeUrl + '/file/updateTableData';
     $http.post(this.route, $scope.attributeDetails).then(function (response) {
       $scope.customerRecord = response.data;
       $scope.attributeDetails = response.data;
     });
     $scope.enableEdit[index] = false;
   }
 
   $scope.saveTable = function () {
     $scope.attributeDetails.push($scope.attributeDetailss);
     this.route = $scope.routeUrl + '/file/updateTableData';
     $http.post(this.route, $scope.attributeDetails).then(function (response) {
       $scope.customerRecord = response.data;
       $scope.attributeDetails = response.data;
     });
     $scope.addData = false;
   }
 
   $scope.enableAddData = function () {
     $scope.addData = true;
   }
 
   $scope.disableForm = function () {
     $scope.addData = false;
   } */

  angular.element($document).ready(function () {
    angular.element("#myModal").modal();
  });


  $scope.routeUrl = 'http://localhost:8092';
  $scope.enableEdit = [];
  $scope.courseDetailss = {
    "name": null,
    "description": null,
    "webReference": null
  };
  $scope.addData = false;

  _getDataForTable();

  function _getDataForTable() {
    this.route = $scope.routeUrl + '/file/getTableData';
    $http.get(this.route).then(function (response) {
      $scope.courses = response.data;
    });


    $scope.editTable = function (index) {
      console.log(index);
      $scope.enableEdit[index] = true;
    }


    $scope.cancelTable = function (index) {
      $scope.enableEdit[index] = false;
      _getDataForTable();
    }


    $scope.enableAddData = function () {
      $scope.addData = true;
    }

    $scope.disableForm = function () {
      $scope.addData = false;
    }


    $scope.saveTable = function () {
      $scope.courses.push($scope.courseDetailss);
      this.route = $scope.routeUrl + '/file/updateTableData';
      $http.post(this.route, $scope.courses).then(function (response) {
        $scope.courses = response.data;
      });
      $scope.addData = false;
    }

    $scope.updateTable = function (index) {
      $scope.enableEdit[index] = false;
      this.route = $scope.routeUrl + '/file/updateTableData';
      $http.post(this.route, $scope.courses).then(function (response) {
        $scope.courses = response.data;
      });
    }

    $scope.deleteTable = function (index) {
      $scope.courses.splice(index, 1);
      this.route = $scope.routeUrl + '/file/updateTableData';
      $http.post(this.route, $scope.courses).then(function (response) {
        $scope.courses = response.data;
      });
      $scope.enableEdit[index] = false;
    }

  }
}
