function Food(gamesnake) {
    var self = this;
    // alert("shiwu");
    //食物的坐标
    do {
        this.row = parseInt(Math.random() * gamesnake.row);
        this.col = parseInt(Math.random() * gamesnake.col);
    } while((function(){
        for (var i = 0; i < gamesnake.snake.body.length; i++) {
            if(gamesnake.snake.body[i].row==self.row&&gamesnake.snake.body[i].col == self.col){
                return true;
            }
        }
        return false;
    })());
    console.log(this.row, this.col);
}

Food.prototype.render = function () {
    game.setHTML(this.row, this.col, "♥");
}