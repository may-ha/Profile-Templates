const skillsBars = document.querySelectorAll('.skill-bar');
skillsBars.forEach(function(skillCont){
    // we get the value 
    const theVal = skillCont.querySelector('.bar span').getAttribute('data-val')

    // set the value as text and width of bar span 
    skillCont.querySelector('.value').textContent = theVal
    skillCont.querySelector('.bar span').style.width = theVal
});



const contentsBtns = document.querySelectorAll('.three-option > div')
const contents = document.querySelectorAll('.content')

contentsBtns.forEach(function(btn){
    btn.addEventListener('click',function(){


        contentsBtns.forEach(function(b){
            b.classList.remove('active-btn')
        });

        const contentClass = btn.getAttribute('data-content');

        contents.forEach(function(content){
            content.classList.remove('active-content')
        })

        btn.classList.add('active-btn')
        document.querySelector(contentClass).classList.add('active-content')
    });
});
