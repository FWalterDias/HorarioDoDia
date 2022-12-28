function carregar (){
    let msg = document.querySelector('div#msg');
    let foto = document.querySelector('img#foto');
    let data = new Date()
    let hora = data.getHours()
    
    
    if(hora >= 0 && hora < 6){
        msg.innerHTML = `Boa noite! Agora são ${hora} horas da Madrugada`;
        document.body.style.backgroundColor = 'rgba(78, 79, 85, 0.66)'
        foto.src = "01madrugada.png";
        
    }else if (hora >= 6 && hora < 8){
        msg.innerHTML = `Bom dia! Agora são ${hora} horas da Manhã`;
        document.body.style.backgroundColor ='rgba(240, 239, 213, 0.77)'
        foto.src = "02amanhecer.jpg"
        
    }else if(hora >=  8 && hora < 12){
        msg.innerHTML = `Bom dia! Agora são ${hora} horas da Manhã`;
        document.body.style.backgroundColor ='rgba(244, 245, 184, 0.71)'
        foto.src = '03manha.png';

    }else if(hora >= 12 && hora < 18 ){
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas da Tarde`;
        document.body.style.backgroundColor = 'rgba(248, 194, 29, 0.67)'
        foto.src = '04tarde.png';

    } else if(hora >= 18 && hora < 24){
        msg.innerHTML = `Boa noite! Agora são ${hora} horas da Noite`;
        document.body.style.backgroundColor = 'rgba(108, 106, 100, 0.79)'
        foto.src = '06noite.png';
    }
}


