import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const BrideAndGroome = () => {
    useEffect(() => {
        Aos.init({
          mirror: true,
        });
        Aos.refresh();
      }, []);
  return (
    <div className="flex flex-col justify-center items-center lg:gap-32 -mt-16">
    {/* Bride Card */}
    <div className=" w-full h-full">
      <div className="card-body text-primary items-center text-center"></div>
      <div className="relative">
        {/* Text Layer */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <h1
            className="lg:text-7xl text-6xl text-slate-300"
            style={{ fontFamily: "Pacifico" }}
            data-aos="zoom-in"
          >
            The Wedding
          </h1>
          <div
            className="text-4xl mt-5 font-bold"
            style={{ fontFamily: "Nothing You Could Do" }}
            data-aos="zoom-in"
          >
            <p className="mr-32 text-slate-300">June</p>{" "}
            <p className="text-primary">&</p>
            <p className="ml-28  text-slate-300">Jone</p>
          </div>
        </div>

        {/* Image Layer */}
        <img
          src="/images/open-2.jpg"
          alt="Bride"
          className="h-[650px] w-full object-cover brightness-75"
          data-aos="fade-down"
        />
      </div>
    </div>
    <div className="lg:flex">
      <div className=" card w-full relative rounded-none lg:-mt-32">
        {/* Gambar Latar */}
        <div>
          <img
            src="/images/bride.jpg"
            alt="Bride Background"
            className="h-[700px] w-full brightness-50"
          />
        </div>

        <div className=" text-slate-300 items-center right-1 absolute mt-[569px] transform -translate-x-0 -translate-y-1/2 z-10">
          <div className="card-body w-[1000px] text-slate-300 text-right">
            <h2 className="text-2xl" style={{ fontFamily: "Space Grotesk" }}>
              June felintino
            </h2>
            <div className="ml-[816px]">
              <a
                href="https://www.instagram.com"
                target="blank_"
                className="flex btn btn-outline rounded-none btn-sm w-[120px]"
              >
                <img
                  src="/images/insta.png"
                  alt="Instagram"
                  className="w-[30px]"
                />
                <span className="text-black -ml-3">Instagram</span>
              </a>
            </div>
            <p>Purti Kedua dari</p>
            <div className="" style={{ fontFamily: "Space Grotesk" }}>
              <p>ibu Ngatimen diningrad dan</p>
              <p>bapak susilo majapahit</p>
            </div>
          </div>
        </div>
        <figure
          className="absolute top-16 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10"
          data-aos="zoom-in"
        >
          <div className="h-[400px] lg:w-[300px] w-[270px] bg-slate-200"></div>
        </figure>
        <div className="absolute top-80 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10 -rotate-90">
          <div
            className="flex text-slate-600 lg:mt-10 mt-9"
            style={{ fontFamily: "PlayFair" }}
          >
            <h1 className="lg:text-5xl text-4xl font-bold mr-10">The</h1>
          </div>
        </div>
        {/* Figure di Lapisan Atas */}
        <figure
          className="absolute top-5 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10"
          data-aos="fade-right"
        >
          <img
            src="/images/bride.jpg"
            alt="Bride"
            className="h-[400px] w-[400px]"
          />
        </figure>
        <div className="absolute lg:top-52 top-60 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10 -rotate-90">
          <div
            className="flex text-slate-600 lg:mt-16 mt-16"
            style={{ fontFamily: "PlayFair" }}
          >
            <h1 className="lg:text-6xl text-5xl font-bold">Bride</h1>
          </div>
        </div>
      </div>

      {/* groom */}
      <div className="card w-full relative rounded-none lg:-mt-32">
        {/* Gambar Latar */}
        <div>
          <img
            src="/images/groom.jpg"
            alt="Bride Background"
            className="h-[700px] w-full brightness-50"
          />
        </div>

        <div className=" text-slate-300 items-center absolute mt-[570px] transform -translate-x-0 -translate-y-1/2 z-10">
          <div className="card-body text-slate-300 ">
            <h2 className="text-2xl" style={{ fontFamily: "Space Grotesk" }}>
              Jone simatupang
            </h2>
            <a
              href="https://www.instagram.com"
              target="blank_"
              className="flex btn btn-outline rounded-none btn-sm w-[120px]"
            >
              <img
                src="/images/insta.png"
                alt="Instagram"
                className="w-[30px]"
              />
              <span className="text-black -ml-3">Instagram</span>
            </a>
            <p>Purta Kedua dari</p>
            <div className="" style={{ fontFamily: "Space Grotesk" }}>
              <p>ibu Ngatimen diningrad dan</p>
              <p>bapak susilo majapahit</p>
            </div>
          </div>
        </div>
        <figure
          className="absolute top-16 right-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10"
          data-aos="zoom-in"
        >
          <div className="h-[400px] lg:w-[300px] w-[270px] bg-slate-200"></div>
        </figure>
        <div className="absolute lg:top-32 top-32 right-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10 rotate-90">
          <div
            className="flex text-slate-600 lg:-mt-[120px] -mt-[97px]"
            style={{ fontFamily: "PlayFair" }}
          >
            <h1 className="lg:text-5xl text-4xl font-bold ml-10">The</h1>
          </div>
        </div>
        {/* Figure di Lapisan Atas */}
        <figure
          className="absolute top-5 right-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10"
          data-aos="fade-left"
        >
          <img
            src="/images/groom.jpg"
            alt="Bride"
            className="h-[400px] w-[400px]"
          />
        </figure>
        <div className="absolute lg:top-72 top-64 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10 rotate-90">
          <div
            className="flex text-slate-600 lg:-mt-[212px] -mt-[190px]"
            style={{ fontFamily: "PlayFair" }}
          >
            <h1 className="lg:text-6xl text-5xl font-bold">Groom</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BrideAndGroome
