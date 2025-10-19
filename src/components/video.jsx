import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

// Import videos
import video from '../assets/images/video.mp4';
import video1 from '../assets/images/video1.mp4';
import video2 from '../assets/images/video2.mp4';
import video3 from '../assets/images/video3.mp4';
import video4 from '../assets/images/video4.mp4';

const VideoCard = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log('Autoplay prevented:', err);
      });
    }
  }, []);

  const handlePlayPause = (e) => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className="relative cursor-pointer rounded-xl overflow-hidden bg-black shadow-lg hover:shadow-2xl transition-all duration-300"
      onClick={handlePlayPause}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        src={videoSrc}
      />

      {/* Play/Pause Button */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <button className="bg-black/50 backdrop-blur-sm rounded-full p-4 hover:bg-black/70 transition-all duration-200 transform hover:scale-110">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </button>
        </div>
      )}
    </div>
  );
};

const VideoGrid = () => {
  const videos = [video, video1, video2, video3, video4];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {videos.map((videoSrc, index) => (
            <div key={index} className="aspect-[9/16]">
              <VideoCard videoSrc={videoSrc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;