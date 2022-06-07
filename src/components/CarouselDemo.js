import ReactCarousel from "./Carousel";
import { Autoplay } from "@fancyapps/ui/dist/carousel.autoplay.esm.js";

const CarouselDemo = () => {
  return (
    <ReactCarousel
      items={[
        '<img src="https://anhdep123.com/109-hinh-anh-phong-canh-ve-thien-nhien-dep-hung-vi/hinh-anh-phong-canh-dep/" class="w-full h-[200px] object-cover" />',
        '<img src="https://anhdep123.com/109-hinh-anh-phong-canh-ve-thien-nhien-dep-hung-vi/hinh-anh-phong-canh-dep/" class="w-full h-[200px] object-cover" />',
        '<img src="https://anhdep123.com/109-hinh-anh-phong-canh-ve-thien-nhien-dep-hung-vi/hinh-anh-phong-canh-dep/" class="w-full h-[200px] object-cover" />',
        '<img src="https://anhdep123.com/109-hinh-anh-phong-canh-ve-thien-nhien-dep-hung-vi/hinh-anh-phong-canh-dep/" class="w-full h-[200px] object-cover" />',
      ]}
      Autoplay={{ timout: 100 }}
      options={{ infinite: true }}
    ></ReactCarousel>
  );
};

export default CarouselDemo;
