import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
const Gallery = () => {
    useEffect(() => {
        Aos.init({
            mirror: true,
        });
        Aos.refresh();
    }, []);
  return (
    <div className="lg:h-[800px] h-[1410px] py-20">
    <div>
      <h1 className="text-center text-3xl font-bold mb-8">Our Moment</h1>
      <div className="grid gap-2 justify-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:px-24 px-2">
        <div data-aos="zoom-in">
          <img className="h-[300px] w-[250px] object-cover" src="/images/gallery1.jpg" alt="Gallery 1" />
        </div>
        <div data-aos="zoom-in">
          <img className="h-[300px] w-[250px] object-cover" src="/images/gallery2.jpg" alt="Gallery 2" />
        </div>
        <div data-aos="zoom-in">
          <img className="h-[300px] w-[250px] object-cover" src="/images/gallery3.jpg" alt="Gallery 3" />
        </div>
        <div data-aos="zoom-in">
          <img className="h-[300px] w-[250px] object-cover" src="/images/gallery4.jpg" alt="Gallery 4" />
        </div>
        <div data-aos="zoom-in">
          <img className="h-[300px] w-[250px] object-cover" src="/images/gallery5.jpg" alt="Gallery 5" />
        </div>
        <div data-aos="zoom-in">
          <img className="h-[300px] w-[250px] object-cover" src="/images/gallery6.jpg" alt="Gallery 6" />
        </div>
        <div data-aos="zoom-in">
          <img className="h-[300px] w-[250px] object-cover" src="/images/gallery7.jpg" alt="Gallery 7" />
        </div>
        <div data-aos="zoom-in">
          <img className="h-[300px] w-[250px] object-cover" src="/images/gallery8.jpg" alt="Gallery 8" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Gallery
