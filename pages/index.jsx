import fs from "fs";
import path from "path";
import settings from "../content/settings.json";
import Header from "../components/Header";
import SmartStatus from "../components/SmartStatus";
import Announcement from "../components/Announcement";
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
      <SmartStatus/>
      <Announcement/>
      <Hero/>
      {settings.gallery?.enabled && (
        <section id="gallery" style={{
          padding: "var(--spacing-2xl) 0", 
          background: "linear-gradient(135deg, var(--cl-light-1) 0%, #ffffff 100%)"
        }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{
                margin: "0 0 1rem",
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                fontWeight: "800",
                color: "var(--cl-dark-1)",
                background: "linear-gradient(135deg, var(--cl-primary), var(--cl-accent))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                {settings.gallery.title || "🖼️ Galleri"}
              </h2>
              {settings.gallery.description && (
                <p style={{
                  fontSize: "1.125rem",
                  color: "var(--cl-text-muted)",
                  maxWidth: "500px",
                  margin: "0 auto"
                }}>
                  {settings.gallery.description}
                </p>
              )}
            </div>
            <Carousel images={gallery} />
          </div>
        </section>
      )}
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
