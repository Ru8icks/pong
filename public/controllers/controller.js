var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    var animate = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) { window.setTimeout(callback, 1000/60) };

    var canvas = document.getElementById('myCanvas');
    var width = 400;
    var height = 600;
    canvas.width = width;
    canvas.height = height;
    //.style.left = "750px";
    //canvas.style.top = "100px";
    //canvas.style.position = "absolute";
    var context = canvas.getContext('2d');
    var player = new Player();
    var computer = new Computer();
    var ball = new Ball();



    window.onload = function() {
        document.body.appendChild(canvas);
        animate(step);
    };

    var step = function() {
        update();
        render();
        animate(step);
    };
    var update = function() {
        ball.update(10);



    };

    var render = function() {
        context.fillStyle = "#000000";

        context.fillRect(0, 0, width, height);
        player.render();
        computer.render();
        ball.render();
    };
    function Paddle(x, y, width, height, x_speed, y_speed){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.x_speed=x_speed;
        this.y_speed=y_speed;
        console.log(y_speed)
    }

    Paddle.prototype.render = function(){
        context.fillStyle="#ffffff";
        context.fillRect(this.x, this.y,this.width, this.height);

        console.log(this.x +"argh"+ this.y);
    };
    function Player(){
        this.paddle1 = new Paddle(175, 580, 50, 10,0,0);
    }
    function Computer(){
        this.paddle2= new Paddle(175, 10, 50, 10,0,0);
    }
    function Ball(){
        this.ball = new Paddle(200, 285, 10,10,0,3);

    }
    Player.prototype.render = function(){
        this.paddle1.render();
    };
    Computer.prototype.render = function(){
        this.paddle2.render();
    };


    Ball.prototype.render= function(){
        console.log("here")
        this.ball.render();
    };
    Ball.prototype.update = function(){
        console.log("here update");
        this.ball.x += this.ball.x_speed;
        this.ball.y += this.ball.y_speed;



    };



}]);



