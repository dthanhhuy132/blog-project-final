import React, { useRef, useEffect } from "react";
import { Carousel as NativeCarousel } from "@fancyapps/ui/src/Carousel/Carousel";
import "@fancyapps/ui/dist/carousel.css";

function ReactCarousel(props) {
  const wrapper = useRef(null);

  useEffect(() => {
    const items = props.items || [];
    const opts = props.options || {};

    opts.slides = [...items].map((val) => {
      return { html: val };
    });

    const instance = new NativeCarousel(wrapper.current, opts);

    return () => {
      instance.destroy();
    };
  }, []);

  return <div className={`carousel ${props.class || ""}`} ref={wrapper}></div>;
}

export default ReactCarousel;
