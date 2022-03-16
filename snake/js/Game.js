function Game() {
    //alert("i am game!!!!");
    this.row = 20; //行数
    this.col = 20; //列数
    this.init(); //初始化节点
    //this.setColor();
    //分数
    this.socre = 0;
    //实例化蛇
    this.snake = new Snake();
    //初始化食物
    this.food = new Food(this);
    //键盘事件监听
    this.bindEvent();
    //执行定时器任务
    this.start();
}
Game.prototype.init = function () {
    this.dom = document.createElement("table");
    var tr, td;
    //遍历行和列上述
    for (let i = 0; i < this.row; i++) {
        //遍历行，建立节点上述
        tr = document.createElement("tr");
        for (let j = 0; j < this.col; j++) {
            td = document.createElement("td");

            tr.appendChild(td);
        }
        //追加节点上述
        this.dom.appendChild(tr);
    }
    //表格上述
    document.getElementById("app").appendChild(this.dom);
}
Game.prototype.clear = function () {
    //遍历表格，擦除画布
    for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.col; j++) {
            this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].style.background = '#333';
            this.dom.getElementsByTagName("tr")[i].getElementsByTagName("td")[j].innerHTML = "";
        }
    }
}
//设置颜色的方法
Game.prototype.setColor = function (row, col, color) {
    //让表格的第几行第几列，设置什么颜色
    this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].style.background = color;
}
//渲染食物
Game.prototype.setHTML = function(row,col,html){
    this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[col].innerHTML = html;
}
//设置键盘的事件监听
Game.prototype.bindEvent = function () {
    var self = this;
    //键盘事件
    document.onkeydown = function (event) {
        //console.log(event.keyCode,'event');
        switch (event.keyCode) {
            //按下左键盘
            case 37:
                //如果目前向右走的，那么不能向左走 ，以此类推
                if (self.snake.direction == 'R') return;
                self.snake.changeDirection('L');
                break;
            //按下上建
            case 38:
                if (self.snake.direction == 'D') return;
                self.snake.changeDirection('U');
                break;
            //右键
            case 39:
                if (self.snake.direction == 'L') return;
                self.snake.changeDirection('R');
                break;
            //下键
            case 40:
                if (self.snake.direction == 'U') return;
                self.snake.changeDirection('D');
                break;
        }
    }
}
Game.prototype.start = function () {
    //帧编号
    this.f = 0;
    this.timer = setInterval(function () {
        game.f++;
        //清除屏幕
        document.getElementById("f").innerHTML = "帧标号:"+game.f;
        //渲染分数
        document.getElementById("score").innerHTML = "分数:"+game.socre;
        game.clear();
        
        //蛇的运动
        //舍得更新速度，当蛇边长的时候，速度要加快
        var during = game.snake.body.length < 30 ? 30 - game.snake.body.length : 1;
        game.f % during == 0 && game.snake.update();
        
        //渲染蛇
        game.snake.render();
        //渲染食物
        game.food.render();

    }, 20)
}