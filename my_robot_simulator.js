function finalposition(move)
        {
            if (move == 2){
             return "south"
             }

            if (move == 0){
                return "north"
            }
            if (move == 1){
                return "east"
            }
            if (move == 3){
                return "west"
            }
        } 
        
    function my_robot_simulator(move){

    var index = 0;
    var x = 0;
    var y = 0;
    var direction = 0;
    /* direction at 0 is north
        direction at 1 is east
        direction at 2 is south
        direction at 3 is west*/

    
    while (index < move.length) {
        //console.log(move.length)
        if (direction == 0){  // 0 = north
             if (move[index] == "L") {
                direction = 3; // facing west
            }
             if (move[index] == "R") {
                direction = 1; // facing east
            }
             if (move[index] == "A") {
                y--
                
            }
        }
        else if (direction == 2){ // 2 = south
                if (move[index] == "R") { 
                    direction = 3; // facing west
                }
                if (move[index] == "L") {
                    direction = 1; // facing east
                }
                if (move[index] == "A") {
                y++
                }
            }
        
         else if (direction == 1){ // 1 = east
             if (move[index] == "L") { 
                direction = 0; // facing north
            }
             if (move[index] == "R") {
                direction = 2; // facing south
            }
             if (move[index] == "A") {
                x++
            }
        }
        else if (direction == 3){ //3 = west
             if (move[index] == "L") { 
                direction = 2; // facing south
            }
             if (move[index] == "R") {
                direction = 0; // facing north
            }
             if (move[index] == "A") {
                //need to update x or y
                x--
            }
        
        }
        index++ 
    }
        var a = finalposition(direction)
        let resultString = `{x: ${x}, y: ${y}, bearing: '${a}'}`;
        return resultString;
        }