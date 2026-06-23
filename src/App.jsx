import React, { useState } from 'react';
import thailand1 from './images/thailand1.jpg';
import thailand2 from './images/thailand2.jpg';
import thailand3 from './images/thailand3.jpg';
import thailand4 from './images/thailand4.jpg';
import thailand5 from './images/thailand5.jpg';

import srilanka1 from './images/srilanka1.jpg';
import srilanka2 from './images/srilanka2.jpg';
import srilanka3 from './images/srilanka3.jpg';
import srilanka4 from './images/srilanka4.jpg';
import srilanka5 from './images/srilanka5.jpg';

import sikkim1 from './images/sikkim1.jpg';
import sikkim2 from './images/sikkim2.jpg';
import sikkim3 from './images/sikkim3.jpg';
import sikkim4 from './images/sikkim4.jpg';
import sikkim5 from './images/sikkim5.jpg';
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [communityTab, setCommunityTab] = useState('stories');
  const [selectedItem, setSelectedItem] = useState(null);
  const [galleryImage, setGalleryImage] = useState('');
const [leadForm, setLeadForm] = useState({
  name: '',
  mobile: '',
  email: '',
  travelDate: '',
  pax: ''
});
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '' });

  const hotels = [
    { id: 1, name: 'Beachfront Paradise', location: 'Goa', price: 3500, rating: 4.8, image: '🏨', description: 'Luxury beachside resort', reviews: 245, amenities: ['WiFi', 'Pool', 'Spa'] },
    { id: 2, name: 'Mountain Escape', location: 'Himalayas', price: 2000, rating: 4.6, image: '🏔️', description: 'Cozy mountain lodge', reviews: 156, amenities: ['Fireplace', 'WiFi', 'Restaurant'] },
    { id: 3, name: 'Backpacker Haven', location: 'Bali', price: 800, rating: 4.5, image: '🛏️', description: 'Budget-friendly hotel', reviews: 423, amenities: ['WiFi', 'Kitchen', 'Lounge'] },
    { id: 4, name: 'Palace Hotel', location: 'Rajasthan', price: 5000, rating: 4.9, image: '👑', description: 'Historic palace hotel', reviews: 189, amenities: ['WiFi', 'Spa', 'Restaurant', 'Pool'] },
    { id: 5, name: 'Kerala Houseboat', location: 'Kerala', price: 2500, rating: 4.7, image: '🚤', description: 'Houseboat experience', reviews: 267, amenities: ['Kitchen', 'WiFi', 'Views'] },
    { id: 6, name: 'Bangkok Modern', location: 'Thailand', price: 1500, rating: 4.6, image: '🏙️', description: 'Modern city hotel', reviews: 334, amenities: ['WiFi', 'Pool', 'Gym'] },
  ];

  
const packages = [
  {
    id: 101,
    name: 'Thailand Group Tour',
    destination: 'Thailand',
    price: 40000,
    duration: '5 Nights / 6 Days',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526',
    includes: ['Hotel', 'Breakfast', 'Sightseeing'],
    reviews: 120
  },
  {
    id: 102,
    name: 'Vietnam Escape',
    destination: 'Vietnam',
    price: 46000,
    duration: '6 Nights / 7 Days',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592',
    includes: ['Hotel', 'Cruise', 'Transfers'],
    reviews: 98
  },
  {
    id: 103,
    name: 'Bali Honeymoon',
    destination: 'Bali',
    price: 56000,
    duration: '5 Nights / 6 Days',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    includes: ['Villa Stay', 'Dinner', 'Sightseeing'],
    reviews: 145
  }
];
  const activities = [
    { id: 201, name: 'Scuba Diving', location: 'Goa', price: 2500, rating: 4.9, image: '🤿', description: 'Explore coral reefs', duration: '4 hours', reviews: 234 },
    { id: 202, name: 'Mountain Biking', location: 'Himalayas', price: 1500, rating: 4.7, image: '🚴', description: 'Mountain trail ride', duration: '6 hours', reviews: 145 },
    { id: 203, name: 'Cooking Class', location: 'Thailand', price: 1200, rating: 4.8, image: '🍜', description: 'Thai cuisine', duration: '3 hours', reviews: 289 },
    { id: 204, name: 'Yoga Retreat', location: 'Bali', price: 3000, rating: 4.9, image: '🧘', description: 'Sunrise yoga', duration: '2 hours', reviews: 178 },
  ];

  const stories = [
    { id: 401, author: 'Sarah Johnson', destination: 'Goa', title: 'Lost in Goa: A Hidden Paradise', excerpt: 'Discovered hidden beaches...', image: '📸', date: '2 days ago', likes: 324, comments: 45 },
    { id: 402, author: 'Amit Patel', destination: 'Himalayas', title: 'Trekking Through the Clouds', excerpt: 'Epic mountain journey...', image: '⛅', date: '1 week ago', likes: 567, comments: 78 },
    { id: 403, author: 'Lisa Wong', destination: 'Bali', title: 'Spiritual Journey in Bali', excerpt: 'Finding inner peace...', image: '🌟', date: '5 days ago', likes: 892, comments: 156 },
  ];

  const forums = [
    { id: 501, title: 'Best time to visit Thailand?', author: 'John Doe', replies: 23, views: 456, category: 'Southeast Asia' },
    { id: 502, title: 'Goa on a budget - tips needed', author: 'Budget Traveler', replies: 45, views: 892, category: 'India' },
    { id: 503, title: 'Solo female travelers experiences', author: 'Emma', replies: 67, views: 1205, category: 'Safety & Tips' },
  ];

  const handleAuth = (name, email) => {
    setUser({ name, email, id: Math.random() });
    setShowAuthModal(false);
    setAuthForm({ name: '', email: '', password: '' });
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const toggleFavorite = (itemId) => {
    if (favorites.includes(itemId)) {
      setFavorites(favorites.filter(id => id !== itemId));
    } else {
      setFavorites([...favorites, itemId]);
    }
  };

  const Header = () => (
  <header style={{
    background: 'white',
    marginBottom: '2rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderBottom: '3px solid #185FA5'
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
          onClick={() => setCurrentPage('home')}
        >
          <img src="/logo.png" alt="Fly4Wonders" style={{ height: '50px', width: 'auto' }} />
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#185FA5' }}>
            Fly4Wonders
          </span>
        </div>

        <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '14px', flexWrap: 'wrap' }}>
          <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', color: '#185FA5', cursor: 'pointer', fontWeight: '500' }}>Home</button>
          <button onClick={() => setCurrentPage('bookings')} style={{ background: 'none', border: 'none', color: '#185FA5', cursor: 'pointer', fontWeight: '500' }}>Browse</button>
          <button onClick={() => setCurrentPage('community')} style={{ background: 'none', border: 'none', color: '#185FA5', cursor: 'pointer', fontWeight: '500' }}>Community</button>
          <button onClick={() => setCurrentPage('trips')} style={{ background: 'none', border: 'none', color: '#185FA5', cursor: 'pointer', fontWeight: '500' }}>Trips</button>
          <button onClick={() => setCurrentPage('groupTours')} style={{ background: 'none', border: 'none', color: '#185FA5', cursor: 'pointer', fontWeight: '500' }}>Group Tours</button>

          <button onClick={() => setCurrentPage('cart')} style={{ background: '#185FA5', border: '1px solid #185FA5', color: 'white', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}>
            🛒 {cart.length}
          </button>

          {user ? (
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button onClick={() => setCurrentPage('profile')} style={{ background: '#185FA5', border: '1px solid #185FA5', color: 'white', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>👤</button>
              <button onClick={() => setUser(null)} style={{ background: '#FFA500', border: '1px solid #FFA500', color: 'white', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}>Logout</button>
            </div>
          ) : (
            <button onClick={() => { setShowAuthModal(true); setAuthMode('login'); }} style={{ background: '#FFA500', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}>Sign In</button>
          )}
        </nav>
      </div>
    </div>
  </header>
);
  const AuthModal = () => (
  <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        background: 'white', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '400px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '20px' }}>{authMode === 'login' ? 'Sign In' : 'Create Account'}</h2>
        {authMode === 'signup' && (
          <input
            placeholder="Full Name"
            value={authForm.name}
            onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
            style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '6px', boxSizing: 'border-box' }}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={authForm.email}
          onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '6px', boxSizing: 'border-box' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={authForm.password}
          onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
          style={{ width: '100%', padding: '10px', marginBottom: '1.5rem', border: '1px solid #ddd', borderRadius: '6px', boxSizing: 'border-box' }}
        />
        <button
          onClick={() => handleAuth(authForm.name || 'Traveler', authForm.email)}
          style={{
            width: '100%', padding: '10px', background: '#185FA5', color: 'white', border: 'none',
            borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '10px'
          }}
        >
          {authMode === 'login' ? 'Sign In' : 'Create Account'}
        </button>

 <button
          onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
          style={{
            width: '100%', padding: '10px', background: 'white', color: '#185FA5', border: '1px solid #185FA5',
            borderRadius: '6px', cursor: 'pointer', marginBottom: '1rem'
          }}
        >
          {authMode === 'login' ? 'Create New Account' : 'Already have account?'}
        </button>
        <button
          onClick={() => setShowAuthModal(false)}
          style={{
            width: '100%', padding: '10px', background: '#f0f0f0', color: '#333', border: 'none',
            borderRadius: '6px', cursor: 'pointer'
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
const InquiryForm = () => {
  const [form, setForm] = React.useState({
    name: '',
    mobile: '',
    destination: '',
    date: ''
  });

  const sendInquiry = () => {
    const message = `New Fly4Wonders Enquiry%0AName: ${form.name}%0AMobile: ${form.mobile}%0ADestination: ${form.destination}%0ATravel Date: ${form.date}`;

    window.open(`https://wa.me/918655566816?text=${message}`, '_blank');
  };

  return (
    <div style={{
      background: 'white',
      padding: '25px',
      borderRadius: '14px',
      marginBottom: '30px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.12)'
    }}>
      <h2 style={{ color: '#185FA5', marginBottom: '15px' }}>Get Free Travel Quote</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
        <input placeholder="Your Name" onChange={(e) => setForm({ ...form, name: e.target.value })} style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <input placeholder="Mobile Number" onChange={(e) => setForm({ ...form, mobile: e.target.value })} style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <input placeholder="Destination" onChange={(e) => setForm({ ...form, destination: e.target.value })} style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <input type="date" onChange={(e) => setForm({ ...form, date: e.target.value })} style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
      </div>

      <button onClick={sendInquiry} style={{
        marginTop: '15px',
        background: '#FFA500',
        color: 'white',
        border: 'none',
        padding: '12px 25px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}>
        Send Enquiry on WhatsApp
      </button>
    </div>
  );
};
  const HomePage = () => (
<>
   <div style={{
 backgroundImage: "linear-gradient(rgba(24,95,165,0.75), rgba(12,68,124,0.75)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
backgroundSize: 'cover',
backgroundPosition: 'center',
  color: 'white',
  padding: '4rem 2rem',
  borderRadius: '16px',
  marginBottom: '2rem'
}}>
  <div style={{ maxWidth: '600px' }}>
    <h1 style={{
      fontSize: '42px',
      fontWeight: 'bold',
      marginBottom: '10px'
    }}>
      Fly4Wonders
    </h1>

    <p style={{
      fontSize: '20px',
      marginBottom: '15px'
    }}>
      Explore the World with Confidence
    </p>

    <p style={{
      fontSize: '16px',
      opacity: 0.9,
      marginBottom: '25px'
    }}>
      International Tours • Visa Assistance • Group Departures • Cruises • Flights
    </p>

    <button
      onClick={() => setCurrentPage('bookings')}
      style={{
        background: '#FFA500',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      Explore Packages
    </button>
  </div>
</div>

<InquiryForm />

      <h2 style={{ marginBottom: '1.5rem', fontSize: '18px', color: '#185FA5' }}>Featured Destinations</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {[
          { name: 'Goa', emoji: '🌴', desc: 'Beaches' },
          { name: 'Himalayas', emoji: '⛰️', desc: 'Trekking' },
          { name: 'Bali', emoji: '🏝️', desc: 'Culture' },
          { name: 'Thailand', emoji: '🌊', desc: 'Islands' },
        ].map((dest, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentPage('bookings')}
            style={{
              background: 'linear-gradient(135deg, #E6F1FB 0%, #85B7EB 100%)',
              padding: '1.5rem', borderRadius: '12px', textAlign: 'center', cursor: 'pointer',
              border: '1px solid #B5D4F4'
            }}
          >
            <div style={{ fontSize: '40px', marginBottom: '0.5rem' }}>{dest.emoji}</div>
            <h3 style={{ color: '#185FA5', marginBottom: '0.25rem', fontSize: '16px' }}>{dest.name}</h3>
            <p style={{ color: '#0C447C', fontSize: '12px' }}>{dest.desc}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginBottom: '1.5rem', fontSize: '18px', color: '#185FA5' }}>Popular Packages</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {packages.slice(0, 3).map(pkg => (
          <div key={pkg.id} style={{
            background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1rem'
          }}>
            <img
  src={pkg.image}
  alt={pkg.name}
  style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '12px'
  }}
/>
            <h3 style={{ marginBottom: '0.25rem', color: '#185FA5', fontSize: '14px' }}>{pkg.name}</h3>
            <p style={{ color: '#888', fontSize: '12px', marginBottom: '0.5rem' }}>{pkg.duration}</p>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#FFA500', marginBottom: '0.5rem' }}>₹{(pkg.price/1000).toFixed(0)}k</div>
            <button
  onClick={() => {
    setSelectedItem(pkg);
    setCurrentPage('detail');
  }}
  style={{
    background: '#FFA500',
    color: 'white',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '12px',
    width: '100%',
    marginBottom: '8px'
  }}
>
  View Details
</button>

<button
              onClick={(e) => { e.stopPropagation(); addToCart(pkg); }}
              style={{
                background: '#185FA5', color: 'white', border: 'none', padding: '6px 10px',
                borderRadius: '6px', cursor: 'pointer', fontSize: '12px', width: '100%'
              }}
            >
              Add to Cart
            </button>
<button
  onClick={() => {
const message = `Hello Fly4Wonders, I am interested in ${pkg.name}. Please share details.`;
window.open(`https://wa.me/918655566816?text=${encodeURIComponent(message)}`, '_blank');
}}
style={{
  background: '#25D366',
  color: 'white',
  border: 'none',
  padding: '6px 10px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '12px',
  width: '100%',
  marginTop: '8px',
  fontWeight: 'bold'
}}
>
  Get Quote
</button>          </div>
        ))}
      </div>

      <h2 style={{ marginBottom: '1rem', fontSize: '18px', color: '#185FA5' }}>Latest Travel Stories</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {stories.slice(0, 3).map(story => (
          <div key={story.id} style={{
            background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1rem'
          }}>
            <div style={{ fontSize: '28px', marginBottom: '0.5rem' }}>{story.image}</div>
            <h3 style={{ marginBottom: '0.25rem', color: '#185FA5', fontSize: '14px' }}>{story.title}</h3>
            <p style={{ color: '#888', fontSize: '12px', marginBottom: '0.5rem' }}>{story.excerpt}</p>
            <div style={{ fontSize: '12px', color: '#888' }}>👤 {story.author.split(' ')[0]}</div>
          </div>
        ))}
           </div>
   </>
  );

  const BookingsPage = () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
      <h1 style={{ marginBottom: '1.5rem', fontSize: '22px' }}>Browse & Book</h1>

      <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '16px' }}>Hotels</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {hotels.slice(0, 3).map(hotel => (
            <div key={hotel.id} style={{
              background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px',
              padding: '1rem', display: 'grid', gridTemplateColumns: '60px 1fr 100px', gap: '1rem', alignItems: 'center'
            }}>
              <div style={{ fontSize: '40px', textAlign: 'center' }}>{hotel.image}</div>
              <div>
                <h4 style={{ color: '#185FA5', marginBottom: '0.25rem', fontSize: '14px' }}>{hotel.name}</h4>
                <p style={{ color: '#888', fontSize: '12px', marginBottom: '0.25rem' }}>{hotel.location}</p>
                <p style={{ fontSize: '12px', color: '#666' }}>{hotel.description}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#FFA500', marginBottom: '0.5rem' }}>₹{hotel.price}</div>
                <button
                  onClick={() => { setSelectedItem(hotel); setCurrentPage('detail'); }}
                  style={{
                    background: '#185FA5', color: 'white', border: 'none', padding: '6px 8px',
                    borderRadius: '6px', cursor: 'pointer', fontSize: '12px', width: '100%'
                  }}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '16px', marginTop: '1rem' }}>Activities</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {activities.map(activity => (
            <div key={activity.id} style={{
              background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px',
              padding: '1rem', display: 'grid', gridTemplateColumns: '60px 1fr 100px', gap: '1rem', alignItems: 'center'
            }}>
              <div style={{ fontSize: '40px', textAlign: 'center' }}>{activity.image}</div>
              <div>
                <h4 style={{ color: '#185FA5', marginBottom: '0.25rem', fontSize: '14px' }}>{activity.name}</h4>
                <p style={{ color: '#888', fontSize: '12px' }}>{activity.location} • {activity.duration}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#FFA500', marginBottom: '0.5rem' }}>₹{activity.price}</div>
                <button
                  onClick={() => addToCart(activity)}
                  style={{
                    background: '#185FA5', color: 'white', border: 'none', padding: '6px 8px',
                    borderRadius: '6px', cursor: 'pointer', fontSize: '12px', width: '100%'
                  }}
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CommunityPage = () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
      <h1 style={{ marginBottom: '1.5rem', fontSize: '22px' }}>Travel Community</h1>

      <div style={{
        background: 'linear-gradient(135deg, #BA7517 0%, #854F0B 100%)',
        color: 'white', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem', textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '0.5rem', fontSize: '18px' }}>Connect with Travelers Worldwide</h2>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #e0e0e0', paddingBottom: '1rem', fontSize: '13px', flexWrap: 'wrap' }}>
        {['stories', 'forum', 'buddies', 'reviews'].map(tab => (
          <button
            key={tab}
            onClick={() => setCommunityTab(tab)}
            style={{
              background: communityTab === tab ? '#185FA5' : 'white',
              color: communityTab === tab ? 'white' : '#185FA5',
              border: '1px solid #185FA5', padding: '6px 12px', borderRadius: '6px',
              cursor: 'pointer', fontWeight: 'bold'
            }}
          >
            {tab === 'buddies' ? '👥' : tab === 'forum' ? '💬' : tab === 'reviews' ? '⭐' : '📖'}
          </button>
        ))}
      </div>

      {communityTab === 'stories' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          {stories.map(story => (
            <div key={story.id} style={{
              background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1rem'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '0.5rem' }}>{story.image}</div>
              <h3 style={{ color: '#185FA5', marginBottom: '0.25rem', fontSize: '13px' }}>{story.title.substring(0, 25)}...</h3>
              <p style={{ color: '#888', fontSize: '11px', marginBottom: '0.5rem' }}>{story.destination}</p>
              <div style={{ fontSize: '11px', color: '#888' }}>❤️ {story.likes}</div>
            </div>
          ))}
        </div>
      )}

      {communityTab === 'forum' && (
        <div style={{ display: 'grid', gap: '0.8rem' }}>
          {forums.map(forum => (
            <div key={forum.id} style={{
              background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px',
              padding: '1rem'
            }}>
              <h4 style={{ color: '#185FA5', marginBottom: '0.25rem', fontSize: '14px' }}>{forum.title}</h4>
              <p style={{ fontSize: '11px', color: '#888', marginBottom: '0.5rem' }}>by {forum.author}</p>
              <div style={{ fontSize: '11px', color: '#888' }}>💬 {forum.replies} • 👁️ {forum.views}</div>
            </div>
          ))}
        </div>
      )}

      {communityTab === 'buddies' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          {[
            { name: 'Alex', destination: 'Bali', image: '👨‍💼' },
            { name: 'Priya', destination: 'Himalayas', image: '👩‍💼' },
            { name: 'Marco', destination: 'Thailand', image: '👨‍🎨' },
          ].map((buddy, idx) => (
            <div key={idx} style={{
              background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1rem', textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '0.5rem' }}>{buddy.image}</div>
              <h4 style={{ color: '#185FA5', marginBottom: '0.25rem', fontSize: '14px' }}>{buddy.name}</h4>
              <p style={{ fontSize: '12px', color: '#888', marginBottom: '1rem' }}>{buddy.destination}</p>
              <button
                onClick={() => user ? alert(`Connected!`) : setShowAuthModal(true)}
                style={{
                  background: '#185FA5', color: 'white', border: 'none', padding: '6px 12px',
                  borderRadius: '6px', cursor: 'pointer', fontSize: '12px', width: '100%'
                }}
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      )}

      {communityTab === 'reviews' && (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {[
            { reviewer: 'John', rating: 5, text: 'Amazing! Hotel was perfect.' },
            { reviewer: 'Sarah', rating: 4, text: 'Great trekking experience.' },
            { reviewer: 'Amit', rating: 5, text: 'Best vacation ever!' },
          ].map((review, idx) => (
            <div key={idx} style={{
              background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <h4 style={{ color: '#185FA5', fontSize: '14px', margin: 0 }}>{review.reviewer}</h4>
                <span style={{ fontSize: '12px' }}>{'⭐'.repeat(review.rating)}</span>
              </div>
              <p style={{ color: '#666', fontSize: '13px', margin: 0 }}>{review.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const CartPage = () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
      <h1 style={{ marginBottom: '1.5rem', fontSize: '22px' }}>Shopping Cart ({cart.length})</h1>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ fontSize: '16px', color: '#888' }}>Your cart is empty</p>
          <button
            onClick={() => setCurrentPage('bookings')}
            style={{
              background: '#185FA5', color: 'white', border: 'none', padding: '8px 16px',
              borderRadius: '6px', cursor: 'pointer', marginTop: '1rem'
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 250px', gap: '1.5rem' }}>
          <div>
            {cart.map((item, idx) => (
              <div key={idx} style={{
                background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px',
                padding: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }}>
                <div>
                  <h4 style={{ color: '#185FA5', marginBottom: '0.25rem', fontSize: '14px' }}>{item.name}</h4>
                  <p style={{ fontSize: '12px', color: '#888', margin: 0 }}>{item.location || item.destination}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#FFA500', marginBottom: '0.5rem' }}>
                    ₹{(item.price || item.amount).toLocaleString()}
                  </div>
                  <button
                    onClick={() => setCart(cart.filter((_, i) => i !== idx))}
                    style={{
                      background: '#ff4444', color: 'white', border: 'none', padding: '4px 8px',
                      borderRadius: '6px', cursor: 'pointer', fontSize: '11px'
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px',
            padding: '1rem', height: 'fit-content'
          }}>
            <h3 style={{ marginBottom: '1rem', color: '#185FA5', fontSize: '16px' }}>Summary</h3>
            <div style={{ marginBottom: '1rem', fontSize: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Subtotal</span>
                <span>₹{cart.reduce((sum, item) => sum + (item.price || item.amount || 0), 0).toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>Taxes</span>
                <span>₹{Math.round(cart.reduce((sum, item) => sum + (item.price || item.amount || 0), 0) * 0.18)}</span>
              </div>
              <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: '0.5rem', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', color: '#FFA500' }}>
                <span>Total</span>
                <span>₹{Math.round(cart.reduce((sum, item) => sum + (item.price || item.amount || 0), 0) * 1.18).toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={() => {
                if (!user) {
                  setShowAuthModal(true);
                  return;
                }
                alert('Proceeding to Razorpay payment!');
                setCart([]);
              }}
              style={{
                width: '100%', background: '#185FA5', color: 'white', border: 'none',
                padding: '10px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px'
              }}
            >
              {user ? 'Checkout' : 'Sign In'}
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const ProfilePage = () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
      <h1 style={{ marginBottom: '1.5rem', fontSize: '22px' }}>My Profile</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '1.5rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, #185FA5 0%, #0C447C 100%)',
          color: 'white', borderRadius: '12px', padding: '1.5rem', textAlign: 'center'
        }}>
          <div style={{ fontSize: '50px', marginBottom: '1rem' }}>👤</div>
          <h2 style={{ marginBottom: '0.25rem', fontSize: '16px' }}>{user?.name}</h2>
          <p style={{ opacity: 0.9, marginBottom: '1.5rem', fontSize: '13px' }}>{user?.email}</p>
        </div>

        <div>
          <h3 style={{ marginBottom: '1rem', color: '#185FA5', fontSize: '16px' }}>Travel Stats</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { label: 'Bookings', value: '3' },
              { label: 'Countries', value: '5' },
              { label: 'Companions', value: '12' },
            ].map((stat, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(135deg, #E6F1FB 0%, #85B7EB 100%)',
                padding: '1rem', borderRadius: '12px', textAlign: 'center',
                border: '1px solid #B5D4F4'
              }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#185FA5', marginBottom: '0.25rem' }}>{stat.value}</div>
                <div style={{ fontSize: '12px', color: '#0C447C' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

const groupTours = [
  {
    id: 1,
    name: 'Sikkim Darjeeling Pelling',
    date: '28 Sep 2026',
    duration: '6 Nights / 7 Days',
    price: 27999,
    includes:'Accommodation, Breakfast & Dinner, Sightseeing Car, Namchi Excursion',
image: sikkim1
  },
  {
    id: 2,
    name: 'Sri Lanka Group Tour',
    date: 'August 2026',
    duration: '6 Nights / 7 Days',
    price: 45000,
    includes: 'Hotel, Meals, AC Coach, Sightseeing',
image: srilanka1,
  },
  {
    id: 3,
    name: 'Thailand Group Tour',
    date: 'October 2026',
    duration: '5 Nights / 6 Days',
    price: 39999,
    includes: 'Hotel, Breakfast, Transfers, Sightseeing',
image: thailand1,
  }
];

const GroupToursPage = () => (
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
    <h1 style={{ color: '#185FA5', marginBottom: '20px' }}>Group Departures 2026</h1>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
      {groupTours.map(tour => (
        <div key={tour.id} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
<img
  src={tour.image}
  alt={tour.name}
  style={{
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '12px'
  }}
/>
          <h3 style={{ color: '#185FA5' }}>{tour.name}</h3>
          <p><b>Departure:</b> {tour.date}</p>
          <p><b>Duration:</b> {tour.duration}</p>
          <p style={{ color: '#FFA500', fontWeight: 'bold' }}>From ₹{tour.price.toLocaleString()}</p>
          <p style={{ fontSize: '13px', color: '#666' }}>{tour.includes}</p>
<button
  onClick={() => {
    setSelectedItem({
      ...tour,
      destination: tour.name,
      price: tour.price,
      rating: 4.8,
      reviews: 50,
      description: `${tour.name} group departure with Fly4Wonders. Departure date: ${tour.date}. Includes: ${tour.includes}`,
      includes: tour.includes.split(', ')
    });
    setCurrentPage('detail');
  }}
  style={{
    background: '#FFA500',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '6px',
    width: '100%',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginBottom: '8px'
  }}
>
  View Details
</button>
          <button
            onClick={() => {
              const message = `Hello Fly4Wonders, I am interested in ${tour.name} group departure on ${tour.date}. Please share details.`;
              window.open(`https://wa.me/918655566816?text=${encodeURIComponent(message)}`, '_blank');
            }}
            style={{ background: '#25D366', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', width: '100%', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Enquire on WhatsApp
          </button>
        </div>
      ))}
    </div>
  </div>
);
  const TripsPage = () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
      <h1 style={{ marginBottom: '1.5rem', fontSize: '22px' }}>My Trips</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {[
          { destination: 'Goa', dates: 'Jun 15-20', status: 'Upcoming', image: '🌴' },
          { destination: 'Himalayas', dates: 'Jul 1-10', status: 'Upcoming', image: '⛰️' },
          { destination: 'Bali', dates: 'Apr 5-15', status: 'Completed', image: '🏝️' },
        ].map((trip, idx) => (
          <div key={idx} style={{
            background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1rem'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '0.5rem' }}>{trip.image}</div>
            <h3 style={{ color: '#185FA5', marginBottom: '0.25rem', fontSize: '14px' }}>{trip.destination}</h3>
            <p style={{ color: '#888', fontSize: '12px', marginBottom: '0.5rem' }}>{trip.dates}</p>
            <div style={{
              display: 'inline-block', background: trip.status === 'Upcoming' ? '#E6F1FB' : '#EAF3DE',
              color: trip.status === 'Upcoming' ? '#185FA5' : '#3B6D11',
              padding: '4px 8px', borderRadius: '4px', fontSize: '11px'
            }}>
              {trip.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
const getGalleryImages = (item) => {
  if (!item) return [];

  if (item.name === 'Thailand Group Tour') {
    return [thailand1, thailand2, thailand3, thailand4, thailand5];
  }

  if (item.name === 'Sri Lanka Group Tour') {
    return [srilanka1, srilanka2, srilanka3, srilanka4, srilanka5];
  }

  if (item.name === 'Sikkim Darjeeling Pelling') {
    return [sikkim1, sikkim2, sikkim3, sikkim4, sikkim5];
  }

  return [item.image];
};
  const DetailPage = () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
      <button
        onClick={() => setCurrentPage('bookings')}
        style={{
          background: '#185FA5', color: 'white', border: 'none', padding: '6px 12px',
          borderRadius: '6px', cursor: 'pointer', marginBottom: '1.5rem', fontSize: '13px'
        }}
      >
        ← Back
      </button>
	
      {selectedItem && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 250px', gap: '1.5rem' }}>
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #E6F1FB 0%, #85B7EB 100%)',
              borderRadius: '12px', padding: '2rem', textAlign: 'center', marginBottom: '1.5rem',
             border: '1px solid #B5D4F4'
}}>
<div style={{ position: 'relative' }}>
  <img
    src={galleryImage || selectedItem.image}
    alt={selectedItem.name}
    style={{
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '12px'
    }}
  />

  <button
    onClick={() => {
     const images = getGalleryImages(selectedItem);
      const current = images.indexOf(galleryImage || selectedItem.image);
      const prev = (current - 1 + images.length) % images.length;
      setGalleryImage(images[prev]);
    }}
    style={{
      position: 'absolute',
      left: '15px',
      top: '45%',
      background: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      cursor: 'pointer',
      fontSize: '20px'
    }}
  >
    ‹
  </button>

  <button
    onClick={() => {
      const images = getGalleryImages(selectedItem);
      const current = images.indexOf(galleryImage || selectedItem.image);
      const next = (current + 1) % images.length;
      setGalleryImage(images[next]);
    }}
    style={{
      position: 'absolute',
      right: '15px',
      top: '45%',
      background: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      cursor: 'pointer',
      fontSize: '20px'
    }}
  >
    ›
  </button>
</div>
            
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '10px',
  marginTop: '15px',
  marginBottom: '20px'
}}>
  {getGalleryImages(selectedItem).map((img, idx) =>(
    <img
  key={idx}
  src={img}
  alt=""
  onClick={() => setGalleryImage(img)}      
style={{
        width: '100%',
        height: '90px',
        objectFit: 'cover',
        borderRadius: '8px',
        cursor: 'pointer',
border: (galleryImage || selectedItem.image) === img ? '3px solid #FFA500' : '2px solid transparent'
      }}
    />
  ))}
</div>
            </div>

            <h1 style={{ color: '#185FA5', marginBottom: '0.5rem', fontSize: '20px' }}>{selectedItem.name}</h1>
            <p style={{ fontSize: '14px', color: '#888', marginBottom: '1rem' }}>
              {selectedItem.location || selectedItem.destination}
            </p>

            <div style={{
              background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px',
              padding: '1.5rem'
            }}>
              
<div style={{
  display: 'flex',
  gap: '15px',
  flexWrap: 'wrap',
  marginBottom: '20px',
  padding: '12px',
  background: '#f8f9fa',
  borderRadius: '10px'
}}>
  <div>🏨 3/4 Star Hotels</div>
  <div>🍽 Breakfast Included</div>
  <div>🚐 Transfers</div>
  <div>📸 Sightseeing</div>
  <div>🧑‍💼 Tour Manager</div>
</div>
<h3 style={{ marginBottom: '0.5rem', color: '#185FA5', fontSize: '16px' }}>About</h3>
              <p style={{ lineHeight: '1.5', color: '#666', fontSize: '13px' }}>{selectedItem.description}</p>
{selectedItem.name === 'Sikkim Darjeeling Pelling' && (
  <div style={{ marginTop: '1.5rem' }}>
    <h3 style={{ color: '#185FA5', fontSize: '16px', marginBottom: '10px' }}>
      Day Wise Itinerary
    </h3>

    {[
      'Day 1: NJP / Bagdogra Airport to Gangtok',
      'Day 2: Tsomgo Lake & Baba Mandir Excursion',
      'Day 3: Namchi Excursion',
      'Day 4: Gangtok to Pelling',
      'Day 5: Pelling to Darjeeling',
      'Day 6: Darjeeling Local Sightseeing',
      'Day 7: Drop at NJP / Bagdogra Airport'
    ].map((day, idx) => (
      <p key={idx} style={{ fontSize: '13px', color: '#666', marginBottom: '6px' }}>
        ✅ {day}
      </p>
    ))}
  </div>
)}
{selectedItem.name === 'Sri Lanka Group Tour' && (
  <div style={{ marginTop: '1.5rem' }}>
    <h3 style={{ color: '#185FA5', fontSize: '16px', marginBottom: '10px' }}>
      Day Wise Itinerary
    </h3>

    {[
      'Day 1: Arrival Colombo – Overnight Stay',
      'Day 2: Colombo to Anuradhapura',
      'Day 3: Anuradhapura to Polonnaruwa & Dambulla',
      'Day 4: Sigiriya Rock Fortress & Village Tour',
      'Day 5: Kandy City Tour & Temple of Tooth',
      'Day 6: Nuwara Eliya Tea Gardens & Scenic Drive',
      'Day 7: Colombo Shopping & Airport Drop'
    ].map((day, idx) => (
      <p key={idx} style={{ fontSize: '13px', color: '#666', marginBottom: '6px' }}>
        ✅ {day}
      </p>
    ))}

    <h3 style={{ color: '#185FA5', marginTop: '15px', fontSize: '16px' }}>
      Hotels
    </h3>

    <p>🏨 Colombo – Oak Ray Colombo</p>
    <p>🏨 Anuradhapura – Four Points Resort</p>
    <p>🏨 Dambulla – Sigiriya Kingdom Resort</p>
  </div>
)}
  {selectedItem.name === 'Thailand Group Tour' && (
  <div style={{ marginTop: '1.5rem' }}>
    <h3 style={{ color: '#185FA5', fontSize: '16px', marginBottom: '10px' }}>
      Day Wise Itinerary
    </h3>

    {[
      'Day 1: Arrival Bangkok – Transfer to Pattaya',
      'Day 2: Coral Island Tour with Lunch',
      'Day 3: Pattaya City Tour & Alcazar Show',
      'Day 4: Pattaya to Bangkok – City & Temple Tour',
      'Day 5: Safari World & Marine Park',
      'Day 6: Bangkok Shopping & Airport Drop'
    ].map((day, idx) => (
      <p key={idx} style={{ fontSize: '13px', color: '#666', marginBottom: '6px' }}>
        ✅ {day}
      </p>
    ))}

    <h3 style={{ color: '#185FA5', marginTop: '15px', fontSize: '16px' }}>
      Package Highlights
    </h3>

    <p>🏨 Pattaya + Bangkok Hotel Stay</p>
    <p>🍽️ Daily Breakfast</p>
    <p>🚐 Airport Transfers & Sightseeing</p>
    <p>🏝️ Coral Island Tour</p>
  </div>
)}
            {selectedItem.includes && (
                <div style={{ marginTop: '1rem' }}>
                  <h4 style={{ marginBottom: '0.5rem', color: '#185FA5', fontSize: '14px' }}>Includes</h4>
                  <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px' }}>
                    {selectedItem.includes.map((item, idx) => (
                      <li key={idx} style={{ padding: '0.25rem 0', color: '#666' }}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div style={{
            background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px',
            padding: '1rem', height: 'fit-content'
          }}>
            <div style={{
              fontSize: '22px', fontWeight: 'bold', color: '#FFA500',
              marginBottom: '1rem', textAlign: 'center'
            }}>
              ₹{(selectedItem.price || selectedItem.amount).toLocaleString()}
            </div>

            <div style={{ marginBottom: '1rem', textAlign: 'center', fontSize: '13px' }}>
              ⭐ {selectedItem.rating} ({selectedItem.reviews} reviews)
            </div>

            <button
              onClick={() => { addToCart(selectedItem); setCurrentPage('cart'); }}
              style={{
                width: '100%', background: '#185FA5', color: 'white', border: 'none',
                padding: '10px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold',
                marginBottom: '0.5rem', fontSize: '13px'
              }}
            >
              Add to Cart
            </button>
<button
  onClick={() => {
    const message = `Hello Fly4Wonders, please send me PDF itinerary for ${selectedItem.name}.`;
    window.open(`https://wa.me/918655566816?text=${encodeURIComponent(message)}`, '_blank');
  }}
  style={{
    width: '100%',
    background: '#25D366',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '13px',
    marginTop: '8px'
  }}
>
  Download PDF Itinerary
</button>
            <button
              onClick={() => toggleFavorite(selectedItem.id)}
             style={{
                width: '100%',
                background: favorites.includes(selectedItem.id) ? '#FFA500' : 'white',
                color: favorites.includes(selectedItem.id) ? 'white' : '#FFA500',
                border: '1px solid #FFA500', padding: '10px', borderRadius: '6px',
                cursor: 'pointer', fontWeight: 'bold', fontSize: '13px'
              }}
            >
              {favorites.includes(selectedItem.id) ? '❤️ Saved' : '🤍 Save'}
            </button>

<div style={{
  marginTop: '15px',
  borderTop: '1px solid #ddd',
  paddingTop: '15px'
}}>
  <h4 style={{ color: '#185FA5', marginBottom: '10px' }}>Get Best Quote</h4>

  <input type="text" placeholder="Your Name" value={leadForm.name}
    onChange={(e) => setLeadForm({...leadForm, name: e.target.value})}
    style={{ width:'100%', padding:'8px', marginBottom:'8px' }}
  />

  <input type="text" placeholder="Mobile Number" value={leadForm.mobile}
    onChange={(e) => setLeadForm({...leadForm, mobile: e.target.value})}
    style={{ width:'100%', padding:'8px', marginBottom:'8px' }}
  />

  <input type="email" placeholder="Email" value={leadForm.email}
    onChange={(e) => setLeadForm({...leadForm, email: e.target.value})}
    style={{ width:'100%', padding:'8px', marginBottom:'8px' }}
  />

  <input type="date" value={leadForm.travelDate}
    onChange={(e) => setLeadForm({...leadForm, travelDate: e.target.value})}
    style={{ width:'100%', padding:'8px', marginBottom:'8px' }}
  />

  <input type="number" placeholder="No. of Pax" value={leadForm.pax}
    onChange={(e) => setLeadForm({...leadForm, pax: e.target.value})}
    style={{ width:'100%', padding:'8px', marginBottom:'8px' }}
  />

  <button
    onClick={() => {
      const msg = `New Enquiry
Package: ${selectedItem.name}
Name: ${leadForm.name}
Mobile: ${leadForm.mobile}
Email: ${leadForm.email}
Travel Date: ${leadForm.travelDate}
Pax: ${leadForm.pax}`;

      window.open(`https://wa.me/918655566816?text=${encodeURIComponent(msg)}`, '_blank');
    }}
    style={{
      width:'100%',
      background:'#25D366',
      color:'white',
      border:'none',
      padding:'10px',
      borderRadius:'6px',
      fontWeight:'bold',
      cursor:'pointer'
    }}
  >
    Get Best Quote
  </button>
</div>

          </div>
        </div>
      )}
          </div>
        </div>
      )}
    </div>
  );
const WhatsAppButton = () => (
  <a
    href="https://wa.me/918655566816"
    target="_blank"
    rel="noreferrer"
    style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#25D366',
      color: 'white',
      padding: '15px 20px',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 'bold',
      zIndex: 9999,
      boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
    }}
  >
    WhatsApp Us
  </a>
);
 const Footer = () => (
  <footer
    style={{
      background: '#185FA5',
      color: 'white',
      padding: '40px 20px',
      marginTop: '50px'
    }}
  >
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px'
      }}
    >
      <div>
        <h3>Fly4Wonders</h3>
        <p>
          Your trusted travel partner for Thailand, Vietnam, Bali,
          Sri Lanka, Bhutan and worldwide holiday packages.
        </p>
      </div>

      <div>
        <h3>Quick Links</h3>
        <p>Home</p>
        <p>Tour Packages</p>
        <p>Community</p>
        <p>Contact Us</p>
      </div>

      <div>
        <h3>Contact Us</h3>
        <p>📞 +91 86555 66816</p>
        <p>📧 sadiqfaizan@fly4wonders.com</p>
        <p>📍 Mumbai, India</p>
      </div>
    </div>

    <hr
      style={{
        margin: '20px 0',
        border: '1px solid rgba(255,255,255,0.2)'
      }}
    />

    <div
      style={{
        textAlign: 'center',
        fontSize: '14px'
      }}
    >
      © 2026 Fly4Wonders. All Rights Reserved.
    </div>
  </footer>
);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'bookings': return <BookingsPage />;
      case 'community': return <CommunityPage />;
      case 'cart': return <CartPage />;
      case 'profile': return user ? <ProfilePage /> : <HomePage />;
      case 'groupTours': return <GroupToursPage />;
      case 'trips': return user ? <TripsPage /> : <HomePage />;
      case 'detail': return <DetailPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Header />
<div style={{
  background: '#FFA500',
  color: 'white',
  textAlign: 'center',
  padding: '8px',
  fontWeight: 'bold',
  fontSize: '14px'
}}>
  📞 +91 86555 66816 | ✉️ sadiqfaizan@fly4wonders.com
</div>
      {renderPage()}

      <WhatsAppButton />
      <Footer />
      {showAuthModal && <AuthModal />}
    </div>
  );
}

export default App;