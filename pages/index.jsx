import fs from "fs";
import path from "path";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import WorkingHours from "../components/WorkingHours";
import PaymentInfo from "../components/PaymentInfo";
import PriceList from "../components/PriceList";
import Footer from "../components/Footer";

export default function Home({ gallery }){
  return (
    <main>
      <Header/>
      <Hero/>
      <section id="gallery" style={{
        padding: "var(--spacing-2xl) 0", 
        background: "linear-gradient(135deg, var(--cl-light-1) 0%, #ffffff 100%)"
      }}>
        <div className="container">
          <h2 style={{
            textAlign: "center", 
            margin: "0 0 3rem",
            fontSize: "clamp(2rem, 4vw, 2.5rem)",
            fontWeight: "800",
            color: "var(--cl-dark-1)",
            background: "linear-gradient(135deg, var(--cl-primary), var(--cl-accent))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            🖼️ Galleri
          </h2>
          <Carousel images={gallery} />
        </div>
      </section>
      <WorkingHours/>
      <PaymentInfo/>
      <PriceList/>
      <Footer/>
    </main>
  );
}

export async function getStaticProps(){
  const dir = path.join(process.cwd(), "public", "gallery");
  let files = [];
  try {
    files = fs.readdirSync(dir)
      .filter(f=>/\.(png|jpe?g|webp|gif)$/i.test(f))
      .map(f=>`/gallery/${f}`);
  } catch(e){ /* no images yet */ }
  return { props: { gallery: files } };
}
