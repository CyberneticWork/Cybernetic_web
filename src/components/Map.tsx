import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = async (token: string) => {
    try {
      // Dynamically import mapbox-gl
      const mapboxgl = await import('mapbox-gl');
      await import('mapbox-gl/dist/mapbox-gl.css');
      
      if (!mapContainer.current) return;

      // Set the access token on the default export
      (mapboxgl.default as any).accessToken = token;
      
      const map = new (mapboxgl.default as any).Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-74.0059, 40.7128], // New York City coordinates
        zoom: 12,
        pitch: 45,
      });

      // Add navigation controls
      map.addControl(
        new (mapboxgl.default as any).NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add a marker for the office location
      new (mapboxgl.default as any).Marker({
        color: '#4F46E5',
        scale: 1.2
      })
        .setLngLat([-74.0059, 40.7128])
        .setPopup(
          new (mapboxgl.default as any).Popup({ offset: 25 })
            .setHTML('<h3>TechSolutions Pro</h3><p>123 Tech Street, Innovation City</p>')
        )
        .addTo(map);

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden">
      {showTokenInput ? (
        <div className="absolute inset-0 bg-muted/50 backdrop-blur-sm flex items-center justify-center z-10">
          <div className="glass rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
              <p className="text-sm text-muted-foreground">
                To view our location on the map, please enter your Mapbox public token.
                Get yours at{' '}
                <a 
                  href="https://mapbox.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  mapbox.com
                </a>
              </p>
            </div>
            
            <form onSubmit={handleTokenSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Enter your Mapbox public token..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="w-full"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Load Map
              </button>
            </form>
          </div>
        </div>
      ) : null}
      
      <div 
        ref={mapContainer} 
        className="absolute inset-0 rounded-lg shadow-lg"
        style={{ filter: showTokenInput ? 'blur(2px)' : 'none' }}
      />
      
      {!showTokenInput && (
        <div className="absolute bottom-4 left-4 glass rounded-lg p-3 max-w-xs">
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-semibold text-sm">Our Office</span>
          </div>
          <p className="text-xs text-muted-foreground">
            123 Tech Street, Innovation City, NY 10001
          </p>
        </div>
      )}
    </div>
  );
};

export default Map;