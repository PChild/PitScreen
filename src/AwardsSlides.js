import ReactGoogleSlides from "react-google-slides";

export default function AwardsSlides() {
  return (
    <ReactGoogleSlides
      width="100%"
      height="100%"
      slidesLink="https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM"
      slideDuration={5}
      showControls
      loop
    />
  );
}
