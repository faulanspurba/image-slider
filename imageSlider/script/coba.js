

    const span = document.getElementsByTagName('span');
	const product = document.getElementsByClassName('product');
	let l = 0;
	const movePer = 25.34, maxMove = 203;
	// // mobile_view	
	// const mob_view = window.matchMedia("(max-width: 768px)");
	// if (mob_view.matches) {
	// 	movePer = 50.36;
	// 	maxMove = 504;
	// }

    const left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
				i.style.left = `-${l}%`;
		}
	}
	const right_mover = ()=>{
		l = l + movePer;
        
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = `-${l}%`;
		}
	}

	
	span[1].addEventListener('click', ()=>{
        right_mover();
        console.log('next')
    });
	span[0].addEventListener('click', left_mover());

    console.clear()
    
    