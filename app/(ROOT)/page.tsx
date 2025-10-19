import Banner from "@/components/Banner";
import GettingStarted from "@/components/GettingStarted";
import QuickStart from "@/components/QuickStart";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner />
      <GettingStarted />
      <Teachers />
      <Testimonials />
      <QuickStart />
    </div>
  );
}
