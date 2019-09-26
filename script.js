window.addEventListener('scroll',checkPositions)

const navbar=document.querySelector('nav');

const animatedElements=document.querySelectorAll('.animated')


function checkPositions(){
	console.log('scrolling')
	window.scrollY===0 ? navbar.classList.remove('navChange') : navbar.classList.add('navChange')
	animatedElements.forEach((item,i)=>{
		const position=item.getBoundingClientRect()
		if(position.top+position.height/2<=window.innerHeight){
			item.classList.add('onScreen')
		}
	})
}

function smoothScroll(location){
	document.querySelector(location).scrollIntoView({behavior:'smooth'})
}


