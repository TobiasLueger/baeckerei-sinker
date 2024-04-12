import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero
        title={<span><span>Tradition seit</span> <br/> <span className="w-full flex justify-end">über 50 Jahren</span></span>}
        videoSrc="/video/hero/baeckerei-sinker.webm"
        heroImage="/img/hero/baecker-hero.jpg"
      />
      <main id="1">Home</main>
    </>
  );
}
