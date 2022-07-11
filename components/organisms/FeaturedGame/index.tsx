import GameItem from '../../molecules/GameItem/index.tsx';

export default function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          {' '}
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem title="Super Mechs" category="Mobile" src="Thumbnail-1.png" />
          <GameItem title="Call of Duty" category="Desktop" src="Thumbnail-2.png" />
          <GameItem title="Arena of Valor" category="Mobile" src="Thumbnail-3.png" />
          <GameItem title="Clash Of Clans" category="Mobile" src="Thumbnail-4.png" />
          <GameItem title="Mobile Legends" category="Mobile" src="Thumbnail-5.png" />
        </div>
      </div>
    </section>
  );
}
