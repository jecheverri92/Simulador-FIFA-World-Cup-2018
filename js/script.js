
// MUNDIAL CONTROLLER

var worldCupController = (function(){   

    var datos;

    return {
        getDataGroups: function() {
        fetch("https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.groups.json")
        .then(res => res.json()).then(res => {
            console.log(res.groups);
            res.groups.forEach(g => {
                
                UIController.addListItem(g);
            })
            
         })
    
        },

         displayData: function() {
             console.log(datos);

         }
    }

   


})(); 


// UI CONTROLLER
var UIController = (function() {
    var DOMStrings = {
        gruopLabel: ".group__title",
        teamLabel: ".group__title", 
        divGroups: "#grupos" 
    }

    return {
        addListItem: function(obj) {
            var html, newHtml, element;

            element = document.querySelector(DOMStrings.divGroups);
            html =`<div class ="group">
            <details><summary class ="group__title">${obj.name}</summary>
            <ul class ="group__teams">
            
                <li class="group__team"><i class="flag-icon flag-icon-ru "></i>${obj.teams[0].name}</li>
                <li class="group__team"><i class="flag-icon flag-icon-ru "></i>${obj.teams[1].name}</li>
                <li class="group__team"><i class="flag-icon flag-icon-ru "></i>${obj.teams[2].name}</li>
                <li class="group__team"><i class="flag-icon flag-icon-ru "></i>${obj.teams[3].name}</li>
            
            </ul></details>
            </div>`
           
            // Replace the placeholder text with some actual data
            element.insertAdjacentHTML("beforeEnd", html);
        
        }
    



    }
})(); 


// GLOBAL APP CONTROLLER

var controller = (function(wCupCtrl, UICtrl) {


    var  data;

    var addItems = function(datos){
        UICtrl.addListItem()

    }

    return {
        init: function() {
            // 1. Obtener JSON
            wCupCtrl.getDataGroups();

            console.log(data);
            // 2. Update UI

        }
    }
})(worldCupController, UIController);

controller.init();