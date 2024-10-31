# Projects related to Dom

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)  


# Solution code

## project 1


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript Background Color switcher</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Color Scheme Switcher</h1>
    <button class="button" id="grey"></button>
    <button class="button" id="white"></button>
    <button class="button" id="blue"></button>
    <button class="button" id="yellow"></button>

    <h2>
        Try Clicking On Of The Colors Above
        <span>To Change The Background Color Of This Page!</span>
    </h2>
    
    <script src="script.js"></script>
</body>
</html>


```


```Css
*{
    margin: 0;
    padding: 0;
}

body{
    justify-content: center;
    text-align: center;

}


.button{
    height: 18vmin;
    width: 18vmin;
    
}

#grey{
    background-color: grey;
}
#white{
    background-color: green;
}
#blue{
    background-color: blue;

}

#yellow{
    background-color: yellow;
}

h1{
    padding-top: 3rem;
    margin: 1.5rem;

}

h2{
    padding-top: 2em;
}



```


```javascript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach( (button) => {
    button.addEventListener("click", (e) => {
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;// or 'grey'
            
        }else if(e.target.id === 'white'){
            body.style.backgroundColor = 'green'

        }else if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'

        }else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
    })
})



```