import AboutMe from "@/components/AboutMe";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-spartan flex items-center flex-col">
      <Navbar />
      <AboutMe/>
    </div>
  );
}
