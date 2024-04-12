import Hero from "@/components/Hero/Hero";

export default function Ausbildung() {
  return (
    <>
      <Hero
        title={
          <span>
            <span>Wanted:</span>
            <br/>
            <span>Auszubildende fürs Bäckerhandwerk</span>
          </span>
        }
        videoSrc="/video/hero/baeckerei-sinker.webm"
        heroImage="/img/hero/ausbildung-hero.jpg"
      />
      <main id="1">Ausbildung</main>
    </>
  );
}
