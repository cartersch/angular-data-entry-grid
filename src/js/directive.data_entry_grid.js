(function(){
    
    "use strict";
    
    //empty module that will be filled in by gulp-angular-concat
    angular.module('data-entry-grid-template',[]);
    
    angular.module("entry-grid", ['data-entry-grid-template'])
    .directive("entryGrid", dataEntryGrid);
    
    
    
    
    
    function dataEntryGrid(){
        return {
            restrict     : "E",
            replace      : false,
            scope        :{
                "initRows"   : "=",
                "formModel"  : "=",
                "entryTypes" : "="
            },
            controller   : ["$scope", dataEntryGridCtrl],
            controllerAs : "degc",
            templateUrl  : "data-entry-grid.html" 
        }
    }
    
    
    
    function dataEntryGridCtrl($scope){
                
        this.rows           = $scope.initRows || 5;
        
        this.formModel      = $scope.formModel || [];
        
        this.entryTypes     = $scope.entryTypes || [];
        
        this.labels         = Object.keys(this.entryTypes); 
        
        
        
        
        this.addRow = function(){
            this.rows++;
        };
        
        
        this.getRowCount = function(){
            return new Array(this.rows);
        };
        
        
        this.initializeFormData = function(){
            for(var i = 0; i < this.rows; i++){
                this.formModel[i] = {};
                
                for(var j = 0; j < this.labels.length; j++){
                    var item = this.labels[j];
                    
                    this.formModel[i][item] = "";
                   
                    
                }
                
            }
        };
        
        
        this.initializeFormData();
    
    }
    
    
}());