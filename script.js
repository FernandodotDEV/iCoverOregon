const navbar=document.querySelector('nav');

const animatedElements=document.querySelectorAll('.animated')

window.addEventListener('scroll',checkPositions)

function checkPositions(){
	console.log(navbar,window.scrollY)
	window.scrollY===0 ? navbar.classList.remove('navChange') : navbar.classList.add('navChange')
	animatedElements.forEach((item,i)=>{
		const position=item.getBoundingClientRect()
		if(position.top+position.height/2<=window.innerHeight){
			item.style['animation-play-state']="running";
		}
	})
}


