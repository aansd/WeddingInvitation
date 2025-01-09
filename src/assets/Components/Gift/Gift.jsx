
const Gift = () => {
    return (
      <div className="lg:w-[1000px] w-full mx-auto h-full py-52">
      <div className="text-center px-4 mb-5">
          <h1 className="text-4xl mb-5" style={{ fontFamily: "Nothing You Could Do" }}>Wedding Love Gift</h1>
          <p>
              Terima kasih atas doa dan restu yang telah anda berikan.
              Jika Anda ingin mengirimkan kado nikah, silakan kirim dengan
              cara di bawah ini. Sebelumnya, kami mengucapkan banyak
              terima kasih.
          </p>
      </div>
      <div className="text-center">
          <div className="mb-2">
              <button
                  className="btn lg:w-96 w-44"
                  onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                  }
              >
                  Bank Transfer
              </button>
              <dialog id="my_modal_1" className="modal">
                  <div className="modal-box rounded opacity-95">
                      <h3 className="font-bold text-lg text-center mb-5">
                          Nomor Rekening
                      </h3>
                      <div className="flex flex-col items-center mb-10">
                          <img
                              src="/images/bank/bjb.png"
                              alt=""
                              className="w-32 mb-2"
                          />
                          <p className="text-center">A/N: Jone simatupang</p>
                          <p className="text-center">0000000000</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <img
                              src="/images/bank/dana.png"
                              alt=""
                              className="w-32 mb-2"
                          />
                          <p className="text-center">A/N: June felintino</p>
                          <p className="text-center">0000000000</p>
                      </div>
                      <div className="modal-action">
                          <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn">Close</button>
                          </form>
                      </div>
                  </div>
              </dialog>
          </div>
          <div>
              <button
                  className="btn lg:w-96 w-44"
                  onClick={() =>
                      document.getElementById("my_modal_2").showModal()
                  }
              >
                  Kirim Kado
              </button>
              <dialog id="my_modal_2" className="modal">
                  <div className="modal-box rounded-none opacity-95">
                      <h3 className="font-bold text-lg">Alamat Pengiriman</h3>
                      <p className="py-4">
                      Jl. Diponogoro merak hitam jawa timur
                      </p>
                      <div className="modal-action">
                          <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn">Close</button>
                          </form>
                      </div>
                  </div>
              </dialog>
          </div>
      </div>
  </div>
    )
  }
  
  export default Gift
  