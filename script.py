html_content = """ {% extends 'main.html' %}

{% block content %}
{% load static %}
<section>
    <div class="container text-center">
        <div class="row justify-content-center ">
           <div class="text-center col-10">
               <h1 class="display-2 fw-bold mb-5"> Bienvenue sur mon <span class="badge bg-info" >BLOG TECH</span></h1>
</div>

            <div>
                <img class=" shadow-lg col-sm-6 border border-5 border-secondary rounded img-fluid"
                     src="{% static '/img/HSV.jpg' %}" alt="photo de moi" >

                    <h5 class="container text-center text-muted fst-light w-50 mb-3"> Sur ce blog, par mesure de sécurité et
                    pour préserver mon anonymat,
                    je serai Ekla HSV (<span class="text-decoration-underline">H</span>omme
                    <span class="text-decoration-underline">S</span>ans
                    <span class="text-decoration-underline">V</span>isage)</h5>
            </div>

            <div id="demo" class="carousel slide col-6 mb-2 text-secondary" data-bs-ride="carousel"> Technologies que j'utilise pour ce site
                <div class="carousel-inner ">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <img src="{% static 'img/python-django3.png' %}" alt="Carrousel slide 1" class="d-block offset-5">
                    </div>
                    <!--<div class="carousel-item" data-bs-interval="2000">
                        <img src="{% static 'img/logo-django.jpg' %}" alt="Carrousel slide " class="d-block offset-4">
                    </div>-->
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="{% static 'img/bootstrap2.jpg' %}" alt="Carrousel slide 2" class="d-block offset-4">
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="{% static 'img/pycharm.jpg' %}" alt="Carrousel slide 5" class="d-block offset-5">
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="{% static 'img/git.jpg' %}" alt="Carrousel slide 4" class="d-block offset-5">
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="{% static 'img/logo-gunicorn.png' %}" alt="Carrousel slide 4" class="d-block offset-3">
                    </div>

                     <div class="carousel-item" data-bs-interval="2000">
                        <img src="{% static 'img/heroku2.png' %}" alt="Carrousel slide 6" class="d-block offset-5">
                    </div>
                </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                  <button class="carousel-control-next" type="button" data-bs-target="demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
</div>
            </div>
           </div>

    <div>
            <h3 class=" font-weight-light text-primary p-4 border-start border-5 col-11 ms-4">  Salut à tous:</h3>
    </div>

    <div class="ms-4 border-start border-5" >

<p class="lead col-11 ms-1"> Ce blog est encore en chantier. J'apprends tout juste
    la programmation d'application web avec  
    <a class="fw-bold text-black text-decoration-none"
       href="https://www.djangoproject.com/">django</a> <!--<img class="rounded shadow" src="{% static 'img/logo-django.jpg' %}" alt="">-->
    et <span class="fw-bold">python</span> et je fais un peu tout en même temps pour le plaisir.
    C'est pénible pour un débutant de faire du back-end et de voir un truc complètement dégueu tourner en local,
    même si c'est plaisant d'implémenter de nouvelles fonctionnalités.
    <p class="lead  col-11 ms-1">En fait, je voulais aussi apprendre dans la foulée et sans plus attendre le front-end.
       J'utilise ici <a class=" fw-bold text-black text-decoration-none" href="https://getbootstrap.com/">bootstrap</a> après avoir fait
    quelques essais en CSS pur (ça va quand même beaucoup plus vite avec bootstrap mais il s'agit de comprendre aussi
    ce qu'il se passe derrière tous ces frameworks).</p>
        <p class="lead col-11 ms-1">Après avoir obtenu de premiers résultats satisfaisants, je ne voulais pas trop
            attendre avant la phase de déploiement web, à quoi bon faire un site de A à Z si l'hébergement est une galère irréalisable
    (j'ai des moyens très limités, en particulier je ne peux me payer aucun service en ligne et je travaille derrière un pare-feu
    qui bloque certains sites d'informatique et de services web)?</p>
    <p class="lead col-11 ms-1"> Mais ça va, <a href="https://www.youtube.com/watch?v=6DI_7Zja8Zc"> un petit tuto de 53 minutes </a> et le
        déploiement sur <a href="https://www.heroku.com/" class="fw-bold text-black text-decoration-none"> heroku
        </a> s'est bien passé, ça tourne !!!
    Tous ceux qui programment un peu pour le plaisir sauront la joie et la satisfaction que je ressens à voir ce petit bébé
    commencer à gazouiller sur internet, (même s'il n'y a qu'un père pour s'émerveiller des "areuh" "areuh" de son môme).

    Bref, sur un vrai projet le déploiement du site est la dernière étape, ici je voulais d'emblée expérimenter cette
    phase quand même
    beaucoup plus palpitante que de voir simplement tourner son appli' en local.
    J'ai plein de fonctionnalité à ajouter et le contenu n'est pour l'instant qu'une sorte de vitrine
    qui donne un premier aperçu de l'orientation du site
    et des thèmes que j'imaginerai aborder avec vous. Les articles sont pour l'instant à peine ébauchés. C'est un peu
        comme une maison en construction, vous avez (presque) toutes les pièces, mais il y a encore des choses à faire
        dans tous les coins (éléctricité, tuyauterie, carrelage et peinture). Bonne visite !</p>
        </div>
        <div>
            <h3 class=" font-weight-light text-primary p-4 border-start border-5 col-11 ms-4">  Un petit mot de présentation
                </h3>
<div class="ms-4 border-start border-5">
        <p class="lead">Après la fin de mes études d'ingénieur généraliste avec une spécialisation mécanique suivie
            d'une "reconversion" dans
    un secteur assez étranger au monde de l'industrie, j'ai senti le besoin de me mettre à un projet un peu stimulant,
            impliquant l'apprentissage de nouvelles
            technologies et un minimum de compétences scientifiques (logique, résolution de problèmes, etc.).
            Le développement informatique est l'idéal pour ça.
    Le problème, c'est que mon nouveau mode de vie m'interdit l'usage privé de l'ordinateur mis à ma disposition et, au départ
    en tout cas, je n'avais pas les droits d'administrateur sur cette machine.
    C'est la curiosité qui m'a décidé d'abord à reprendre le contrôle sur cet ordinateur. Au fond, comment faire quand
            on est ingénieur et que l'on vous file un ordi où tout est bloqué ? Ni une, ni deux,
    je me suis plongé dans le monde fascinant des hackers. Et très vite, au cours de mes recherches sur le sujet,
            l'idée d'apprendre un langage de programmation a germé .</p>
</div>
    <div class="row p-4">

    <img class="col-sm-6 rounded shadow img-fluid" src="{% static '/img/pycharmCrypto.png' %}" alt="pycharm" >
    <h3 class="col-sm-6 lead text-justify {% if not user.is_authenticated %} text-truncate {% endif %} ">
        En fait j'ai eu l'idée de me mettre à Python
        quand j'ai compris qu'un véritable hacker devait être capable d'écrire soi-même des
        scripts en fonction de ses besoins.
        {% if user.is_authenticated %}
        Alors tout de suite je m'y suis mis. Si vous voulez savoir la suite de ma petite histoire de hacker
        lisez mon article <a href="{% url 'lire-article' slug=4 %}">Comment j'ai hacké le domaine de mon entreprise</a>
        {% endif %}
    </h3>
        </div>
    {% if not user.is_authenticated %}
    <div class="row justify-content-center text-center">
    <a href="{% url 'main' %}login" class="btn btn-lg col-sm-5 btn-info text-center my-2"> Inscrivez-vous et/ou connectez-vous pour lire la suite. </a>
</div>
    {% endif %}
</div>
</section>


{% block text %}
{% endblock %} 

{% endblock %}"""
