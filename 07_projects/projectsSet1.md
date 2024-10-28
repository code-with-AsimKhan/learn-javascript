# Projects related to Dom

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)  


# Solution code

## project 1

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