function Snake() {
    // alert("shelei");
    //蛇的初始化身体
    this.body = [
        { "row": 3, "col": 5 },
        { "row": 3, "col": 4 },
        { "row": 3, "col": 3 },
        { "row": 3, "col": 2 }
    ];
    //this.render();
    //信号量，设置的运动方向
    this.direction = "R";
    //即将改变的方向,为了防止出现原地掉头的情况
    this.willDirection = "R";
    //this.changeDirection();

}
Snake.prototype.update = function () {
    
    this.direction = this.willDirection;
    
    switch (this.direction) {
        case "R":
            //向右移动
            this.body.unshift({ "row": this.body[0].row, "col": this.body[0].col + 1 });
            break;
        case "D":
            //向下移动
            this.body.unshift({ "row": this.body[0].row + 1, "col": this.body[0].col });
            break;
        case "L":
            //向左移动
            this.body.unshift({ "row": this.body[0].row, "col": this.body[0].col - 1 });
            break;
        case "U":
            //向上移动
            this.body.unshift({ "row": this.body[0].row - 1, "col": this.body[0].col });
            break;
    }
    //死亡的判定,撞到的表格的边缘的部分
    if(this.body[0].col > game.col-1||this.body[0].row > game.col-1||this.body[0].col<0||this.body[0].row<0){
        // console.log("ssssssss");
        this.body.shift();
        alert("游戏结束，你所获得分数为"+game.socre);
        
        clearInterval(game.timer);
    }
    //自己撞到自己的时候也会判定死亡
    for (let i = 1; i < this.body.length; i++) {
       if(this.body[0].col==this.body[i].col&&this.body[0].row==this.body[i].row){
           alert("游戏结束，你所获得分数为"+game.socre);
           
           clearInterval(game.timer);
       }
    }
    //蛇吃食物
    if(this.body[0].row == game.food.row && this.body[0].col == game.food.col){
        //alert("吃到食物");
          game.food = new Food(game);
          //让帧编号归零，因为蛇会窜一下
          game.f = 0;
          game.socre++;
    }else{
        this.body.pop();
    }
    
    
    // console.log(this.body);

}
//蛇的方向改变，防止的是再一次渲染之前会出现蛇掉头的情况
Snake.prototype.changeDirection = function (event) {
    this.willDirection = event;
}
Snake.prototype.render = function () {
    // console.log(game);
    //蛇的渲染
    game.setColor(this.body[0].row, this.body[0].col, 'pink');
    for (let i = 1; i < this.body.length; i++) {
        game.setColor(this.body[i].row, this.body[i].col, 'skyblue');
    }
}