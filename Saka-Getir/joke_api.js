
class JokeApi{
    constructor() //new JokeApi dediğimizde burası çalışacak
    {
        this.baseURL ='https://api.chucknorris.io';
        this.axiosNesne = axios.create( //Ne zaman jokeapi'den nesne üreticez ilgili nesne üretilip bu değişkene bağlanacak
            {
                baseURL:this.baseURL,
            }
        );
    }

   async randomSakaGetir(){
    try {
        const sakaResponse = await this.axiosNesne.get('/jokes/random');
        console.log(sakaResponse.data.value);

        return sakaResponse.data.value;
    } catch (err) {
        console.log(err);
    }
    }









}