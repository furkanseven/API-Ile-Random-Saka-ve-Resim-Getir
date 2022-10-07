

class UnsplashApi{
    constructor() 
    {
        this.baseURL ='https://picsum.photos';
        this.axiosNesne = axios.create( 
            {
                baseURL:this.baseURL,
            }
        );
    }

   async randomResimGetir(){
        try {
            const resimResponse = await this.axiosNesne.get('/200');
            console.log(resimResponse.request.responseURL);
            return resimResponse.request.responseURL;
        } catch (error) {
            console.log(error);
            return 'https://cdn2.limonhost.net/wp-content/uploads/2020/10/404-not-found-sayfa-bulunamadi-hatasi-ve-cozumu.png';
        }
    }


}

























// class UnsplashApi{
//     constructor() 
//     {
//         this.baseURL ='https://unsplash.com';
//         this.clientID ='Client-ID SNYaRl6mmRjDaDsFti6xd6TQkAVE1W1u1tefuo7yPvk' //Api kaynağının bize verdiği access key
//         this.axiosNesne = axios.create( 
//             {
//                 baseURL:this.baseURL,
//                 headers:{   //istekte bulunmadan ççnce client-ıd buraya geçelim
//                     Authorization:this.clientID 
//                 }
//             }
//         );
//     }

//    async randomResimGetir(){
//         try {
//             const resimResponse = await this.axiosNesne.get('/photos/random');
//             console.log(resimResponse.data.urls.regular);

//             //return resimResponse;
//         } catch (error) {
//             console.log(error);
//         }
//     }


// }