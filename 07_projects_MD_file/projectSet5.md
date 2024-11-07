# Projects related to Dom

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)  


# Solution code

## project 5


```html
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="styleparct.css">
</head>
<body>
    <h1>START SHOULD CHANGE THE BACKGROUND COLOR EVERY SECOND</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>

  <script src="scriptpract.js"></script>
</body>
</html> 

```


```Css
    *{
    margin: 0;
    padding: 0;
}


body{
    background-color: black;
    color: white;
    justify-content: center;
    text-align: center;
    margin-top: 5rem;
}

#start{
    padding: 0.5rem 1rem;
    margin: 2rem;
    font-size: 2rem;
    border: none;
    border-radius: 1rem;
    background-color: grey;
    
}

#stop{
    padding: 0.5rem 1rem;
    margin: 2rem;
    font-size: 2rem;
    border: none;
    border-radius: 1rem;
    background-color: grey;
    
} 




```


```javascript
    const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
      color += hex[Math.floor(Math.random() *16)];
    }
    return color;
  }
  
  let intervalId;
  
  const startChangeColor =  function(){
    if(!intervalId){
      intervalId = setInterval(changeBgColor, 1000);
  
      function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
      }
    }
  };

  
  const stopChangeColor = function(){
    clearInterval(intervalId)
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangeColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangeColor);
  


```