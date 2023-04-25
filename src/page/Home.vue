<template>
    <div>
    <Navbar/>
    </div>
    <div id="gl">
        <div id="tablisa">
        <h2>AnimeOVEL - смотреть аниме БЕСПЛАТНО</h2>
        <p>Вот уже много лет японская анимация пользуется огромным успехом по всему миру, включая Россию. Эти ленты любят за яркий сюжет, оригинальную рисовку и неизменный накал эмоций.
Многие поклонники любят смотреть аниме онлайн, однако для этого часто приходится пользоваться несколькими источниками, поскольку ни один из них нельзя назвать универсальным. Но у нас 
есть отличная новость для любителей аниме! Мы запустили новый проект AnimeGO, посвящённый онлайн-просмотру аниме. Теперь Вам не придётся бороздить просторы интернета в поисках
 любимого тайтла – все лучшие аниме в хорошем качестве уже есть на нашем портале. Мы сами очень любим этот жанр и поэтому постарались сделать наш сайт как можно более удобным 
 и захватывающим</p>
    </div>
    </div>
   
    <Slider/>
    <div style="display: flex;justify-content: center;margin-top:30px">
      
        <div id="spisok">
            <h1 style="text-align: center">новые серии</h1>
            <div>
                
            </div>
        </div>

    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Slider from "../components/Slider.vue"
    export default {
        components:{
            Navbar,
            Slider
        }
    }
</script>

<style>

#tablisa{
 
 margin-top: 30px;
width: 985px;
margin-bottom: 30px;
  
}
#gl{
    display: flex;
    justify-content: center;
    margin-top: 35px;
}

#spisok{
    background-color:whitesmoke;

    width: 1000px;
    height:800px;
}
</style>