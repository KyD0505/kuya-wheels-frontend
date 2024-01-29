// components/GoogleMap.js

import Head from 'next/head';

const GoogleMap = () => {
  return (
    <>
      <Head>
        <title>Google Map</title>
      </Head>
      <div className="google-map" style={{ width: '100%', height: '100%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15463.026326470685!2d121.02204164999999!3d14.3255671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d6ee5fc8facb%3A0x933e4f896496f624!2sLanggam%20Barangay%20Hall!5e0!3m2!1sen!2sph!4v1706496666570!5m2!1sen!2sph"
          style={{ width: '100%', height: '100%', border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
