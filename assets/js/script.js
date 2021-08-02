
class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (nuevo_url) => _ = nuevo_url;

    }

    get url() {
        return this.getUrl();
    }

    set url(nuevo_url) {
        this.setUrl(nuevo_url);
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

class Reproductor extends Multimedia {
    play = (() => {

        let insertadoPrivado = (id, url) => {
            document.getElementById(id).setAttribute("src", url);

        }

        return {
            isertado: (id, url) => {
                insertadoPrivado(id, url);
                console.log("insertado");
            }
        }
    })();

    constructor(id, url) {
        super(url)
        let _id = id;
        this.getId = () => _id;

    }

    get id() {
        return this.getId();
    }

    playMultimedia() {
        this.play.isertado(this.id, this.url);
    }

    setInicio(tiempo) {
        document.getElementById(this.id).setAttribute("src", `${this.url}?start=${tiempo}”`);
    }
}



const musica = new Reproductor("iflameMusica", "https://www.youtube.com/embed/HhHW5f9LYC8"); //avengers
const pelicula = new Reproductor("iflamePelicula", "https://www.youtube-nocookie.com/embed/6ZfuNTqbHE8"); //avengers
const serie = new Reproductor("iflameSerie", "https://www.youtube-nocookie.com/embed/nW948Va-l10"); //loki

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();
serie.setInicio(5); //no funciona
