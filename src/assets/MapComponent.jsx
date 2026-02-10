import React from 'react';

const StaticMapWithLink = () => {
  // Use normal address, encode it properly
  const address = "1600 Amphitheatre Parkway, Mountain View, CA";
  const encodedAddress = encodeURIComponent(address);
  const lat = 37.422;
  const lng = -122.084;
  
  // Static Maps API key (different from JavaScript API)
  const staticMapsApiKey = process.env.REACT_APP_STATIC_MAPS_KEY || 'YOUR_STATIC_MAPS_API_KEY';
  
  return (
    <div className="map-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Clickable Map Image */}
      <a 
        href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          display: 'block', 
          textDecoration: 'none',
          position: 'relative'
        }}
      >
        {/* Static Google Maps image */}
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=800x400&scale=2&markers=color:red%7Clabel:P%7C${lat},${lng}&key=${staticMapsApiKey}`}
          alt="Google Maps location of our business"
          style={{ 
            width: '100%', 
            height: '400px', 
            borderRadius: '8px',
            border: '1px solid #ddd'
          }}
        />
        
        {/* Overlay text instead of button inside anchor */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '0',
          right: '0',
          textAlign: 'center'
        }}>
          <span style={{
            backgroundColor: 'rgba(66, 133, 244, 0.9)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '500',
            display: 'inline-block',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}>
            📍 Click to Open in Google Maps
          </span>
        </div>
      </a>
      
      {/* Alternative buttons OUTSIDE the anchor */}
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        marginTop: '15px',
        flexWrap: 'wrap'
      }}>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '10px 20px',
            background: '#34A853',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          🚗 Get Directions
        </a>
        
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '10px 20px',
            background: '#4285F4',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          📍 View on Google Maps
        </a>
      </div>
      
      {/* Location Details */}
      <div style={{ 
        marginTop: '20px', 
        fontSize: '16px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>
          📍 Our Location:
        </p>
        <p style={{ margin: '4px 0' }}>1600 Amphitheatre Parkway</p>
        <p style={{ margin: '4px 0' }}>Mountain View, CA 94043</p>
        <p style={{ margin: '4px 0' }}>United States</p>
      </div>
    </div>
  );
};

export default StaticMapWithLink;