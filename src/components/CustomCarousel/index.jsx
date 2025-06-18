import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const arrowStyles = {
  position: "absolute",
  top: "calc(50% - 15px)",
  zIndex: 2,
  width: 30,
  height: 30,
  cursor: "pointer",
  border: "none",
  background: "rgba(0, 0, 0, 0.5)",
  color: "#fff",
  fontSize: "35px",
  borderRadius: "50%",
};

export default function CustomCarousel({ images = [], isMobile = false }) {
  return (
    <Box
      sx={{
        boxShadow: 3,
        overflow: "hidden",
        borderRadius: 2,
      }}
    >
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        swipeable={isMobile}
        emulateTouch={true}
        stopOnHover={true}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              style={{ ...arrowStyles, left: 15 }}>
              <span style={{ display: "block", transform: "translateY(-8px)" }}>
                ‹
              </span>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              style={{ ...arrowStyles, right: 15 }}>
              <span style={{ display: "block", transform: "translateY(-8px)" }}>
                ›
              </span>
            </button>
          )
        }>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt || `Slide ${index + 1}`}
            style={{
              width:'100%',
              height: '100%',
              objectFit: 'cover', 
            }}
          />
        ))}
      </Carousel>
    </Box>
  );
}