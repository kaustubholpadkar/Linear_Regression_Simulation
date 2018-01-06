var X = [];
var Y = [];

var T;
var learningRate = 0.00001;

function setup () {

  createCanvas(600, 600);
  T = [Math.random(height), 4.0];
  background(51);
}

function draw () {
  background(51);
  plotData();
  if (X.length >= 2) {
    gradientDescent();
    fit();
    // console.log(cost());
  }

}

function mouseClicked () {
  X.push(mouseX);
  Y.push(mouseY);
}

function gradientDescent () {
  T[0] -= learningRate * gradient(0) * 10000;
  T[1] -= learningRate * gradient(1);
}

function gradient (n) {
  ans = 0.0;
  for (var i = 0; i < X.length; i++) {
    if (n == 0) {
      ans += (h(X[i]) - Y[i]);
    } else if (n == 1) {
      ans += (h(X[i]) - Y[i]) * X[i];
    }
  }
  // console.log(ans);
  return ans / X.length;
}

function cost () {
  ans = 0.0;
  for (var i = 0; i < X.length; i++) {
    ans += (h(X[i]) - Y[i]) * (h(X[i]) - Y[i]);
  }
  return ans / X.length;
}

function fit () {
  x1 = 0;
  y1 = Math.trunc(h(x1));
  x2 = width;
  y2 = Math.trunc(h(x2));

  stroke(255);
  line(x1, y1, x2, y2);
}

function h (x) {
  return T[0] + T[1] * x;
}

function plotData () {
  for (var i = 0; i < X.length; i++) {
    ellipse(X[i], Y[i], 10);
  }
}

function setRadomly () {
  T[0] = Math.random(10);
  T[1] = Math.random(20);
}
