import { Fellowship } from "@/components/Fellowship";
import { GetInvolved } from "@/components/GetInvolved";
import { Gubaye } from "@/components/Gubaye";
import { Hero } from "@/components/Hero";
import { Resources } from "@/components/Resources";
import { Story } from "@/components/Story";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Story />
      <Fellowship />
      <Gubaye />
      <Resources />
      <GetInvolved />
    </main>
  );
}
