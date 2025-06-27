document.addEventListener('DOMContentLoaded', function() {
    const quizzimage = document.getElementById('quizz-image');
    const quizzquestion = document.getElementById('quizz-question');
    const resultatinput = document.getElementById('resultat');
    const nexbutton = document.getElementById('next');
    const resultatfinal = document.getElementById('resultatfinal');

    const question = [
        { image: "rdc.jpg", name: 'rdc'},
        { image: "argentine.jpg", name: "argentine" },
        { image: "brazil.jpg", name: "brazil" },
        { image: "mali.jpg", name: "mali"},
        { image: "portugal.jpg", name: 'portugal'},
        { image: "japon.jpg", name: 'japon'},
        { image: "angleterre.jpg", name: 'angleterre'},
        { image: "france.jpg", name: 'france'},
        { image: "belgique.jpg", name: 'belgique'},
        { image: "corée du sud.jpg", name: "corée du sud" },
        { image: "egypte.jpg", name: "egypte" },
        { image: "maroc.jpg", name: "maroc"},
        { image: "turquie.jpg", name: 'turquie'},
        { image: "ukraine.jpg", name: 'ukraine'},
        { image: "italie.jpg", name: 'italie'},
        { image: "allemagne.jpg", name: 'allemagne'},
        { image: "uruguay.jpg", name: 'uruguay'},
        { image: "canada.jpg", name: 'canada'},
        { image: "etats-unis.jpg", name: 'etats-unis'},
        { image: "algérie.jpg", name: 'algérie'},
       
    ];
    let score = 0;
    let questionactuelle = 0;

    function afficherquestion() {
        if(questionactuelle < question.length) {
            quizzimage.src = `./src/${question[questionactuelle].image}`;
            quizzquestion.textContent = "quel est le nom du pays ?";
            resultatinput.value = "";
            resultatinput.focus();
        } else {
            quizzimage.style.display = "none";
            quizzquestion.textContent = "fin du quiz";
            resultatinput.style.display = "none";
            nexbutton.style.display = "none";
            resultatfinal.textContent = `votre score est de: ${score}/${question.length}`;
        }
    }

    function validation() {
        const reponseUtilisateur = resultatinput.value.trim().toLowerCase();
        const bonnereponse = question[questionactuelle].name;

        if (reponseUtilisateur === bonnereponse) {
            score++;
        }

        questionactuelle++;
        
        afficherquestion();
    }
    nexbutton.addEventListener('click', validation);

    resultatinput.addEventListener('keyup', function(e) {
        if (e.key === "Enter") {
            validation();
        }
    });
    afficherquestion();
});