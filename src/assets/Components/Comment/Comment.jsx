import { useState } from "react";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Comment = () => {
    const [comments, setComments] = useState([]); // State untuk menyimpan daftar ucapan
    const [formData, setFormData] = useState({
        name: "",
        message: "",
        attendance: "",
        guests: 1,
    });

    // Fungsi untuk menangani perubahan input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Fungsi untuk menambahkan ucapan ke tabel
    const handleAddComment = () => {
        if (formData.name && formData.message && formData.attendance) {
            setComments((prev) => [...prev, formData]); // Tambahkan ucapan ke state
            setFormData({ name: "", message: "", attendance: "", guests: 1 });
            toast.success("Ucapan berhasil ditambahkan!", {
              }); 
        } else {
            toast.warning("Mohon isi Nama, Ucapan dan kehadiran Anda terlebih dahulu", {
              });
        }
    };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
    <div className="lg:w-[1000px] w-full mx-auto border rounded-md p-6">
        <div className="w-full text-center mb-6">
            <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: "PlayFair" }}>
                RSVP & Ucapan
            </h1>
            <p style={{ fontFamily: "PlayFair" }}>
                Kami sangat menantikan kehadiranmu. Silakan konfirmasi
                kehadiran dengan mengisi formulir RSVP di bawah ini agar
                kami dapat mempersiapkan segala sesuatunya dengan baik.
            </p>
        </div>
        <div className="lg:flex gap-10 justify-center items-start">
            {/* Form Input */}
            <div className="join join-vertical opacity-75 lg:mb-0 mb-5">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nama"
                    className="input input-bordered lg:w-96 w-72 mb-2"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="textarea textarea-bordered mb-2"
                    placeholder="Ucapan"
                ></textarea>
                <select
                    name="attendance"
                    value={formData.attendance}
                    onChange={handleInputChange}
                    className="select select-bordered mb-2"
                >
                    <option disabled value="">
                        Konfirmasi Kehadiran
                    </option>
                    <option>Hadir</option>
                    <option>Tidak Bisa Hadir</option>
                </select>
                <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    placeholder="Jumlah Tamu"
                    className="input input-bordered mb-2"
                    min={1}
                    max={100}
                />
                <button
                    className="btn btn-outline w-32 text-center btn-sm"
                    onClick={handleAddComment}
                >
                    Beri Ucapan
                </button>
            </div>

            {/* Tabel Ucapan */}
            <div>
                <div className="h-96 overflow-x-auto lg:w-96">
                    <table className="table table-pin-rows">
                        <thead>
                            <tr>
                                <th>Ucapan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comments.map((comment, index) => (
                                <tr key={index}>
                                    <td>
                                        <h1 className="text-xl">{comment.name}</h1>
                                        <p>{comment.message}</p>
                                    </td>
                                </tr>
                            ))}
                            {comments.length === 0 && (
                                <tr>
                                    <td className="text-center">Belum ada Ucapan</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Comment
