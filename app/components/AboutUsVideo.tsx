import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const AboutUsVideo = () => {
  return (
    <section className="py-20 bg-[#F5E6D3]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-[#142929]">MEET MO, OUR FOUNDER</h2>
          <p className="text-xl text-[#142929]/70 font-medium">Quick intro to how we can make your brand stand out</p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="relative">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc="/Monail_vid.mp4"
              thumbnailSrc="/thumbnail.png"
              thumbnailAlt="Meet Mo, Our Founder"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg text-[#142929]/70">&quot;We take your ideas and turn them into awesome content that gets people talking about your brand!&quot;</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsVideo; 