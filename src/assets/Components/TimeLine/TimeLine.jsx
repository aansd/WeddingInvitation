
const TimeLine = () => {
  return (
    <div className="pt-10 px-2 lg:h-[800px]">
    <h1
      className="text-center lg:text-5xl text-5xl mb-10 text-slate-300"
      style={{ fontFamily: "Pacifico" }}
    >
      Love Story
    </h1>
    <ul className="timeline timeline-snap-icon min-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic text-slate-300">2022</time>
          <div className="text-lg font-black text-primary">
            Pertama Bertemu
          </div>
          <p className="text-slate-300">
            Kami bertemu pertama kali di Grand Bazaar, Istanbul. Saat itu aku
            sedang berbelanja oleh-oleh, dan dia tanpa sengaja membantu
            menawar barang. Dari situ, percakapan ringan berubah menjadi
            pertemuan yang tidak terlupakan. mouse.
          </p>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10 ">
          <time className="font-mono italic text-slate-300">2024</time>
          <div className="text-lg font-black text-primary">Mulai Serius</div>
          <p className=" text-slate-300">
            Liburan bersama ke Cappadocia adalah salah satu kenangan terindah
            kami. Di bawah langit yang dipenuhi balon udara, kami saling
            berbagi cerita dan impian. Sejak saat itu, kami merasa ada ikatan
            yang semakin kuat di antara kami.
          </p>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic  text-slate-300">2025</time>
          <div className="text-lg font-black text-primary">
            Mengikat Janji
          </div>
          <p className=" text-slate-300">
            Kami memutuskan untuk mengikat janji suci di tepi Selat Bosphorus,
            tempat yang memiliki makna mendalam bagi kami. Dengan keluarga dan
            teman-teman dekat yang hadir, hari itu akan menjadi awal
            perjalanan baru sebagai pasangan suami istri.
          </p>
        </div>
        <hr />
      </li>
    </ul>
  </div>
  )
}

export default TimeLine
