import Hero from "../components/Hero";
import { Contact, Reviews } from "../components/Sections";
import { DarkList, FullBleed, Pricing, Stacked, Work } from "../components/Showcase";
import { Marquee } from "../components/MotionBits";
import { TreelineDivider } from "../components/DecorBits";
import { RouteFX } from "../components/PageBits";

const MARQUEE_ITEMS = [
  "Lawn Mowing",
  "Edging",
  "Fertilization",
  "Aeration",
  "Yard Cleanup",
  "Mulch & Beds",
  "Dallas",
  "Garland",
  "Plano",
  "Richardson",
  "Free Estimates",
];

export default function Home() {
  return (
    <>
      <RouteFX
        title="Lawn Care and Landscaping | Lawn Mowing & Care in Dallas, TX"
        description="Lawn Care and Landscaping — mowing, edging, fertilization, and cleanups across Dallas, TX. Free estimates."
      />
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <Stacked />
      <DarkList />
      <TreelineDivider />
      <FullBleed />
      <Work />
      <Pricing />
      <Reviews />
      <Contact />
    </>
  );
}
