import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">See It In Action</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Watch Our <span className="gradient-text">Solutions</span> in Action
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience how our technology transforms businesses through this interactive demonstration.
            </p>
          </div>

          {/* Video Player */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up animation-delay-300 group">
            {/* Video Overlay (before play) */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 backdrop-blur-sm">
                <button 
                  onClick={togglePlay}
                  className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center transition-transform hover:scale-110 hover:bg-primary"
                >
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </button>
              </div>
            )}

            {/* Video Element */}
            <video 
              ref={videoRef}
              className="w-full aspect-video object-cover rounded-2xl"
              poster="/images/video-thumbnail.jpg" // Replace with actual thumbnail
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/videos/demo.mp4" type="video/mp4" /> {/* Replace with actual video */}
              Your browser does not support the video tag.
            </video>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3">
                <button 
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  )}
                </button>
                
                <button 
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
              
              <button 
                onClick={toggleFullscreen}
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
              >
                <Maximize className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up animation-delay-600">
            <div className="glass rounded-xl p-6 card-hover">
              <h3 className="text-lg font-bold mb-2">Intuitive Interface</h3>
              <p className="text-muted-foreground">Our solutions feature user-friendly interfaces designed for maximum productivity.</p>
            </div>
            
            <div className="glass rounded-xl p-6 card-hover">
              <h3 className="text-lg font-bold mb-2">Real-time Analytics</h3>
              <p className="text-muted-foreground">Access powerful insights with our advanced real-time analytics dashboard.</p>
            </div>
            
            <div className="glass rounded-xl p-6 card-hover">
              <h3 className="text-lg font-bold mb-2">Seamless Integration</h3>
              <p className="text-muted-foreground">Our solutions integrate effortlessly with your existing business systems.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center animate-fade-in-up animation-delay-900">
            <Button 
              className="btn-gradient text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full hover:scale-105 transition-transform"
              asChild
            >
              <a href="/contact">
                Schedule a Live Demo
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;