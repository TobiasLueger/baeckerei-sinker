import ContentBox from "@/components/ContentBox/ContentBox";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero
        title={<span><span>Tradition seit</span> <br/> <span className="w-full flex justify-end">über 50 Jahren</span></span>}
        videoSrc="/video/hero/baeckerei-sinker.webm"
        heroImage="/img/hero/baecker-hero.jpg"
      />
      <main id="1">
        <ContentBox 
          title="Über Uns" 
          copy={
            <span className="font-copy text-xl leading-8">
              Die Bäckerei Sinker ist eine traditionsreiche hauptsächlich familiengeführte Handwerksbäckerei. Bereits seit über 50 Jahren werden hier täglich frische Backwaren gezaubert.
              <br/><br/>
              Unsere BäckerInnen und KonditorInnen backen für Sie auf traditionelle handwerkliche Art und Weise, nach alten und neuen Rezepten, Brot und Brötchen, süße Stückchen sowie Kuchen und Torten. Dabei beherzigen wir unsere Backtradition und versuchen die Produkte stetig zu optimieren und noch schmackhafter zu machen als sie ohnehin schon sind.
              <br/><br/>
              Wir legen größten Wert auf Qualität, Service und Nachhaltigkeit. Deshalb entstehen bei uns Back- und Konditorwaren ausschließlich aus natürlichen Rohstoffen, die hauptsächlich aus der Region stammen. So backen wir mit Leidenschaft und Qualität die man schmeckt.
              <br/><br/>
              Das erfolgreiche Familienunternehmen verbindet moderne Technik, ökologisches Bewusstsein und handwerkliches Können.
            </span>
          } 
          bgImg="first"  
        />
        <div className="bg-black h-56 text-white">Produkte</div>
        <ContentBox 
          title="Partner" 
          copy={
            <span className="font-copy text-xl leading-8">
              Um Ihnen täglich Frische und Qualität liefern zu können arbeiten wir mit einer Vielzahl an starken Partnern zusammen. Beste Rohstoffe aus der Region sowie von ausgewählten Zulieferern schmeckt man in jedem unserer Produkte. Erfahren Sie hier, wo die Zutaten für unsere Backwaren Ihren Ursprung haben.
            </span>
          } 
          bgImg="second"
          partner={true}
        />
        <div className="bg-black h-56 text-white"></div>
      </main>
    </>
  );
}
