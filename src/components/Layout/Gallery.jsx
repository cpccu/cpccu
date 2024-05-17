import GalleryScrollProvider from "../../Context/GalleryScroll/GalleryScrollProvider";
import GalleryHeader from "../GALLERY/GalleryHeader";
import GalleryMain from "../GALLERY/GalleryMain";

export default function Gallery() {
  return (
    <GalleryScrollProvider>
      <GalleryHeader />
      <GalleryMain />
    </GalleryScrollProvider>
  );
}
