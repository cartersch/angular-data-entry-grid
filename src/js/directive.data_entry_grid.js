(function(){
    
    "use strict";
    
    //empty module that will be filled in by gulp-angular-concat
    angular.module('data-entry-grid-template',[]);
    
    angular.module("entry-grid", ['data-entry-grid-template'])
    .directive("entryGrid", dataEntryGrid);
    
    
    
    
    
    function dataEntryGrid(){
        return {
            restrict         : "E",
            replace          : false,
            scope            : {},
            controller       : [dataEntryGridCtrl],
            bindToController : {
                "rowCount"   : "=",
                "formModel"  : "=",
                "entryTypes" : "="
            },
            controllerAs     : "degc",
            templateUrl      : "data-entry-grid.html" 
        }
    }
    
    
    
    function dataEntryGridCtrl(){
                
        this.init = function(){
            this.rowCount   = this.rowCount || 5;
            this.entryTypes = this.entryTypes || {};
            this.formModel  = this.formModel || {};
            this.labels     = Object.keys(this.entryTypes); 
            
            this.initializeFormData();
            
        }
        
        this.addRow = function(){
            this.rowCount++;
        }
        
        this.getRowCount = function(){
            return new Array(this.rowCount);
        };
        
        
        this.initializeFormData = function(){
            for(var i = 0; i < this.rowCount; i++){
                this.formModel[i] = {};
                
                for(var j = 0; j < this.labels.length; j++){
                    var item = this.labels[j];
                    
                    this.formModel[i][item] = "";
                   
                    
                }
                
            }
        };
        
        
        this.init();
    
    }

    
    
}());