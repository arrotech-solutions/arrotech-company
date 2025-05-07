import { useState } from 'react';
import { FiPlay, FiPause } from 'react-icons/fi';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

const VideoPlayer = ({ videoUrl, title }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
      {!isPlaying && (
        <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center z-10">
          <button
            onClick={handlePlayClick}
            className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-700 transition-colors duration-300"
          >
            <FiPlay className="w-10 h-10 text-white" />
          </button>
        </div>
      )}
      <iframe
        src={`${videoUrl}?autoplay=${isPlaying ? 1 : 0}&rel=0`}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer; 