export const HomeContainer = () => {
  return <>
    <section className="container-video">
      <video id="video-head" src="radiohead/files/KID A MNESIA EXHIBITION trailer.mp4" poster="../../files/kidAmnesiaPoster.jpg" controls autoPlay muted></video>
    </section>

    <section className="container-arrow"><a href="#main-nav__link"><img src="../../files/down-arrow.png" id="arrow" /></a></section>

    <section id="picture-head"><img id="picture-head" src="../../files/radiohead-picture.jpg" alt="kid-a-picture" /></section>

    <section className="container-button">
      <div className="button-logo">
        <a id="epic-games" href="https://www.epicgames.com/store/es-ES/p/kid-a-mnesia-exhibition"><img id="epic-games" src="../../files/epic-games.png" alt="Logo Epic Games" /></a>
        <a id="epic-games-dark" href="https://www.epicgames.com/store/es-ES/p/kid-a-mnesia-exhibition"><img id="epic-games-dark" src="../../files/epic-games-dark.png" alt="Logo Epic Games" /></a>

        <a id="play-station" href="https://store.playstation.com/es-mx/concept/10003085/"><img id="play-station" src="../../files/play-station.png" alt="Logo PlayStation" /></a>
        <a id="play-station-dark" href="https://store.playstation.com/es-mx/concept/10003085/"><img id="play-station-dark" src="../../files/play-station-dark.png" alt="Logo PlayStation" /></a>
      </div>
    </section>
  </>
}