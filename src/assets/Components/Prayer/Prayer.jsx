import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Prayer = () => {
    useEffect(() => {
        Aos.init({
            mirror: true,
        });
        Aos.refresh();
    }, []);
  return (
    <div>
    <div className="relative w-full lg:h-[800px] h-[1000px] overflow-hidden">
         {/* Gambar Latar */}
         <div className="absolute inset-0">
             <img
                 src="/images/prayer.jpg"
                 alt="Background"
                 className="w-full h-[1000px] object-cover brightness-50"

             />
         </div>
         <div
             className=" text-slate-300 items-center lg:px-20 absolute mt-[40px] text-center"
             style={{ fontFamily: "PlayFair"}}
         >
             <div className="card-body text-slate-300 ">
                 <h2 className="lg:text-6xl text-2xl" style={{ fontFamily: "PlayFair" }} data-aos="fade-down">
                     Love seems the swiftest but it is the slowest of all
                     growths.
                 </h2>
             </div>
         </div>
         <div className=" text-slate-300 justify-center items-center absolute lg:mt-[250px] mt-[170px] text-center lg:flex lg:px-28">
         <div className="flex justify-center items-center">
             <img
                 src="/images/prayer.jpg"
                 alt="prayer "
                 className="lg:h-[500px] h-[450px] w-[300px]  object-cover"
                 data-aos="zoom-in"
             />
         </div>
             <div className="card-body text-slate-300 lg:w-[700px]"  style={{ fontFamily: "PlayFair" }} data-aos="fade-up">
                 <h2 className="text-1xl">
                     “Dan diantara tanda-tanda (kebesaran)-Nya ialah Dia
                     menciptakan pasangan-pasangan untukmu dari jenismu
                     sendiri, agar kamu cenderung dan merasa tenteram
                     kepadanya dan Dia menjadikan diantaramu rasa kasih dan
                     sayang. Sungguh, pada yang demikian itu benar-benar
                     terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
                     berpikir.“
                 </h2>
                 <p>QS. Ar-Rum : 21</p>
             </div>
         </div>
         {/* Figure di Lapisan Atas */}
     </div>
 </div>
  )
}

export default Prayer
