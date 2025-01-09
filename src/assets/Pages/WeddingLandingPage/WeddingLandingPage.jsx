import Aos from "aos";
import { useEffect, useRef, useState } from "react";
import "aos/dist/aos.css";
import BrideAndGroome from "../../Components/BrideandGroome/BrideAndGroome";
import Prayer from "../../Components/Prayer/Prayer";
import TimeLine from "../../Components/TimeLine/TimeLine";
import Gallery from "../../Components/Gallery/Gallery";
import Event from "../../Components/Event/Event";
import Comment from "../../Components/Comment/Comment";
import Gift from "../../Components/Gift/Gift";
import Footer from "../../Components/Footer/Footer";
const WeddingLandingPage = () => {
    const [isInvitationOpened, setIsInvitationOpened] = useState(false);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const audioRef = useRef(null);
  
    useEffect(() => {
      Aos.init({
        mirror: true,
      });
  
      Aos.refresh();
    }, []);
  
    const handleOpenInvitation = () => {
      const heroSection = document.getElementById("home");
      heroSection.classList.add("fade-out");
  
      setTimeout(() => {
        setIsInvitationOpened(true);
        document.body.style.overflow = "auto";
        handlePlayMusic();
      }, 500);
    };
  
    const handlePlayMusic = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsMusicPlaying(true);
          })
          .catch((error) => {
            console.error("Gagal memutar musik:", error);
          });
      }
    };
  
    const handleToggleMusic = () => {
      if (audioRef.current) {
        if (isMusicPlaying) {
          audioRef.current.pause();
          setIsMusicPlaying(false);
        } else {
          audioRef.current
            .play()
            .then(() => {
              setIsMusicPlaying(true);
            })
            .catch((error) => {
              console.error("Gagal memutar musik:", error);
            });
        }
      }
    };
  
  
    // Mendapatkan parameter `name` dari URL
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get("name") || "Beloved";
  
    // Format nama: decode karakter URL dan ganti "+" dengan spasi
    const formattedName = decodeURIComponent(name).replace(/\+/g, " ");
  return (
    <>
    <div className="fixed top-0 left-0 -z-10 brightness-50 overflow-x-hidden overflow-y-hidden">
      <img
        src={"/images/foto1.jpg"}
        alt=""
        className="h-[790px] w-[1400px] object-cover object-center"
      />
    </div>
    {!isInvitationOpened && (
      <div className="relative fade-in" id="home" data-aos="fade-zoom-in">
        <img
          className="w-full lg:h-[750px] h-[790px] object-cover filter brightness-50"
          src={"/images/foto1.jpg"}
          alt="background"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <p
            className="text-2xl"
            data-aos="fade-up"
            style={{ fontFamily: "Nothing You Could Do" }}
          >
            The Wedding Of
          </p>
          <h1 className="text-6xl font-bold" style={{ fontFamily: "Caveat" }}>
            <div className="flex justify-center">
              <div data-aos="fade-right">Jone</div>{" "}
              <span className="mx-3">&</span>{" "}
              <div data-aos="fade-left">June</div>
            </div>
          </h1>
          <div data-aos="zoom-in">
            <p className="text-xl">Dear:</p>
            <p className="text-xl" style={{ fontFamily: "Space Grotesk" }}>
              {formattedName}
            </p>
          
            <p
              className="lg:text-3xl text-sm font-bold"
              style={{ fontFamily: "Nothing You Could Do" }}
            >
              We are inviting you to the wedding
            </p>
          </div>

          <button
            className="mt-4 px-6 py-2 btn btn-primary"
            onClick={handleOpenInvitation}
          >
            Open Invitation
          </button>
        </div>
      </div>
    )}

    {/* Content after Hero Section */}
    {isInvitationOpened && (
      <div className="overflow-x-hidden">
        
            <BrideAndGroome />
            <Prayer />
            <TimeLine/>
            <Gallery/>
            <Event/>
            <Comment/>
            <Gift/>
            <Footer/>
      </div>
    )}

    {/* Music Player */}
    <audio ref={audioRef} src="/music/wedding-bell.mp3" loop />
    {isInvitationOpened && (
      <div
        className="fixed bottom-4 right-3 z-50"
        style={{ zIndex: 9999 }} // Selalu di atas konten
      >
        <button
          className="btn btn-circle btn-primary opacity-60"
          onClick={handleToggleMusic}
        >
          {isMusicPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
            </svg> // Icon untuk jeda
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pause-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5" />
            </svg> // Icon untuk putar
          )}
        </button>
      </div>
    )}
  </>
  )
}

export default WeddingLandingPage
