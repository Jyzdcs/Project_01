let bdnQuestions = [
    {
        id: "01",
        question: "Quel joueur a réussi le triplé le plus rapide de la Premier League ?",
        url1: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2024/01/13/3861096-78454848-2560-1440.jpg", //Kevin de bruyne
        url2: "https://africafoot.com/wp-content/uploads/2023/11/Mohamed-Salah-8.jpg", //Salah,
        response: "https://pouvoirsafrique.com//uploads/imported_images/uploads/2023/10/skysports-sadio-mane-bayern-munich_5872096.jpg", //Sadio mane,
        url3: "https://img.fcbayern.com/image/upload/t_cms-16x9/f_auto/w_1600,c_fill/q_auto/v1705423291/cms/public/images/fcbayern-com/homepage/Saison-23-24/Galerien/Spiele/FCB-VfB/16-fcb-vfb-171223-ima.jpg", // Harry Kane 
    },
    {
        id: "02",
        question: "Quel joueur a le plus grand nombre de sélections en équipe nationale parmi ces footballeurs ?",
        url1: "https://static.onzemondial.com/8/2024/01/photo_article/866693/350041/1200-L-fc-sville-ferme-la-sergio-ramos-s-emporte-contre-un-supporter.jpg", //Sergio Ramos,
        url2: "https://resize-europe1.lanmedia.fr/r/622,311,forcex,center-middle/img/var/europe1/storage/images/europe1/sport/football-andres-iniesta-prolonge-a-vie-au-fc-barcelone-3456722/44547860-1-fre-FR/Football-Andres-Iniesta-prolonge-a-vie-au-FC-Barcelone.jpg",//Andres Iniesta,
        url3: "https://i.eurosport.com/2023/02/10/3550299-72315155-1600-900.jpg",//Thiago Silva,
        response: "https://www.leparisien.fr/resizer/fXtvJimtxA7Ie5ROzIHJbqodbqM=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/V4BDAJX6KVCWHLT67PFSPG4DJ4.jpg",//Cristiano Ronaldo, //true
    },
    {
        id: "03",
        question: "Parmi ces attaquants, qui a marqué le plus de buts en Ligue des champions ?",
        url1: "https://static.mensup.fr/29/2024/01/photo_article/44553/22120/1200-L-onze-dor-jaurais-vot-pour-moi-mme-erling-haaland-ragit-son-nouveau-trophe.webp",//Erling Haaland,
        url2: "https://livesport-ott-images.ssl.cdn.cra.cz/r900xfq60/d6ae507c-afb4-41dc-8147-cf6888e6e916.jpeg", //Karim Benzema,
        response: "https://www.lejdd.fr/lmnr/var/jdd/public/media/image/2023/06/03/19/2023-06-01t120701z_1658076920_rc2xx0afkmhj_rtrmadp_3_soccer-france-psg-messi.jpg?VersionId=ccdteb_6p_PJSRhwBsEpnaP2R4iN27b1",//Lionel Messi, //true
        url3: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd5070f137b52f695/60dabe103388dd0edc067157/174af0f467a7121f08843d262a6dd708d66c6d0e.jpg?auto=webp&format=pjpg&width=3840&quality=60",//Robert Lewandowski,
    },
    {
        id: "04",
        question: "Quel gardien de but a remporté le plus de trophées individuels ?",
        url1: "https://assets-fr.imgfoot.com/media/cache/642x382/alisson-liv.jpg",//Alisson Becker,
        response: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt36e56747bf7ad7b3/60de08400401cb0ebfb2e5d0/7e91cea0ecdaa21e4eacf693dcdbdb8418535031.jpg?auto=webp&format=pjpg&width=3840&quality=60",//Jan Oblak, //true
        url3: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/06/19/3729752-75884968-2560-1440.jpg",//Thibaut Courtois,
        url2: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2015/01/02/1381753-29631437-2560-1440.jpg",//Manuel Neuer,
    },
    {
        id: "05",
        question: "Qui est le capitaine actuel de l'équipe nationale française de football ?",
        url1: "https://senego.com/wp-content/uploads/2022/01/1200-l-ballon-dor-2021-le-classement-de-kant-est-connu.jpg",//N'Golo Kané",
        url2: "https://www.leparisien.fr/resizer/BAMidWuZOIpEkh8IbdQ8oNdEpys=/932x582/filters:focal(127x1774:137x1784)/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/GP4P5N2ROFHKBJJ35BUY4PRREM.jpg",//Antoine Griezmann,
        response: "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/12/30/3852436-78281648-2560-1440.jpg",//Hugo Lloris, //true
        url3: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt55969c38985478b1/60da76005543520fcbbe229b/60854a79dce5068cf2d48b5189c83a6885f4fe42.jpg?auto=webp&format=pjpg&width=3840&quality=60",//Paul Pogba,
    },
    {
        id: "06",
        question: "Quel joueur a inscrit le but le plus rapide en Coupe du Monde de la FIFA ?",
        response: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5eb742f5e7ba6a7b/60de4ff447339c0fc0261758/3d592ac796b4ff96b429c81497a185e42110c0f0.jpg?auto=webp&format=pjpg&width=3840&quality=60",//Tim Cahill, //true      
        url2: "https://static.lpnt.fr/images/2016/08/12/5048457lpw-5048498-article-jpg_3718413_1250x625.jpg",//Hakan Şükür,
        url3: "https://cdn.shopify.com/s/files/1/0027/9373/4190/files/ronaldo-explique-enfin-son-etrange-coupe-de-cheveux-au-mondial-2002_e504ffd1d517111e0b3cec894daa7c6504d74be8.jpg?v=1600782819",//Ronaldo Nazário,
        url1: "https://images.seattletimes.com/wp-content/uploads/2023/09/09152023_clint_095951.jpg?d=780x501",//Clint Dempsey,
    },
    {
        id: "07",
        question: "Qui a été élu meilleur jeune joueur de la Coupe du Monde 2018 ?",
        response: "https://media.sudouest.fr/16406582/1000x500/20230826230515-1422912.jpg?v=1693084707",//Kylian Mbappé, //true
        url2: "https://www.radiofrance.fr/s3/cruiser-production/2020/11/7d4f474b-5ec6-4ac4-ae2d-5b879aebe445/1200x680_marcus_rashford.jpg",//Marcus Rashford,
        url3: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blted400dcb5fd8402c/62d90707849ae33a96179b58/GettyImages-1409991695.jpg?auto=webp&format=pjpg&width=3840&quality=60",//Matthijs de Ligt,
        url1: "https://people.com/thmb/aiY8jRVjG34fwjtMalg8IsmzGWM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(719x9:721x11)/Christian-Pulisic-120122-6-022ef7772fbe42719eadc6c5d1b4b79d.jpg",//Christian Pulisic,
    },
    {
        id: "08",
        question: "Quel joueur a remporté le Soulier d'Or en tant que meilleur buteur de la saison ?",
        url1: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltddfa8e6d5733c643/60dad170cbc6070f5c39165c/91250012ae6998c725a0c3595f99925987a43996.jpg?auto=webp&format=pjpg&width=3840&quality=60",//Karim Benzema,
        url2: "https://static.onzemondial.com/photo_article/627343/228599/1200-L-tottenham-harry-kane-s-est-mis-sa-direction-dos-clash-en-vue-pour-son-dpart.jpg",//Harry Kane,
        response: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltade223961fa6c513/6596aacc2a3536040a374f60/GOAL_-_Blank_WEB_-_Facebook.jpg?auto=webp&format=pjpg&width=3840&quality=60",//Robert Lewandowski, //true
        url3: "https://i.eurosport.com/2023/11/12/3824809-77729108-2560-1440.jpg?w=1300",//Mohamed Salah,
    },
    {
        id: "09",
        question: "Qui a marqué le but décisif lors de la finale de la Ligue des champions 2021 ?",
        url1: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt9a90676f9c3dd7b3/60daf79b3388dd0edc075eda/f607e7854316dc880defd1e2a0c94c467a9e5eaa.jpg?auto=webp&format=pjpg&width=3840&quality=60",//Phil Foden,
        url2: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt61548319873d6a9b/60db0a1963584e0ecae1b115/b11246047a14933011c9d21a5dbaa20961236e77.jpg?auto=webp&format=pjpg&width=3840&quality=60",//Bruno Fernandes,
        url3: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltbdaf0428e1070291/63b029103768b80273a5f078/GettyImages-1452781850.jpg",//Mason Mount,
        response: "https://assets-fr.imgfoot.com/media/cache/642x382/kai-havertz-2223-64898267a228f.jpg",//Kai Havertz, //true
    },
    {
        id: "10",
        question: "Quel joueur a le plus grand nombre de dribbles réussis en Premier League cette saison ?",
        url1: "https://www.afrique-sur7.ci/wp-content/uploads/2023/12/Wilfried-Zaha.webp",//Wilfried Zaha,
        response: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt017abf58c2174622/62753ddd543bac4ecd46392d/Allan_Saint-Maximin_Newcastle_Manchester_United_.jpg?auto=webp&format=pjpg&width=3840&quality=60",//Allan Saint-Maximin, //true
        url2: "https://images.ladepeche.fr/api/v1/images/view/658edb2dc48c413b4c292908/large/image.jpg?v=1",//Jack Grealish,
        url3: "https://www.calciomio.fr/wp-content/uploads/2023/05/Icon_sipausa_43482243.jpg",//Adama Traoré,
    },   
]

let score = 0;

let imageOne = document.getElementById("imageA");
let imageTwo = document.getElementById("imageB");
let imageTree = document.getElementById("imageC");
let imageFour = document.getElementById("imageD");
let allButton = document.querySelectorAll("input");
let questionRandom = document.getElementById("question");

function randomNumberFunc(max) {
    return Math.floor(Math.random() * max);
}

function deleteObject(index, array) {
    return array.splice(index, 1)
}

function launch(imageOne, imageTwo, imageTree, imageFour, bdnQuestions, questionRandom) {
    let randomObject = randomNumberFunc(bdnQuestions.length) // selected the random object in the array
    let idOfRandomObject = randomObject;

    let arrayUrlRandom = [
        bdnQuestions[randomObject].url1,
        bdnQuestions[randomObject].url2,
        bdnQuestions[randomObject].url3,
        bdnQuestions[randomObject].response,
        idOfRandomObject
    ];

    function randomUrlFunc(array, image) {
        let urlRandom = array[randomNumberFunc(array.length - 1)]; // stocker un el au hasard parmis arrayUrlRandom
        const arrayFilter = array.filter(((index) => index != urlRandom)) // Create new array without the value contain in urlRandm var
        image.src = urlRandom; // assign content of urlRandom to the src of image parameter 
        return arrayFilter
    }

    let arrayModifOne = randomUrlFunc(arrayUrlRandom, imageOne)
    let arrayModifTwo = randomUrlFunc(arrayModifOne, imageTwo)
    let arrayModifTree = randomUrlFunc(arrayModifTwo, imageTree)
    randomUrlFunc(arrayModifTree, imageFour)

    questionRandom.textContent = bdnQuestions[randomObject].question; // print the question

    return arrayUrlRandom
}

let responseValue = launch(imageOne, imageTwo, imageTree, imageFour, bdnQuestions, questionRandom);

// lets use forEach and not directly addEventListener bc he cant be use on an array
allButton.forEach(function(button) { // button represent every object in the array allButton 
    button.addEventListener("click", function(){ // add event on every button
        if(button.src === responseValue[3]){
            if(bdnQuestions.length === 0){
                console.log("+10 points")
                console.log("Voici votre score: " + score)
                console.log("Game is finish")
            }
            else{
                deleteObject(responseValue[4], bdnQuestions) // update bdn length
                responseValue = launch(imageOne, imageTwo, imageTree, imageFour, bdnQuestions, questionRandom);
                console.log(bdnQuestions)
                score = score + 10;
                console.log("+10 points")
                console.log("Voici votre score: " + score)
            }
        }else{
            if(bdnQuestions.length === 0){
                console.log("+0 points")
                console.log("Game is finish")
            }else{
                console.log("+0 points")
                deleteObject(responseValue[4], bdnQuestions) // update bdn length
                responseValue = launch(imageOne, imageTwo, imageTree, imageFour, bdnQuestions, questionRandom);
            }
            
        }
        console.log(`Question remaining: ${bdnQuestions.length}`)
    });
});
