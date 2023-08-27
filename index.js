$("#click-me").click(function() {
    let val=1

    val=Math.floor(Math.random() * 10) + 1

    switch (val) {
        case 1:
            console.log("Alain bosquet")
            $('#message').html("L'écriture est une délivrance qui, phrase après phrase, mot après mot, devient un esclave.« Alain Bosquet »")
            $('#pic').attr('src', '1.jpeg')
            break;

        case 2:
            console.log("francis carco")
            $('#message').html("Ecrire des vers à vingt ans, c'est avoir vingt ans. En écrire à quarante, c'est etre poète.« Francis Carco »")
            $('#pic').attr('src', '2.jpeg')
            break;

        case 3:
            console.log("Maurice Chapelan")
            $('#message').html("Un écrivain ne lit pas ses confrères, il les surveille.« Maurice Chapelan »")
            $('#pic').attr('src', '3.jpeg')
            break;

        case 4:
            console.log("Paul claudel")
            $('#message').html("Les grands écrivains n'ont jamais été faits pour subir la loi des grammariens, mais pour imposer la leur.« Paul Claudel »")
            $('#pic').attr('src', '4.jpg')
            break;

        case 5:
            console.log("Jean cocteau")
            $('#message').html("Ecriree est un acte d'amour. S'il ne l'est pas il n'est qu'écriture.« Jean Cocteau »")
            $('#pic').attr('src', '5.jpg')
            break;

        case 6:
            console.log("Jean-jacques Ampère")
            $('#message').html("Un chef d'oeuvre de la littérature n'est jamais qu'un dictionnaire en désordre.« Jean-jacques Ampère »")
            $('#pic').attr('src', '6.jpg')
            break;
 
        case 7:
            console.log("Ivo Andric")
            $('#message').html("Les mots les meilleurs sont ceux que nous cherchons en vain.« Ivo Andric »")
            $('#pic').attr('src', '7.jpg')
            break; 

        case 8:
        console.log("Jacques Attali")
        $('#message').html("J'écris les livres que j'aimerais lire.« Jacques Attali »")
        $('#pic').attr('src', '8.jpeg')
        break; 

        case 9:
        console.log("Giorgio Agamben")
        $('#message').html("Ecrire serait si triste si l'on ne déviait jamais de son plan. « Giorgio Agamben »")
        $('#pic').attr('src', '9.jpeg')
        break;  

        default:
            console.log("Steve mazo")
            $('#message').html("Un développeur est un fou qui vit dans son propre monde, la mise en oeuvre de son imagination serait le reflet de ses compétences.« Steve Mazo »")
            $('#pic').attr('src', '10.jpg')
            break;
    }
})

