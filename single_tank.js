function test_update()
{
   var today=new Date()
   var sec=today.getSeconds()
   
   document.querySelector('oil-tank-show').water_h=Math.floor(Math.random()*10+5)
   document.querySelector('oil-tank-show').oil_l=Math.floor(Math.random()*10+1)
   document.querySelector('oil-tank-show').oil_h=Math.floor(Math.random()*10+10)
   document.querySelector('oil-tank-show').temp=Math.floor(Math.random()*10+1)
   document.querySelector('oil-tank-show').volume=Math.floor(Math.random()*1000+1)
   document.querySelector('oil-tank-show').weight=Math.floor(Math.random()*1000+1)
   document.querySelector('oil-tank-show').density=Math.floor(Math.random()*1000+1)
   t=setTimeout('test_update()',1000)
}

function test_random(tank)
{
	 document.getElementById("water").value=1000
	 tank.water=Math.floor(Math.random()*1000+1)
   tank.oil_l=Math.floor(Math.random()*1000+1)
   tank.oil_h=Math.floor(Math.random()*1000+1)
   tank.temp=Math.floor(Math.random()*1000+1)
   tank.weight=Math.floor(Math.random()*1000+1)
   tank.volume=Math.floor(Math.random()*1000+1)
   tank.density=Math.floor(Math.random()*1000+1)
}
