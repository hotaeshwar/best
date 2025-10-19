import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

const VideoCard = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Autoplay prevented:', err);
        });
    }
  }, []);

  const handlePlayPause = () => {
    const vid = videoRef.current;
    if (!vid) return;

    if (isPlaying) {
      vid.pause();
      setIsPlaying(false);
    } else {
      vid.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <div
      className="relative cursor-pointer rounded-xl overflow-hidden bg-black shadow-lg hover:shadow-2xl transition-all duration-300"
      onClick={handlePlayPause}
    >
      {!hasError ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          preload="auto"
          src={videoSrc}
          onError={() => setHasError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white text-sm">
          Video not supported or missing
        </div>
      )}

      {!isPlaying && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
          <button className="bg-black/50 backdrop-blur-sm rounded-full p-4 hover:bg-black/70 transition-all duration-200 transform hover:scale-110">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </button>
        </div>
      )}
    </div>
  );
};

const VideoGrid = () => {
  const videos = [
    '/videos/video.mp4',
    '/videos/video1.mp4',
    '/videos/video2.mp4',
    '/videos/video3.mp4',
    '/videos/video4.mp4'
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Mobile: 3 top, 2 bottom centered | Desktop: 5 inline */}
        <div className="hidden md:flex justify-center w-full">
          <div className="grid grid-cols-5 gap-3 md:gap-4 w-full">
            {videos.map((videoSrc, index) => (
              <div key={index} className="aspect-[9/16]">
                <VideoCard videoSrc={videoSrc} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden flex-col items-center gap-6">
          {/* Top 3 videos */}
          <div className="w-full grid grid-cols-3 gap-3">
            {videos.slice(0, 3).map((videoSrc, index) => (
              <div key={index} className="aspect-[9/16]">
                <VideoCard videoSrc={videoSrc} />
              </div>
            ))}
          </div>

          {/* Bottom 2 videos - centered */}
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-2 gap-3 w-2/3">
              {videos.slice(3).map((videoSrc, index) => (
                <div key={index + 3} className="aspect-[9/16]">
                  <VideoCard videoSrc={videoSrc} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;