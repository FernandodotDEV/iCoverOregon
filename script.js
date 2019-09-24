const animatedElements=document.querySelectorAll('.animated')

const checkInterval=window.setInterval(checkPositions,500)

function checkPositions(){
	console.log('checking')
	animatedElements.forEach((item,i)=>{
		const position=item.getBoundingClientRect()
		if(position.top+position.height/2<=window.innerHeight){
			item.style['animation-play-state']="running";
			if(i+1===animatedElements.length){
				window.clearInterval(checkInterval)
			}
		}
	})
}


