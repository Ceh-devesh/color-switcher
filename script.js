// // create new element
// let div = document.getElementById('parent')
// let newDiv = document.createTextNode('friday')
// div.appendChild(newDiv);

// // replace element
// let edit = document.querySelector('div:nth-child(2)')
// const replaced = document.createElement('div')
// replaced.textContent = 'DoomsDay';
// edit.replaceWith(replaced)

// let remove = document.querySelector('div:last-child')
// remove.remove()

const btns = document.querySelectorAll('.btn')
const body = document.querySelector('body')

btns.forEach(function(btns){
    console.log(btns)
    btns.addEventListener('click', function(e){
        console.log(e.target)
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
            
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id

        }
        if(e.target.id === 'Cyan-Blue'){
            body.style.backgroundColor = '#3085C3'

        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = '#F4F27E'

        }
        if(e.target.id === 'FFC7EA'){
            body.style.backgroundColor = '#FFC7EA'

        }
    })
})
let tl = gsap.timeline()

tl.from('h1',{
    y:-100,
    duration:1,
    
    
})
tl.from('#grey',{
    y:-250,
    duration:1,
    stagger:0.2,
    opacity:0
})
tl.from('#white',{
    y:-300,
    // duration:1,
    stagger:0.5,
    opacity:0
})
tl.from('#Cyan-Blue',{
    y:-300,
    // duration:1
    stagger:0.5,
    opacity:0
})
tl.from('#yellow',{
    y:-800,
    stagger:0.5,
    opacity:0
})
tl.from('#FFC7EA',{
    y:-900,
    // duration:1
    stagger:0.5,
    opacity:0
})


