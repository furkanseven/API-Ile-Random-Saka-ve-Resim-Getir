class Screen{
    constructor(){
        this.sakaGetirBtn=document.querySelector('#saka-getir');
        this.sakaGetirBtn.addEventListener('click',()=>this.sakaGetir());
        //click işlemlerinide this o an tıklanan elemanı gösterir
        //o an tıklanılan elemanı değil de, bu class içide bulunan saka getir fonk çalıştır dememiz lazım
        //bu yüzden addEvenlistenerlarla arrow fonk kullandık
    }


    async sakaGetir(){
        const rastgeleResim = await new UnsplashApi().randomResimGetir(); //ürettiğimiz randomresim asenkron old için içinde await vs old için bunu bekleme için await diyoruz 
        const rastgeleSaka=await new JokeApi().randomSakaGetir();

        this.ekranaYazdir(rastgeleResim,rastgeleSaka);
    }

    ekranaYazdir(rastgeleResim,rastgeleSaka){
        document.querySelector('.sonuc').innerHTML=`<div class="card" style="width: 20rem;">
        <img src="${rastgeleResim}" class="card-img-top" alt="resim">
        <div class="card-body">
          <h5 class="card-title text-danger">${rastgeleSaka}</h5>
          <h5 class="card-text text-info">-</h5>
        </div>
      </div>`
    }




}