# Projects related to Dom

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)  


# Solution code

## project 3


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
  <div class="center">
    <div class="banner"><span>Your local time</span></div>
    <div class="clock"></div>
  </div>

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
    background-color:antiquewhite ;
    color: brown ;
    
}

.center{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
  

}


.clock{
  background-color: black;
  padding: 1rem  1rem;
  margin: 0.2rem;
  border: none;
  border-radius: 1rem;
  font-size: 3rem;
}

.banner{
    font-size: 1.8rem;
    font-style: oblique;
}


```


```javascript

const clock = document.querySelector('.clock')
//const clock = document.getElementById('.clock')

setInterval( () => {
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
    
}, 1000);


```