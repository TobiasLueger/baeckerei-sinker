import ContentBox from "@/components/ContentBox/ContentBox";
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
      <main id="1">
        <ContentBox 
          title="Deine Interesse" 
          copy={
            <span className="font-copy text-xl leading-8">
              Du suchst eine Herausforderung bei 320 °Celsius im Gesicht? Und freust dich auf den Feierabend – aufs Chillen schon ab 12.30 Uhr mittags? Komm zu uns und werde Bäcker/in!
              <br/>
              Die Bäckerei Sinker ist ein Meisterbetrieb in Kornwestheim. Im Herbst 2019 sind zwei Ausbildungsplätze für angehende Bäcker/innen neu zu besetzen. Wer hat Interesse? Wir lassen Euch einen Blick in die Backstube werfen. Damit Ihr auf den Geschmack kommt.
            </span>
          } 
          bgImg="first"  
        />
        <div className="bg-black h-56 text-white">Wir back-Azubis</div>
        <ContentBox 
          title="Unser Beruf" 
          copy={
            <span className="font-copy text-xl leading-8">
              „Bäcker und Bäckerinnen stellen vielfältige anspruchsvolle ernährungs-, genuss- und gesundheitsorientierte Backerzeugnisse her. Sie arbeiten und gestalten selbstständig und im Team. Sie präsentieren ihre Produkte, beraten und bedienen Kunden“, so steht’s ganz offiziell im Ausbildungsprofil.
              <br/><br/>
              Als Ausbildungsvergütung erhalten wir:
            </span>
          } 
          bgImg="second"
          money={true}  
        />
        <div className="bg-black h-56 text-white">Tagesablauf</div>
        <ContentBox 
          title="Tipps und Links" 
          copy={
            <span className="font-copy text-xl leading-8">
              <b>Zwei Tipps für alle Interessierten:</b><br/>
              – Tag der Offenen Backstube: Jeden Mittwoch 11.45 Uhr bis 12.30 Uhr<br/>
              – Oder kommt nach Absprache mit uns mal vorbei, schaut euch um und lasst euch von uns berichten. 
                Wenn Ihr möchtet, bringt eure Eltern gerne mit!
                <br/><br/>
              <b>Weitere Infos findet Ihr unter:</b><br/>
              – www.back-dir-deine-zukunft.de<br/>
              – www.planet-beruf.de
            </span>
          } 
        />
      </main>
    </>
  );
}
