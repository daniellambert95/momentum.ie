"use client";

import { useState, useRef } from 'react';
import { FiPlay, FiPause } from 'react-icons/fi';

interface Reel {
  id: number;
  type: 'local' | 'instagram';
  src?: string;
  embedUrl?: string;
  thumbnail?: string;
  title: string;
}

const ReelsShowcase = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const reels: Reel[] = [
    {
      id: 1,
      type: 'local',
      src: '/videos/reels/centra-promotion-video-1.mp4',
      thumbnail: '/videos/reels/centra-promotion-video.webp',
      title: 'Centra Summer Sizzlers'
    },
    {
      id: 2,
      type: 'local',
      src: '/videos/reels/centra-st-patricks-day-promo-video.mp4',
      thumbnail: '/videos/reels/centra-st-patricks-day-promo-video.webp',
      title: "Centra St. Patrick's Day"
    },
    {
      id: 3,
      type: 'local',
      src: '/videos/reels/west-coast-cooler-promo-video.mp4',
      thumbnail: '/videos/reels/west-coast-cooler-promo-video.webp',
      title: 'West Coast Cooler'
    },
    // Instagram embeds can be added here later:
    // {
    //   id: 4,
    //   type: 'instagram',
    //   embedUrl: 'https://www.instagram.com/reel/ABC123/embed',
    //   title: 'Instagram Reel'
    // }
  ];

  const stats = [
    {
      value: '1.3M',
      label: 'Views',
      campaign: "St Patrick's Day",
      color: 'from-[#C8D5B9] to-[#D4E7C5]'
    },
    {
      value: '300K',
      label: 'Views',
      campaign: 'Summer Sizzlers',
      color: 'from-[#D4E7C5] to-[#C9ADA7]'
    },
    {
      value: '230K',
      label: 'Views',
      campaign: 'West Coast Cooler',
      color: 'from-[#C9ADA7] to-[#D4A5A5]'
    }
  ];

  const togglePlay = (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingVideo === id) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause all other videos
      Object.keys(videoRefs.current).forEach((key) => {
        const vid = videoRefs.current[parseInt(key)];
        if (vid) vid.pause();
      });

      video.play();
      setPlayingVideo(id);
    }
  };

  return (
    <section id="our-work" className="py-20 relative overflow-hidden bg-[#F5E6D3]">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#C8D5B9]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#D4E7C5]/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-[#142929]">
            FEATURED REELS
          </h2>
          <p className="text-lg md:text-xl text-[#142929]/70">
            See our latest work in action. From national brands to local stories, we create content that connects.
          </p>
        </div>

        {/* Reels with Integrated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reels.map((reel, index) => {
            const matchingStat = stats[index];
            return (
              <div
                key={reel.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white"
              >
                {/* Stats Badge - Positioned at top right */}
                {matchingStat && (
                  <div className="absolute top-4 right-4 z-30 pointer-events-none">
                    <div className={`bg-gradient-to-br ${matchingStat.color} rounded-xl px-4 py-3 shadow-lg`}>
                      <div className="text-center">
                        <div className="text-2xl font-black text-white">
                          {matchingStat.value}
                        </div>
                        <div className="text-xs font-semibold text-white/90 uppercase">
                          {matchingStat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {reel.type === 'local' && reel.src ? (
                  <div className="relative aspect-[9/16] bg-black">
                    <video
                      ref={(el) => { videoRefs.current[reel.id] = el; }}
                      className="w-full h-full object-contain"
                      loop
                      playsInline
                      preload="metadata"
                      poster={reel.thumbnail}
                      onEnded={() => setPlayingVideo(null)}
                    >
                      <source src={reel.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Play/Pause Overlay */}
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-black/40 transition-all duration-300 cursor-pointer"
                      onClick={() => togglePlay(reel.id)}
                    >
                      <button className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
                        {playingVideo === reel.id ? (
                          <FiPause className="w-8 h-8 text-[#142929]" />
                        ) : (
                          <FiPlay className="w-8 h-8 text-[#142929] ml-1" />
                        )}
                      </button>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-semibold text-lg">{reel.title}</h3>
                      {matchingStat && (
                        <p className="text-[#C8D5B9] text-sm font-medium mt-1">
                          {matchingStat.campaign}
                        </p>
                      )}
                    </div>
                  </div>
                ) : reel.type === 'instagram' && reel.embedUrl ? (
                  <div className="relative aspect-[9/16]">
                    <iframe
                      src={reel.embedUrl}
                      className="w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-[#4A7C7E] text-[#F5E6D3] hover:bg-[#142929] hover:scale-105 hover:shadow-xl inline-block"
          >
            Let&apos;s Create Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReelsShowcase;
