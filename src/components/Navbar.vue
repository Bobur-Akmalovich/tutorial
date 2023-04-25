<template>
    <div>
<header>
    <nav>
        <div id="nav">
            <a id="ovel" style="color:orange;display: flex;align-items:center" href=""> <img style="width: 35px;" src="data:image/png;base64,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">AnimeOvel</a>
                 <a href="">Домой</a>
                 <div id="janr">
                      <a href="">жанры</a>
                      <div id="ani1">

                        <div id="ani">
                        <a href="">anime</a>
                        <a href="">anime</a>
                        <a href="">anime</a>
                        <a href="">anime</a>
                        <a href="">anime</a>
                        <a href="">anime</a>
                        <a href="">anime</a>
                      </div>
                      <div id="ani">
                        <a href="">anime</a>
                        <a href="">anime</a>
                        <a href="">anime</a>
                        <a href="">anime</a>
                        <a href="">anime</a>
                        <a href="">anime</a>
                        <a href="">anime</a>
                        <a href="">animeee</a>
                      </div>

                      </div>
                     
                    
                 </div>
               
                 <a href="">Категории</a>
                 <a href="">Анонсы</a>
                 <a href="">Контакты</a>
                 
                 <div id="poisk">
                        <input type="text" name="" id="inp">
                        <button style="display: flex;align-items: center;padding-right: 5px;cursor: pointer;" id="nayti"><img style="width: 20px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaUlEQVR4nO2Wz0pCQRjFf2i6ydop9ArZO1T7FhrlK0TSH+spxNcw61GCaJMFJZn71rqolfHBufBtwjtzLxLkgYELM+ecud98cxhY4Q+hDLSAW+ANmGnY90BztiZXHAIfwHzBGAPNPAwLQM8JPwEXwDawrlEHLoGhW9cVNxo9CX0BJwvEbO5UaxPz6PLOJbQbwNtz5o1Q07I7U/vTULTFfQdKIcSWO9OYsyoCz9I4CiHeiXROPDrSuAkhjUSy7o1FXRp2z1NjKlIlg/GGNKbLNt6MMR7lUOod19mpMRDJEikW19Lox1ynYYbr9CKN49AAGYtoMRiKM3EnwFooueki02IwLfaBb3EPiETXmbdVwt9Q1J8mpp9ANda44MznisGOwqGiYd175c40MU3W18iAhq7FoofAROWtuqzObF5S4Fv2vioYZtpQX93rG6mWp3koqu5lYpvd4r+Y11zZH5ZpnJg/AvfLNl4Bww/dcoIlpDH7/gAAAABJRU5ErkJggg==">Найти</button>
                        <button style="display: flex;align-items: center;padding-right: 5px;cursor: pointer;"><img style="width: 20px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWUlEQVR4nO2aMUrEUBCGvwRBsLbYUg9h6y32NQbWRq9gu6Xn0AN4CLFWt9ja2gtYKEQCKYLNvjUTsvPm/2BIqjDzMW9IhoAQQgghhBCHSg00wN2OuAXOKZAGaDPjC7gmsIC2l1BUJ1TAFXC/IzYDCTcEZD0Q0N2HYy0BqANaHQF8zIAT4LK/hpwBz32ir8BpRAGfg2TfjSS4ErAEfowluBLQkYDvQdJbYEEgAdYSXAqwlOBWgJUE1wIsJLgXMFZCEQLGSJhcQJ25m7OIlz9bnk3Ge8LkApo9V1PW8RhdwMPcAqrM3ZxFvB3iEZhrCOZ+JxQhIP2z+CIEpBHFuxeQRhbvWkAyKN6tgGRUvEsBybB4dwKW0VdiH8bFuxPwFH0tfgRcAMeGz3QlYAokAHUAOgJoBlDcEKwzd5HF/iTVRP9Nrtmz+BWFUWXuIru2P5s7WSGEEEIIgRN+AdDaaFdOSmpvAAAAAElFTkSuQmCC">Войти</button>
                     </div>
        </div>
    </nav>
</header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
nav{
    background-color:rgba(52,58,64,255);
    border-bottom: orange solid 4px;
    display: flex;
    justify-content: center;
}


#nav{

    display: flex;
    justify-content:start;
    width: 100%;
    height: 41px;
    align-items:center;
   
    width: 1000px;
}

#nav a{
    text-decoration:none;
    color:white;
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
margin-left: 20px;
transition:0.3s;
}


#janr:hover #ani1{

   display: flex;
}

#ani1{
display: none;
position:absolute;
background-color:rgba(52,58,64,255);
justify-content: space-evenly;
width: 200px;
padding: 10px;
}
#ani1 div{
    display: flex;
    flex-direction: column;
}
#ovel{
    margin-right: 10px !important;
    margin-left:0px !important;
}

#poisk{
    width: 100%;
    display: flex;
    justify-content:flex-end
}
#nayti{
    margin-right:20px
}
#nav a:hover{
    color: orange;
    transition:0.3s
}

header{
    position:fixed;
    width: 100%;
    z-index: 100;
    
}
</style>