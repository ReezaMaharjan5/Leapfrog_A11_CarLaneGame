// const mainContainer = document.getElementById("container");
// const carContainer = document.querySelector(".carUser");
// const roadSection = document.querySelector(".roadBackground");

let score = 0;

const roadarea=document.querySelector('.roadBackground');

		let player = {step: 3};
		let keys = {ArrowUp: false, ArrowDown:false, ArrowLeft:false, ArrowRight:false};
		document.addEventListener('keydown',keyDown);
		document.addEventListener('keyup',keyUp);
		

        function init(){   
            const startSection=document.querySelector('.startSection');

            startSection.addEventListener('click', start);
            function start(){
                startSection.classList.add('hide');
            }
            console.log(1)

			player.start = true;
			window.requestAnimationFrame(playarea);

			let playercar= document.createElement('div');
		playercar.setAttribute('class','carUser')
		roadarea.appendChild(playercar);

		player.x = playercar.offsetLeft;
		player.y = playercar.offsetTop;

		//roadlines repeated
		for(x =0; x<5;x++)
		{
			let roadlines = document.createElement('div');
			roadlines.setAttribute('class','roadLine');
			roadlines.y = x * 150;
			roadlines.style.top=roadlines.y + 'px';
			roadarea.appendChild(roadlines);
        }
        //vehicles in road generate randomly
        for(x=0; x < 4; x++)
        {
            let vehicles = document.createElement('div');
            vehicles.setAttribute('class','otherCar');
            vehicles.y = ((x + 1) *300) * -1;
            vehicles.style.top = vehicles.y + 'px';
            //roadwidth =400, vehicle width =50
            vehicles.style.left = Math.floor (Math. random() *300 ) + 'px';
            roadarea.appendChild(vehicles);
        }
		}



		function keyDown(ev){
            ev.preventDefault();
			keys[ev.key]=true;
		}
		function keyUp(ev){
            ev.preventDefault();
			keys[ev.key]= false;
		}

		function movelines()
		{
			let roadlines=document.querySelectorAll('.roadLine');
			roadlines.forEach(function(item)
			{
				if (item.y >= 700)
					{
						item.y = item.y - 750;
					}
					item.y = item.y + player.step;
					item.style.top = item.y + 'px' 
			})
		}
		function movevechicles(playercar)
		{
			let vehicles = document.querySelectorAll('.otherCar');
			playercarboun = getBoundingClientRect();

			vehicles.forEach(function(item)
			{
				//check if player car collides
				othercarboun = item.getBoundingClientRect();
				//if player car bottom hits other car top
				// if player car top hits other car bottom
				// if player car left hits other car right
				//if player car right hits other car left
				if(!(playercarboun.bottom < othercarboun.top)  ||
					(playercarboun.top > othercarboun.bottom ) || 
				(playercarboun.left> othercarboun.right) ||
				(playercarboun.right < othercarboun.left))
				{
					//stop driving
					player.start = false;
				}
				if(item.y > 750)
				{
					item.y = -300;
					item.style.left = Math.floor(Math.random() * 350) + 'px';
				} 
				item.y = item.y + player.step;
				item.style.top - item.y + 'px';
			})
		}		
		function playarea()
		{
			let playercar = document.querySelector('.car');
			let road =playercar.getBoundingClientRect();
			if(player.start)
			{
				movelines();
				movevechicles(playercar);
				if(keys.ArrowUp && player) //80 is car height
				{
					player.y  = player.y - player.step;
				}
				if(keys.ArrowDown && player.y  < (road.top - 80))
				{
					player.y  = player.y + player.step;
				}
				if(keys.ArrowLeft && player.x > 0 )
				{
					player.x = player.x - player.step
				}
				if(keys.ArrowRight && player.x <(road.width-64) ) //width(50) + border(2 * 7)
				{
					player.x = player.x + player.step
				}

                playercar.style.top= player.y + 'px';
                playercar.style.left = player.x + 'px';

				window.requestAnimationFrame(playarea);
			}
		}

		

		init();






















// const roadarea=document.querySelector('.roadBackground');
// 		let player = {step: 3};
// 		let keys = {ArrowUp: false, ArrowDown:false, ArrowLeft:false, ArrowRight:false};
// 		document.addEventListener('keydown',keyDown);
// 		document.addEventListener('keyup',keyUp);
        
// 		function init()
// 		{
//             // console.log(2)
// 			player.start = true;
// 			window.requestAnimationFrame(playarea);

// 			let playercar= document.createElement('div');
//             playercar.SetAttribute('class','carUser')
//             roadarea.appendChild(playercar);

//             player.x = playercar.offsetLeft;
//             player.y = playercar.offsetTop;

//             //roadlines repeates as the car moves forward
//             for(x =0; x<5;x++)
//             {
//                 let roadlines = document.createElement('div');
//                 roadlines.SetAttribute('class','roadLine');
//                 roadlines.y = x * 150;
//                 roadlines.style.top=roadlines.y + 'px';
//                 roadarea.appendChild(roadlines);
//             }
//             //vehicles in road generate randomly
//             for(x=0; x < 4; x++)
//             {
//                 let vehicles = document.createElement('div');
//                 vehicles.SetAttribute('class','carYellow');
//                 vehicles.y = ((x + 1) *300) * -1;
//                 vehicles.style.top = vehicles.y + 'px';
//                 //roadwidth =400, vehicle width =50
//                 vehicles.style.left = Math.floor (Math. random() *350 ) + 'px';
//                 roadarea.appendChild(vehicles);
//             }
// 		}

// 		function keyDown(ev)
// 		{
// 			keys[ev.key]=true;
// 		}
// 		function keyUp(ev)
// 		{
// 			keys[ev.key]= false;
// 		}

// 		function movelines()
// 		{
// 			let roadlines=document.querySelectorAll('.roadLine');
// 			roadlines.forEach(function(item)
// 			{
// 				if (item.y >= 700)
// 					{
// 						item.y = item.y - 750;
// 					}
// 					item.y = item.y + player.step;
// 					item.style.top - item.y + 'px';
// 			})
// 		}
// 		function movevechicles(playercar)
// 		{
// 			let vehicles = document.querySelectorAll('.CarYellow');
// 			playercarboun = getBoundingClientRect();

// 			vehicles.forEach(function(item)
// 			{
// 				//check if player car collides
// 				othercarboun = item.getBoundingClientRect();
// 				//if player car bottom hits other car top
// 				// if player car top hits other car bottom
// 				// if player car left hits other car right
// 				//if player car right hits other car left
// 				if(!(playercarboun.bottom < othercarboun.top)  ||
// 					(playercarboun.top > othercarboun.bottom ) || 
// 				(playercarboun.left> othercarboun.right) ||
// 				(playercarboun.right < othercarboun.left))
// 				{
// 					//stop driving
// 					player.start = false;
// 				}
// 				if(item.y > 750)
// 				{
// 					item.y = -300;
// 					item.styke.left = Math.floor(Math.random() * 350) + 'px';
// 				} 
// 				item.y = item.y + player.step;
// 				item.style.top - item.y + 'px';
// 			})
// 		}		
// 		function playarea()
// 		{
// 			let playercar = document.querySelector('.carUser');
// 			let road =roadarea.getBoundingClientRect();
// 			if(player.start)
// 			{
// 				movelines();
// 				movevechicles(playercar);
// 				// if(keys.ArrowUp && player )//80 is car height
// 				if(keys.ArrowDown && player.y  < (road.top - 140))

// 				{
// 					player.y  = player.y - player.step;
// 				}
// 				if(keys.ArrowDown && player.y  < (road.bottom - 140))
// 				// if(keys.ArrowDown && player.y  < (road.top - 140))

// 				{
// 					player.y  = player.y + player.step;
// 				}
// 				if(keys.ArrowLeft && player.x > 0 )
// 				{
// 					player.x = player.x - player.step;
// 				}
// 				if(keys.ArrowRight && player.x <(road.width-64) ) //width(50) + border(2 * 7)
// 				{
// 					player.x = player.x + player.step
// 				}

//                 playercar.style.top= player.y + 'px';
//                 playercar.style.left = player.x + 'px';

// 				window.requestAnimationFrame(playarea);
// 			}
// 		}
 
		
// 		init();
