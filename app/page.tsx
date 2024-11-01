import AboutMe from "@/components/AboutMe";
import Navbar from "@/components/Navbar";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <div className="font-spartan flex items-center flex-col">
      <AboutMe />
      <Resume />
    </div>
  );
}
