import { useState } from "react";

const Event = () => {
    const [mapVisible, setMapVisible] = useState(false);
    const [location, setLocation] = useState(""); // Menyimpan lokasi yang dipilih
  
    const handleViewLocation = (locationUrl) => {
      setLocation(locationUrl); // Atur lokasi berdasarkan tombol yang diklik
      setMapVisible(true); // Tampilkan peta
    };
  
    const closeMap = () => {
      setMapVisible(false); // Sembunyikan peta
      setLocation("");
    };
  return (
    <div className="lg:h-[700px] h-[1000px] -mt-16">
    <div className="text-center">
      <h1
        className="text-slate-200 pt-28 pb-5 lg:text-4xl text-3xl"
        style={{ fontFamily: "Nothing You Could Do" }}
      >
        Save The Date
      </h1>
    </div>
    <div className="lg:flex h-[500px] justify-center items-center gap-5 lg:px-0 px-5">
      {/* Akad Card */}
      <div
        data-aos="zoom-in"
        className="text-neutral-content lg:w-96 border-slate-400 border-2 h-[400px] bg-slate-900 bg-opacity-70 rounded-md lg:mb-0 mb-2"
      >
        <div className="card-body items-center text-center text-slate-400 pt-20">
          <h2 className="card-title">Akad</h2>
          <p>Sabtu, 29 Februari 2025</p>
          <p>08.00 - 10.00</p>
          <p>Gedung A</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary btn-sm"
              onClick={() =>
                handleViewLocation(
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505763.3045984998!2d111.1997366395352!3d-7.970421048575365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e790b859cfee851%3A0x3027a76e352bea0!2sKabupaten%20Ponorogo%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1736418377145!5m2!1sid!2sid"
                )
              }
            >
              View Location
            </button>
          </div>
          <p>Jl. Diponogoro merak hitam jawa timur</p>
        </div>
      </div>
      {/* Resepsi Card */}
      <div
        data-aos="zoom-in"
        className="text-neutral-content lg:w-96 border-slate-400 border-2 h-[400px] bg-slate-900 bg-opacity-70 rounded-md"
      >
        <div className="card-body items-center text-center pt-20 text-slate-400">
          <h2 className="card-title">Resepsi</h2>
          <p>Minggu, 30 Februari 2025</p>
          <p>08.00 - Selesai</p>
          <p>Gedung A</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary btn-sm"
              onClick={() =>
                handleViewLocation(
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505763.3045984998!2d111.1997366395352!3d-7.970421048575365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e790b859cfee851%3A0x3027a76e352bea0!2sKabupaten%20Ponorogo%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1736418377145!5m2!1sid!2sid"
                )
              }
            >
              View Location
            </button>
          </div>
          <p>
            Jl. Diponogoro merak hitam jawa timur jalapeno pemakasa kecamatan
            satu dua tiga 4
          </p>
        </div>
      </div>
    </div>

    {/* Map Modal */}
    {mapVisible && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={closeMap}
      >
        <div
          className="bg-white p-4 rounded-md w-[90%] md:w-[50%] relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 text-red-500"
            onClick={closeMap}
          >
            ✖
          </button>
          <iframe
            src={location}
            title="Google Maps Location"
            className="w-full h-64 md:h-96"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    )}
  </div>
  )
}

export default Event
