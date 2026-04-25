import React from 'react';

const ExamFooterSEO = ({ examName, examCode }) => {
  const cities = "Luanda, Adelaide, Brisbane, Canberra, Melbourne, Perth, Sydney, Vienna, Baku, Dhaka, Brussels, Santa Cruz de la Sierra, Rio de Janeiro, São Paulo, Sofia, Yaoundé, Calgary, Edmonton, Markham, Mississauga, Montréal, Ottawa, Toronto, Vancouver, Waterloo, Shanghai, San José, Nicosia, Prague, Copenhagen, Cairo, Zacatecoluca, Tallinn, Addis Ababa, Helsinki, Paris, Berlin, Frankfurt am Main, Freiburg, Hamburg, Karlsruhe, Leipzig, Munich, Accra, Athens, Hong Kong, Kópavogur, Reykjavik, Jakarta, Surabaya, Dublin, Milano, Tokyo, Nairobi, Kuwait City, Luxembourg, Windhof, Johor Bahru, Kuala Lumpur, Perai, Sliema, Valletta, Port Louis, Mexico City, Ulaanbaatar, Kirtipur, Amsterdam, Auckland, Wellington, Abuja, Lagos, Skopje, Oslo, Muscat, Islamabad, Karachi, Lahore, Tocumen, Cebu City, Makati, Makati City, Manila, Quezon City, Kraków, Warsaw, Lisbon, Porto, San Juan, Doha, Bucharest, Cluj-Napoca, Moscow, Kigali, Al Jubail, Al Khobar, Jeddah, Medina, Riyadh, Dakar, Victoria, Singapore, Cape Town, Durban, Johannesburg, Pretoria, Seoul, Barcelona, Madrid, Colombo, Stockholm, Basel, Genève, Zurich, Taipei, Dar es Salaam, Dodoma, Bangkok, Istanbul, Kampala, Kyiv, Abu Dhabi, Dubai, Ras Al Khaimah, Sharjah, Bangor, Belfast, Birmingham, Bristol, Cambridge, Canterbury, Cardiff, Coventry, Derby, Edinburgh, Glasgow, Leeds, Liverpool, London, Manchester, Newcastle, Norwich, Nottingham, Oxford, Perth, Preston, Reading, Sheffield, Southampton, Stoke-on-Trent, Sunderland, Swansea, Wakefield, Alpharetta, Annapolis, Atlanta, Austin, Baltimore, Boston, Charlotte, Charlotte, Chicago, Cleveland, Colorado Springs, Columbus, Dallas, Denver, Detroit, Durham, Edison, Fargo, Fort Worth, Fremont, Herndon, Honolulu, Houston, Indianapolis, Iowa City, Irving, Jacksonville, Jersey City, Annapolis, Kansas City, Las Vegas, Lawrenceville, Los Angeles, Madison, Manchester, McKinney, McLean, Memphis, Miami, Minneapolis, Morristown, Mountain View, Nashville, New York City, Newark, Omaha, Orange County, Orlando, Oxford, Pasadena, Peoria, Philadelphia, Phoenix, Pittsburgh, Plano, Pleasanton, Portland, Providence, Raleigh, Redmond, Richmond, Rochester, Sacramento, Saint Louis, Saint Paul, Salem, Salt Lake City, San Antonio, San Diego, San Francisco, San Jose, Sarasota, Scottsdale, Seattle, Spokane, Spring, Sunnyvale, Tacoma, Tampa, Tucson, Turner, Virginia Beach, Washington, West Des Moines, Winston-Salem, Worcester, Tashkent, Santa Elena de Uairén, Ho Chi Minh City, Lusaka";

  return (
    <section className="my-5">
      <div className="content-section bg-white border rounded-4 p-4 p-md-5 shadow-sm text-center">
        <h2 className="fw-bold mb-3" style={{ color: '#0f172a', fontSize: '1.8rem' }}>
          Best Online {examName} ({examCode}) | Red Hat Linux Training by
        </h2>
        <h2 className="fw-bold mb-4 text-danger" style={{ fontSize: '2rem' }}>
          WebAsha Technologies
        </h2>

        <div className="text-start">
          <p className="text-muted small mb-4" style={{ lineHeight: '1.6' }}>
            <strong>WebAsha Technologies</strong> offers the <strong>world's most comprehensive {examName} ({examCode}) v10 training</strong> for IT professionals, system administrators, and Linux enthusiasts aiming to master <strong>Red Hat Enterprise Linux (RHEL)</strong>. Our <strong>hands-on, performance-based {examCode} course</strong> follows the official <strong>Red Hat {examCode} exam objectives</strong> — covering user management, storage configuration, networking, security, containerization with Podman, and real-world system administration tasks. Whether you're a beginner or an experienced admin, this course will fully prepare you to <strong>pass the {examCode} certification exam on your first attempt</strong> with confidence.
          </p>

          <p className="text-muted" style={{ fontSize: '11px', lineHeight: '1.8', textAlign: 'justify' }}>
            {cities}
          </p>

          <p className="text-muted small mt-4" style={{ lineHeight: '1.6' }}>
            Whether you're starting your <strong>Linux administration career</strong> or advancing to <strong>DevOps, cloud, or enterprise IT, WebAsha Technologies</strong> delivers <strong>expert-led training, real RHEL labs, and 100% exam-focused preparation</strong>. Enroll in our <strong>{examCode} course</strong> today and become a <strong>Red Hat Certified System Administrator</strong> with globally recognized skills to manage mission-critical Linux infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExamFooterSEO;
