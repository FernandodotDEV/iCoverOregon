const animatedElements=document.querySelectorAll('.animated')

window.addEventListener('scroll',checkPositions)

function checkPositions(){
	console.log('scrolling')
	animatedElements.forEach((item,i)=>{
		const position=item.getBoundingClientRect()
		if(position.top+position.height/2<=window.innerHeight){
			item.style['animation-play-state']="running";
			if(i+1===animatedElements.length){
				window.removeEventListener('scroll',checkPositions)
			}
		}
	})
}


