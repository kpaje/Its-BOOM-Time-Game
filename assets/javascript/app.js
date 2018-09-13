$(document).ready(function() {
    let wireSet= [];

    var game = {
        addWire: function(wireColor) {
            wireSet.push({
            wireColor: wireColor,
            completed: false
            });
        },

        deleteWire: function(position) {
            wireSet.splice(position, 1);
        },

        changeWire: function(position, wireColor) {
            wireSet[position].wireColor = wireColor;
        },

        toggleCompleted: function(position) {
            var wire = wireSet[position];
            wire.completed = !wire.completed;
        },

        toggleAll: function() {
            var totalWires = wireSet.length;
            var completedWires = 0;
            
            // Get number of completed wires.
            for (var i = 0; i < totalWires; i++) {
                if (wireSet[i].completed === true) {
                    completedWires++;
                }
            }
            
            // Case 1: If everything’s true, make everything false.
            if (completedWires === totalWires) {
                for (var i = 0; i < totalWires; i++) {
                    wireSet[i].completed = false;
            }

            // Case 2: Otherwise, make everything true.
            } else {
                for (var i = 0; i < totalWires; i++) {
                    wireSet[i].completed = true;
                }      
            }
        },
    };

    var handlers = {
        addWire: $('.addWire').click(function() {
            var inputWire = $('#inputWire').val();
            game.addWire(inputWire);
            inputWire.value = '';
            view.displayWires();
        }),

        deleteWire: $('.deleteWire').click(function() {
            var deleteWirePosition = $('#deleteWirePosition').val();
            game.deleteWire(deleteWirePosition);
            deleteWirePosition = '';
            view.displayWires();
        }),

        changeWire: $('.changeWire').click(function() {
            var changeWirePosition = $('#changeWirePosition').val();
            var changeWireColor = $('#changeWireColor').val();
            game.changeWire(changeWirePosition, changeWireColor);
            changeWirePosition.value = '';
            changeWireColor.value = '';
            view.displayWires();
        }),

        toggleCompleted: $('.toggleCompleted').click(function() {
            var toggleCompletedPosition = $('#toggleCompletedPosition').val();
            game.toggleCompleted(toggleCompletedPosition);
            toggleCompletedPosition.value = '';
            view.displayWires();
        }),

        toggleAll: $('.toggleAll').click(function() {
            game.toggleAll();
            view.displayWires();
        }),  
    };

    var view = {
        displayWires: function() {
            var wiresUl = document.querySelector('ul');
            wiresUl.innerHTML = '';
            for (var i = 0; i < wireSet.length; i++) {
            var wireLi = document.createElement('li');
            var wire = wireSet[i];
            var wireTextWithCompletion = '';
        
            if (wire.completed === true) {
                wireTextWithCompletion = '(x) ' + wire.wireColor;
            } else {
                wireTextWithCompletion = '( ) ' + wire.wireColor;
            }
            
            wireLi.textContent = wireTextWithCompletion;
            wiresUl.appendChild(wireLi);
            }  
        }
    };

});