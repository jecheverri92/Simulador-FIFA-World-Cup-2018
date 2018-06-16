
// MUNDIAL CONTROLLER


var worldCupController = (function(){   
    var getDataGroups = function() {
        fetch("https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.groups.json")
        .then(res => res.json()).then(data => {
            console.log(data.groups);
             })
    }
})(); 


// UI CONTROLLER
var UIController = (function() {


})(); 


// GLOBAL APP CONTROLLER

var controller = (function(wCupCtrl, UICtrl) {

    var ctrlAddItem = function() {

        // 1. Obtener JSON

        // 2. Add item to the UI
    }
})(worldCupController, UIController);