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
angular.module("data-entry-grid-template").run(["$templateCache", function($templateCache) {$templateCache.put("data-entry-grid.html","<div>\n    <div>\n        <button type=\"button\" \n                class=\"btn btn-lg btn-info btn-add-row\"\n                ng-click=\"degc.addRow()\">\n                Add Row</button>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table table-responsive\">\n            <thead>\n                <tr>\n                    <th ng-repeat=\"label in degc.labels\">{{label}}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr ng-repeat=\"i in degc.getRowCount() track by $index\">\n                    <td ng-repeat=\"l in degc.labels track by $index\">\n                        \n                        <input class=\"form-control\"\n                               type=\"{{degc.entryTypes[l][\'type\']}}\"\n                               ng-required=\"degc.entryTypes[l][\'required\']\"\n                               ng-model=\"degc.formModel[$parent.$index][l]\"/>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div>     \n    </div>\n</div>");}]);