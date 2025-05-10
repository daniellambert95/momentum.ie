import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const AboutUsVideo = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]">Meet Mo, Our Founder</h2>
          <p className="text-xl text-gray-800 dark:text-gray-200 font-medium">Quick intro to how we can make your brand stand out</p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="relative">
            <HeroVideoDialog
              className="block dark:hidden"
              animationStyle="from-center"
              videoSrc="/Monail_vid.mp4"
              thumbnailSrc="/thumbnail.png"
              thumbnailAlt="Meet Mo, Our Founder"
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="/Monail_vid.mp4"
              thumbnailSrc="/thumbnail.png"
              thumbnailAlt="Meet Mo, Our Founder"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg text-gray-800 dark:text-gray-200">"We take your ideas and turn them into awesome content that gets people talking about your brand!"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsVideo; 