# Projects related to Dom

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)  


# Solution code

## project 2


``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI calculater</title>
    <link rel="stylesheet" href="styleparct.css">
</head>
<body>
    <div class="container">
        <h1>BMI Calculator</h1>
        <form>
            <p><label>Height in CM</label><input type="text" id="height"></p>
            <p><label >Weight in KG</label><input type="text" id="weight"></p>

            <button>Calculate</button>
            <div class="results">results</div>
            <div class="weight-guide">
                <h3>BMI Weight Guide</h3>
                <p>Under weight = Less than 18.6</p>
                <p>Normal range = 18.6 and 24.9</p>
                <p>Over weight = greater than 24.9</p>
            </div>
        </form>
    </div>
    

    <script src="scriptpract.js"></script>
</body>
</html>

```

``` css
*{
    margin: 0;
    padding: 0;
}

body{
    justify-content: center;
    text-align: center;
    background-color: grey;
}



#height{
    margin-top: 1rem;
    margin: 1rem;
    border: none;
    border-radius: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
    background-color: antiquewhite;
   
    
}


#weight{
    margin: 1rem;
    border: none;
    border-radius: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
    background-color: antiquewhite;
}


label{
    font-size: 1.4rem;
}

button{
   
    font-size: 1.2rem;
    height: 2rem;
    width: 7rem;
    border: none;
    border-radius: 1rem;
    background-color: black;
    color: white;
}

.results{
    margin: 2rem;
    font-size: 2rem;
}


.weight-guide{
    margin: 2rem;
    font-size: 1.5rem;
  
    
}

h3{
    font-size: 1.8rem;
    margin-bottom: 1rem;
}


```


```javascript
let form = document.querySelector('form')
//this usercase will give you empty
//const height = parseInt(document.queruSelector('#height').value)


form.addEventListener('submit', function(e)  {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('.results');

  if(height === '' || height < 0 || isNaN(height)) {
   results.innerHTML = `please give a valid height ${height}`

  }else if(weight === '' || weight < 0 || isNaN(weight)){
   results.innerHTML = `please give a valid weight ${weight}`

  }else if(weight < 18.6){
    results.innerHTML = `please enter weight value, greater than 18.6 `

  }else if(weight > 24.9){
    results.innerHTML = `Please enter weight value, less than 24.9`

  } else if(results){
   const bmi = (weight/((height*weight)/10000)).toFixed(2)
   // show th results
   results.innerHTML = `<span> ${bmi} </span>`

  }
  
})

```