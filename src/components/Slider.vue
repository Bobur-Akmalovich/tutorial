<template>
    <div id="cenOne">

   <h2 >Аниме весеннего сезона</h2>
    <div id="cen">
        <img @click="leftt" style="width: 40px;height: 40px;rotate: 180deg;margin-right: 20px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nO3YsQ3CMBAF0GtgA8jdCGQUYBdKhoFpEkc0lJSwBO2dZBQQUNEgOeiH/6Sroy/nO3ZEiIiIiGhwnnQpyDxZRGtbQRXJcj+edJ9P9VRQA8R9NOWumgtuAMue7JIbrQU1QPQhWrt6U60FNUA8VgKj3J8CxGs1dJePMin2gGFG29zoDDiA9b0454MuYAPEs9xdtYINEO9ybxgg+ArZP5VYv99GSyv+ISttlEcJRz7MOfZxWnEvNI56pYQp62h/qxARERHJ790A/owdh63C+XcAAAAASUVORK5CYII=">
<div id="bl">


    <div id="slider">
        
<div>
    <img src="https://img1.ak.crunchyroll.com/i/spire4/6b4c9dcac0bcdf27fe1d21e75769f8861661079175_main.jpg" alt="">
    <p>Lorem ipsum dolor sit amet.</p>
</div>
<div>
    <img src="https://img1.ak.crunchyroll.com/i/spire4/6b4c9dcac0bcdf27fe1d21e75769f8861661079175_main.jpg" alt="">
    <p>Lorem ipsum dolor sit amet.</p>
</div>
<div>
    <img src="https://img1.ak.crunchyroll.com/i/spire4/6b4c9dcac0bcdf27fe1d21e75769f8861661079175_main.jpg" alt="">
    <p>Lorem ipsum dolor sit amet.</p>
</div>
<div>
    <img src="https://img1.ak.crunchyroll.com/i/spire4/6b4c9dcac0bcdf27fe1d21e75769f8861661079175_main.jpg" alt="">
    <p>Lorem ipsum dolor sit amet.</p>
</div>
<div>
    <img src="https://img1.ak.crunchyroll.com/i/spire4/6b4c9dcac0bcdf27fe1d21e75769f8861661079175_main.jpg" alt="">
    <p>Lorem ipsum dolor sit amet.</p>
</div>
<div>
    <img src="https://img1.ak.crunchyroll.com/i/spire4/6b4c9dcac0bcdf27fe1d21e75769f8861661079175_main.jpg" alt="">
    <p>Lorem ipsum dolor sit amet.</p>
</div>
<div>
    <img src="https://img1.ak.crunchyroll.com/i/spire4/6b4c9dcac0bcdf27fe1d21e75769f8861661079175_main.jpg" alt="">
    <p>Lorem ipsum dolor sit amet.</p>
</div>
<div>
    <img src="https://img1.ak.crunchyroll.com/i/spire4/6b4c9dcac0bcdf27fe1d21e75769f8861661079175_main.jpg" alt="">
    <p>Lorem ipsum dolor sit amet.</p>
</div>
    </div>
</div>
    <img @click="rightt"  style="width: 40px;height: 40px;margin-left: 20px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVR4nO3YsQ3CMBAF0GtgA8jdCGQUYBdKhoFpEkc0lJSwBO2dZBQQUNEgOeiH/6Sroy/nO3ZEiIiIiGhwnnQpyDxZRGtbQRXJcj+edJ9P9VRQA8R9NOWumgtuAMue7JIbrQU1QPQhWrt6U60FNUA8VgKj3J8CxGs1dJePMin2gGFG29zoDDiA9b0454MuYAPEs9xdtYINEO9ybxgg+ArZP5VYv99GSyv+ISttlEcJRz7MOfZxWnEvNI56pYQp62h/qxARERHJ790A/owdh63C+XcAAAAASUVORK5CYII=">

</div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                right:false,
                sep:0,
                pep:0
            }
        },
        methods: {
            rightt(){
           
                    this.sep = this.sep + 170
                  document.getElementById("slider").style.marginLeft = -this.sep + "px";
                  if(this.sep > 340){
                    this.sep =0
                    document.getElementById("slider").style.marginLeft = 0 + "px"
                  }

            
              
            },
            leftt(){
           
           this.sep = this.sep - 170
         
         if(this.sep < 0){
           this.sep = 0
           document.getElementById("slider").style.marginRight = 0 + "px"
         }
         document.getElementById("slider").style.marginLeft = -this.sep + "px";
   
     
   }
        },
    
    }
</script>

<style >
#cen{
   
    display: flex;
    justify-content: center;
    align-items: center;
  

}

#slider {
   position: relative;
    display: flex;
justify-content: space-evenly;
   width: 1350px;
   transition: 0.3s;
  
}
#slider div{
    width: 160px;
}
#slider img{
    width: 150px;
}

#bl{
    overflow: hidden;
    width: 1000px;
}
#cenOne{
    background-color:rgba(224,226,229,255);
    padding-bottom: 30px;
    padding-top: 30px;
    border-top:0.2px solid rgb(182, 182, 182);
    border-bottom:0.2px solid rgb(182, 182, 182);
}
#cenOne h2{
    margin-left: 276px;
    margin-bottom: 20px;
    border-bottom: rgb(255, 183, 50) solid 2px;
    width: 267px;
}
</style>