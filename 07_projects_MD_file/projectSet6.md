# Projects related to Dom

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)  


## ProjectName: Keyboard Check


# Solution code

## project 6


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
  <div class="project">
    <div class="insert">
      <div class="key">Press the key and watch magic</div>
    </div>
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
    background-color: grey;
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 8rem;
}


.project{
    /* background-color:white; */
    color: black;
    height: 60vh;
    width: 60vh;
   
    
}

.insert{
    height: 60vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* background-color: yellow; */
}

table, th, td{
    /* background-color: red; */
    padding: 1rem;
    border: solid, 2px;
    border-radius: 5px;
    font-size: 1.5rem;
    background-color: black;
    color: white;
} 



```


```javascript
const insert = document.querySelector('.insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'color'> 
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>

  </div>

  `
})

```