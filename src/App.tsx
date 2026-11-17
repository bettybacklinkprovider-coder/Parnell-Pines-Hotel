/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Calendar, Users, Star, Award, ShieldCheck, 
  ChevronRight, ArrowRight, Menu, X, Coffee, Utensils, Sparkles, 
  Wifi, Car, Clock, CheckCircle, ExternalLink, QrCode, MessageSquare, 
  Heart, Compass, CreditCard, Info
} from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'rooms' | 'gallery' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<string>('Deluxe King Room');
  
  // Booking Form State inside Modal
  const [bookingForm, setBookingForm] = useState({
    checkIn: '2026-06-01',
    checkOut: '2026-06-04',
    guests: '2 Adults',
    room: selectedRoomForBooking,
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Contact / Inquiry Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Gallery filter state
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'rooms' | 'dining' | 'exterior' | 'gardens'>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Room filter state
  const [roomFilter, setRoomFilter] = useState<'all' | 'suite' | 'deluxe'>('all');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const openBookingModal = (roomName?: string) => {
    if (roomName) {
      setSelectedRoomForBooking(roomName);
      setBookingForm(prev => ({ ...prev, room: roomName }));
    }
    setBookingModalOpen(true);
    setBookingSubmitted(false);
  };

  const navigateTo = (page: 'home' | 'rooms' | 'gallery' | 'contact') => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Image assets generated
  const imgHero = "/src/assets/images/hero_hotel_exterior_1794902388601.jpg";
  const imgDeluxeKing = "/src/assets/images/room_deluxe_king_1794902389302.jpg";
  const imgExecutiveSuite = "/src/assets/images/room_executive_suite_1794902389069.jpg";
  const imgDining = "/src/assets/images/dining_restaurant_1794902388839.jpg";
  const imgCourtyard = "/src/assets/images/hotel_courtyard_1794902388818.jpg";
  const imgFacilityDining = "/src/assets/images/facility_dining_1794904626216.jpg";
  const imgFacilitySpa = "/src/assets/images/facility_spa_1794904626778.jpg";
  const imgFacilityValet = "/src/assets/images/facility_valet_1794904627123.jpg";
  const imgFacilityLounge = "/src/assets/images/facility_lounge_1794904627311.jpg";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-rose-900 selection:text-white">
      
      {/* TOP NOTIFICATION BAR */}
      <div className="bg-[#0F172A] text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5" /> 320 Parnell Road, Parnell, Auckland 1052
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <a href="tel:+64212488436" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-rose-500" /> +64 21 248 8436
            </a>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="text-amber-400 font-semibold tracking-wider uppercase text-[11px]">Red & Blue Luxury Collection</span>
            <a 
              href="https://wa.me/64212488436?text=Hello%20Parnell%20Pines%20Hotel,%20I%20would%20like%20to%20inquire%20about%20room%20availability." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-2.5 py-0.5 rounded text-[11px] font-medium flex items-center gap-1 transition-colors"
            >
              <MessageSquare className="w-3 h-3" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </div>

      {/* TOP NAVIGATION BAR (Strict Top Bar Contract: 3 Zones) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Logo */}
          <button 
            onClick={() => navigateTo('home')} 
            className="flex items-center gap-3 text-left group shrink-0 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0F172A] text-amber-400 flex items-center justify-center font-serif text-xl font-bold shadow-md group-hover:bg-rose-950 transition-colors">
              PP
            </div>
            <div>
              <span className="block font-serif text-xl tracking-tight text-[#0F172A] font-bold group-hover:text-rose-900 transition-colors">
                Parnell Pines Hotel
              </span>
              <span className="block text-[10px] tracking-widest text-amber-700 uppercase font-medium">
                Auckland Luxury
              </span>
            </div>
          </button>

          {/* Zone 2: 4 Clean Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <button 
              onClick={() => navigateTo('home')} 
              className={`hover:text-rose-900 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${activePage === 'home' ? 'border-rose-900 text-rose-900 font-semibold' : 'border-transparent'}`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateTo('rooms')} 
              className={`hover:text-rose-900 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${activePage === 'rooms' ? 'border-rose-900 text-rose-900 font-semibold' : 'border-transparent'}`}
            >
              Rooms & Accommodation
            </button>
            <button 
              onClick={() => navigateTo('gallery')} 
              className={`hover:text-rose-900 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${activePage === 'gallery' ? 'border-rose-900 text-rose-900 font-semibold' : 'border-transparent'}`}
            >
              Gallery & Experience
            </button>
            <button 
              onClick={() => navigateTo('contact')} 
              className={`hover:text-rose-900 transition-colors whitespace-nowrap shrink-0 pb-1 border-b-2 ${activePage === 'contact' ? 'border-rose-900 text-rose-900 font-semibold' : 'border-transparent'}`}
            >
              Contact & Booking
            </button>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button 
              onClick={() => openBookingModal()}
              className="bg-rose-900 hover:bg-rose-950 text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-amber-300" /> Book Now
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              onClick={() => openBookingModal()}
              className="bg-rose-900 text-white px-3 py-1.5 rounded text-xs font-medium"
            >
              Book
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
            <button 
              onClick={() => navigateTo('home')} 
              className={`block w-full text-left py-2 font-medium ${activePage === 'home' ? 'text-rose-900 font-bold' : 'text-slate-700'}`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateTo('rooms')} 
              className={`block w-full text-left py-2 font-medium ${activePage === 'rooms' ? 'text-rose-900 font-bold' : 'text-slate-700'}`}
            >
              Rooms & Accommodation
            </button>
            <button 
              onClick={() => navigateTo('gallery')} 
              className={`block w-full text-left py-2 font-medium ${activePage === 'gallery' ? 'text-rose-900 font-bold' : 'text-slate-700'}`}
            >
              Gallery & Experience
            </button>
            <button 
              onClick={() => navigateTo('contact')} 
              className={`block w-full text-left py-2 font-medium ${activePage === 'contact' ? 'text-rose-900 font-bold' : 'text-slate-700'}`}
            >
              Contact & Booking
            </button>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button 
                onClick={() => { setMobileMenuOpen(false); openBookingModal(); }}
                className="w-full bg-rose-900 text-white py-3 rounded-lg font-medium text-center shadow"
              >
                Book Your Stay
              </button>
              <a 
                href="https://wa.me/64212488436" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Concierge (+64 21 248 8436)
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ================= PAGE CONTENT ================= */}

      {/* ---------------- PAGE 1: HOME ---------------- */}
      {activePage === 'home' && (
        <main>
          {/* SECTION 1: Hero / Welcome Section */}
          <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0F172A] text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src={imgHero} 
                alt="Parnell Pines Hotel Exterior" 
                className="w-full h-full object-cover opacity-40 scale-105 animate-pulse duration-10000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
              <div className="inline-flex items-center gap-2 bg-rose-950/80 border border-rose-800/60 text-amber-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Auckland's Premier Luxury Heritage Destination
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Timeless Elegance in Historic <span className="text-amber-400">Parnell</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-light mb-10 leading-relaxed">
                Welcome to Parnell Pines Hotel. Nestled among majestic pine trees at 320 Parnell Road, offering sophisticated rooms, fine dining, and unmatched New Zealand hospitality.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => openBookingModal()}
                  className="w-full sm:w-auto bg-rose-900 hover:bg-rose-950 text-white px-8 py-4 rounded-xl font-medium shadow-xl hover:shadow-rose-900/30 transition-all flex items-center justify-center gap-3 text-base"
                >
                  <Calendar className="w-5 h-5 text-amber-300" /> Check Availability & Book
                </button>
                <button 
                  onClick={() => navigateTo('rooms')} 
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-medium backdrop-blur-md transition-all flex items-center justify-center gap-3 text-base"
                >
                  Explore Rooms <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Booking Strip */}
              <div className="mt-16 bg-white/95 backdrop-blur-md rounded-2xl p-6 text-slate-900 shadow-2xl max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 items-center border border-slate-200">
                <div className="text-left px-2">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Check-In</label>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Calendar className="w-4 h-4 text-rose-900" /> Jun 01, 2026
                  </div>
                </div>
                <div className="text-left px-2 md:border-l md:border-slate-200">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Check-Out</label>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Calendar className="w-4 h-4 text-rose-900" /> Jun 04, 2026
                  </div>
                </div>
                <div className="text-left px-2 md:border-l md:border-slate-200">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Guests & Room</label>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Users className="w-4 h-4 text-rose-900" /> 2 Adults, 1 Room
                  </div>
                </div>
                <div>
                  <button 
                    onClick={() => openBookingModal()}
                    className="w-full bg-[#0F172A] hover:bg-rose-900 text-white py-3 rounded-lg font-medium text-sm transition-colors shadow"
                  >
                    Book Now
                  </button>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 2: About Parnell Pines Hotel */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-rose-900 text-xs font-bold tracking-widest uppercase bg-rose-50 px-3 py-1 rounded">
                    Heritage & Sophistication
                  </div>
                  <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F172A] leading-tight">
                    A Sanctuary of Refined Luxury in Auckland
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Situated at historic 320 Parnell Road, Parnell Pines Hotel seamlessly blends timeless architectural heritage with contemporary luxury. Surrounded by Auckland's oldest vibrant suburb, our boutique sanctuary offers discerning travelers an exclusive retreat characterized by bespoke service, sumptuous interiors, and tranquil pine-fringed gardens.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Whether you are visiting for a romantic weekend getaway, an executive business stay, or celebrating a milestone, our dedicated concierge team ensures every moment is tailored to perfection.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="block font-serif text-3xl font-bold text-rose-900 mb-1">320</span>
                      <span className="text-xs text-slate-600 font-medium">Parnell Road Address</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="block font-serif text-3xl font-bold text-rose-900 mb-1">5-Star</span>
                      <span className="text-xs text-slate-600 font-medium">Boutique Hospitality</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={() => navigateTo('gallery')}
                      className="inline-flex items-center gap-2 text-rose-900 font-semibold hover:text-rose-950 transition-colors"
                    >
                      View Photo Gallery & Experience <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-rose-900/10 to-blue-900/10 rounded-3xl transform -rotate-1"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                    <img 
                      src={imgCourtyard} 
                      alt="Parnell Pines Hotel Courtyard" 
                      className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: Featured Rooms & Accommodation */}
          <section className="py-24 bg-[#F8FAFC] border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-rose-900 text-xs font-bold tracking-widest uppercase bg-rose-50 px-3 py-1 rounded">
                  Exquisite Suites
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] mt-3 mb-4">
                  Featured Accommodation
                </h2>
                <p className="text-slate-600">
                  Immaculately designed rooms and suites featuring plush velvet furnishings, custom woodwork, and panoramic views of Auckland.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Room 1 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col group hover:shadow-xl transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={imgDeluxeKing} 
                      alt="Deluxe King Room" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-[#0F172A] text-amber-400 px-3 py-1 rounded-full text-xs font-semibold shadow">
                      From $380 NZD / night
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                        <span>42 m²</span>
                        <span>·</span>
                        <span>Max 2 Guests</span>
                        <span>·</span>
                        <span>King Bed</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-2">Deluxe King Room</h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        Features opulent navy blue velvet headboards, burgundy drapery, marble ensuite bathroom, and Nespresso station.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Free Breakfast
                      </span>
                      <button 
                        onClick={() => openBookingModal('Deluxe King Room')}
                        className="bg-rose-900 hover:bg-rose-950 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Room 2 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col group hover:shadow-xl transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={imgExecutiveSuite} 
                      alt="Executive Suite" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-[#0F172A] text-amber-400 px-3 py-1 rounded-full text-xs font-semibold shadow">
                      From $590 NZD / night
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                        <span>68 m²</span>
                        <span>·</span>
                        <span>Max 3 Guests</span>
                        <span>·</span>
                        <span>King + Lounge</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-2">Executive Suite</h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        Expansive corner suite with floor-to-ceiling windows overlooking Auckland, separate living salon, and premium soaking tub.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Lounge Access
                      </span>
                      <button 
                        onClick={() => openBookingModal('Executive Suite')}
                        className="bg-rose-900 hover:bg-rose-950 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Room 3 */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col group hover:shadow-xl transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={imgCourtyard} 
                      alt="Heritage Garden Suite" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-[#0F172A] text-amber-400 px-3 py-1 rounded-full text-xs font-semibold shadow">
                      From $750 NZD / night
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                        <span>85 m²</span>
                        <span>·</span>
                        <span>Max 4 Guests</span>
                        <span>·</span>
                        <span>Private Terrace</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-2">Heritage Garden Suite</h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        Direct access to our tranquil botanical pine courtyard, bespoke fireplace, two marble bathrooms, and butler service.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Butler Service
                      </span>
                      <button 
                        onClick={() => openBookingModal('Heritage Garden Suite')}
                        className="bg-rose-900 hover:bg-rose-950 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <button 
                  onClick={() => navigateTo('rooms')}
                  className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-medium shadow-md transition-all"
                >
                  View All Rooms & Availability <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* SECTION 4: Hotel Facilities & Amenities */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-rose-900 text-xs font-bold tracking-widest uppercase bg-rose-50 px-3 py-1 rounded">
                  World-Class Amenities
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] mt-3 mb-4">
                  Curated Guest Experiences
                </h2>
                <p className="text-slate-600">
                  Indulge in our exceptional facilities designed to elevate your stay in Parnell, Auckland.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all group flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={imgFacilityDining} alt="Pines Fine Dining" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2">Pines Fine Dining</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Exquisite New Zealand cuisine and artisan wines paired with white-glove service in our historic dining salon.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all group flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={imgFacilitySpa} alt="Sanctuary Spa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2">Sanctuary Spa</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Rejuvenate your senses with holistic massages, organic botanical facials, and hydrotherapy suites.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all group flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={imgFacilityValet} alt="Valet & Chauffeur" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2">Valet & Chauffeur</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        24/7 secure valet parking and private luxury chauffeur transfers across Auckland city and airport.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all group flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={imgFacilityLounge} alt="Executive Lounge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2">Executive Lounge</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Complimentary artisanal high tea, evening canapés, high-speed fiber Wi-Fi, and private meeting spaces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: Special Offers & Packages */}
          <section className="py-24 bg-[#0F172A] text-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-rose-950/80 px-3 py-1 rounded border border-rose-800">
                  Exclusive Packages
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-3 mb-4">
                  Special Offers & Stays
                </h2>
                <p className="text-slate-300">
                  Enhance your Parnell Pines experience with our curated seasonal packages and romantic getaways.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Offer 1 */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-amber-400/50 transition-all">
                  <div>
                    <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-2">Weekend Escape</span>
                    <h3 className="font-serif text-2xl font-bold mb-4">Parnell Romantic Getaway</h3>
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                      Includes 2 nights in a Deluxe King Room, bottle of Central Otago Pinot Noir on arrival, full cooked breakfast daily, and late checkout.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between mb-6 pt-4 border-t border-slate-800">
                      <span className="text-xs text-slate-400">Package rate</span>
                      <span className="font-serif text-2xl font-bold text-amber-400">$850 <span className="text-xs text-slate-400 font-sans">NZD</span></span>
                    </div>
                    <button 
                      onClick={() => openBookingModal('Parnell Romantic Getaway')}
                      className="w-full bg-rose-900 hover:bg-rose-950 text-white py-3 rounded-lg font-medium text-sm transition-colors shadow"
                    >
                      Reserve Package
                    </button>
                  </div>
                </div>

                {/* Offer 2 */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-amber-400/50 transition-all">
                  <div>
                    <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-2">Extended Stay</span>
                    <h3 className="font-serif text-2xl font-bold mb-4">Auckland Explorer Package</h3>
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                      Stay 4 nights or more in an Executive Suite and enjoy 20% off room rates, complimentary daily valet parking, and a private city tour.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between mb-6 pt-4 border-t border-slate-800">
                      <span className="text-xs text-slate-400">Special Rate</span>
                      <span className="font-serif text-2xl font-bold text-amber-400">20% Off <span className="text-xs text-slate-400 font-sans">Standard Rate</span></span>
                    </div>
                    <button 
                      onClick={() => openBookingModal('Auckland Explorer Package')}
                      className="w-full bg-rose-900 hover:bg-rose-950 text-white py-3 rounded-lg font-medium text-sm transition-colors shadow"
                    >
                      Reserve Package
                    </button>
                  </div>
                </div>

                {/* Offer 3 */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-amber-400/50 transition-all">
                  <div>
                    <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-2">Business Executive</span>
                    <h3 className="font-serif text-2xl font-bold mb-4">Corporate Stay & Dine</h3>
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                      Tailored for corporate travelers. Includes high-speed fiber internet, executive lounge access, daily laundry credit, and $100 dining voucher.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-baseline justify-between mb-6 pt-4 border-t border-slate-800">
                      <span className="text-xs text-slate-400">Corporate Rate</span>
                      <span className="font-serif text-2xl font-bold text-amber-400">$420 <span className="text-xs text-slate-400 font-sans">NZD / night</span></span>
                    </div>
                    <button 
                      onClick={() => openBookingModal('Corporate Stay & Dine')}
                      className="w-full bg-rose-900 hover:bg-rose-950 text-white py-3 rounded-lg font-medium text-sm transition-colors shadow"
                    >
                      Reserve Package
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: Customer Reviews & Testimonials */}
          <section className="py-24 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-rose-900 text-xs font-bold tracking-widest uppercase bg-rose-50 px-3 py-1 rounded">
                  Guest Testimonials
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] mt-3 mb-4">
                  Verified Reviews & Ratings
                </h2>
                <p className="text-slate-600">
                  Read genuine feedback from our esteemed international and domestic guests.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Review Card 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-slate-700 italic text-sm mb-6 leading-relaxed">
                      "An absolute gem in Parnell! The historic charm combined with ultra-luxurious modern amenities made our wedding anniversary unforgettable. The staff went above and beyond."
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <span className="block font-bold text-sm text-[#0F172A]">Alistair & Claire Vance</span>
                      <span className="text-xs text-slate-500">Google Verified Guest</span>
                    </div>
                    <span className="text-xs font-semibold bg-blue-50 text-blue-800 px-2.5 py-1 rounded">Google Reviews</span>
                  </div>
                </div>

                {/* Review Card 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-slate-700 italic text-sm mb-6 leading-relaxed">
                      "Impeccable cleanliness, exquisite dining at Pines Restaurant, and the most comfortable king bed I've experienced in New Zealand. Perfectly located at 320 Parnell Road."
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <span className="block font-bold text-sm text-[#0F172A]">Marcus Sterling</span>
                      <span className="text-xs text-slate-500">Trustpilot Verified</span>
                    </div>
                    <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded">Trustpilot</span>
                  </div>
                </div>

                {/* Review Card 3 (QR Review Card) */}
                <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between border border-slate-800">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Review Us</span>
                      <QrCode className="w-8 h-8 text-amber-400" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">Have you stayed with us?</h3>
                    <p className="text-slate-300 text-xs mb-6 leading-relaxed">
                      We value your feedback. Scan or click below to share your experience on our official guest review portal.
                    </p>
                  </div>
                  <button 
                    onClick={() => setQrModalOpen(true)}
                    className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 py-3 rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow"
                  >
                    <QrCode className="w-4 h-4" /> View Review QR Code
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ---------------- PAGE 2: ROOMS & ACCOMMODATION ---------------- */}
      {activePage === 'rooms' && (
        <main className="py-16 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-rose-900 text-xs font-bold tracking-widest uppercase bg-rose-50 px-3 py-1 rounded">
                Luxury Stays
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F172A] mt-3 mb-4">
                Rooms & Accommodation
              </h1>
              <p className="text-slate-600">
                Explore our collection of meticulously appointed rooms, executive suites, and historic garden residences.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center items-center gap-2 mb-12">
              <button 
                onClick={() => setRoomFilter('all')} 
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${roomFilter === 'all' ? 'bg-[#0F172A] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}`}
              >
                All Accommodations
              </button>
              <button 
                onClick={() => setRoomFilter('deluxe')} 
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${roomFilter === 'deluxe' ? 'bg-[#0F172A] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}`}
              >
                Deluxe Rooms
              </button>
              <button 
                onClick={() => setRoomFilter('suite')} 
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${roomFilter === 'suite' ? 'bg-[#0F172A] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}`}
              >
                Suites & Residences
              </button>
            </div>

            {/* Rooms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(roomFilter === 'all' || roomFilter === 'deluxe') && (
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col">
                  <div className="relative h-72">
                    <img src={imgDeluxeKing} alt="Deluxe King Room" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <span className="absolute top-4 right-4 bg-[#0F172A] text-amber-400 px-3 py-1 rounded-full text-xs font-semibold">
                      $380 NZD / night
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-2 font-medium">
                        <span>42 m²</span>
                        <span>·</span>
                        <span>Max 2 Guests</span>
                        <span>·</span>
                        <span>King Bed</span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-2">Deluxe King Room</h3>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        Features plush velvet burgundy accents, navy blue upholstered headboards, marble bathroom with rain shower, and Nespresso machine.
                      </p>
                      <div className="space-y-2 mb-6 text-xs text-slate-700">
                        <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> High-Speed Wi-Fi & Smart TV</div>
                        <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> Complimentary Full Breakfast</div>
                        <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> Daily Turn-down Service</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => openBookingModal('Deluxe King Room')}
                      className="w-full bg-rose-900 hover:bg-rose-950 text-white py-3 rounded-xl font-medium text-sm transition-colors shadow"
                    >
                      Book Deluxe Room
                    </button>
                  </div>
                </div>
              )}

              {(roomFilter === 'all' || roomFilter === 'suite') && (
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col">
                  <div className="relative h-72">
                    <img src={imgExecutiveSuite} alt="Executive Suite" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <span className="absolute top-4 right-4 bg-[#0F172A] text-amber-400 px-3 py-1 rounded-full text-xs font-semibold">
                      $590 NZD / night
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-2 font-medium">
                        <span>68 m²</span>
                        <span>·</span>
                        <span>Max 3 Guests</span>
                        <span>·</span>
                        <span>King + Salon</span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-2">Executive Suite</h3>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        Expansive corner suite with floor-to-ceiling windows overlooking Auckland, separate living salon, freestanding soaking tub, and minibar.
                      </p>
                      <div className="space-y-2 mb-6 text-xs text-slate-700">
                        <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> Executive Lounge Access</div>
                        <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> Complimentary Airport Transfer</div>
                        <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> Evening Canapés & Drinks</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => openBookingModal('Executive Suite')}
                      className="w-full bg-rose-900 hover:bg-rose-950 text-white py-3 rounded-xl font-medium text-sm transition-colors shadow"
                    >
                      Book Executive Suite
                    </button>
                  </div>
                </div>
              )}

              {(roomFilter === 'all' || roomFilter === 'suite') && (
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col">
                  <div className="relative h-72">
                    <img src={imgCourtyard} alt="Heritage Garden Suite" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <span className="absolute top-4 right-4 bg-[#0F172A] text-amber-400 px-3 py-1 rounded-full text-xs font-semibold">
                      $750 NZD / night
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-2 font-medium">
                        <span>85 m²</span>
                        <span>·</span>
                        <span>Max 4 Guests</span>
                        <span>·</span>
                        <span>Private Terrace</span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-2">Heritage Garden Suite</h3>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        Direct access to our tranquil botanical pine courtyard, bespoke fireplace, two marble bathrooms, and dedicated butler service.
                      </p>
                      <div className="space-y-2 mb-6 text-xs text-slate-700">
                        <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> Dedicated Personal Butler</div>
                        <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> Private Garden Terrace</div>
                        <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> Champagne on Arrival</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => openBookingModal('Heritage Garden Suite')}
                      className="w-full bg-rose-900 hover:bg-rose-950 text-white py-3 rounded-xl font-medium text-sm transition-colors shadow"
                    >
                      Book Garden Suite
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      )}

      {/* ---------------- PAGE 3: GALLERY & HOTEL EXPERIENCE ---------------- */}
      {activePage === 'gallery' && (
        <main className="py-16 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-rose-900 text-xs font-bold tracking-widest uppercase bg-rose-50 px-3 py-1 rounded">
                Visual Journey
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F172A] mt-3 mb-4">
                Gallery & Hotel Experience
              </h1>
              <p className="text-slate-600">
                Immerse yourself in the timeless beauty, exquisite interiors, and serene botanical grounds of Parnell Pines Hotel.
              </p>
            </div>

            {/* Gallery Filters */}
            <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
              {(['all', 'rooms', 'dining', 'exterior', 'gardens'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGalleryFilter(cat)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${galleryFilter === cat ? 'bg-[#0F172A] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                onClick={() => setLightboxImage(imgHero)}
                className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-72 border border-slate-200 bg-white"
              >
                <img src={imgHero} alt="Hotel Exterior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-serif text-lg font-semibold">Historic Hotel Exterior & Pines</span>
                </div>
              </div>

              <div 
                onClick={() => setLightboxImage(imgDeluxeKing)}
                className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-72 border border-slate-200 bg-white"
              >
                <img src={imgDeluxeKing} alt="Deluxe King Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-serif text-lg font-semibold">Deluxe King Room Interior</span>
                </div>
              </div>

              <div 
                onClick={() => setLightboxImage(imgExecutiveSuite)}
                className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-72 border border-slate-200 bg-white"
              >
                <img src={imgExecutiveSuite} alt="Executive Suite" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-serif text-lg font-semibold">Executive Suite with City Views</span>
                </div>
              </div>

              <div 
                onClick={() => setLightboxImage(imgDining)}
                className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-72 border border-slate-200 bg-white"
              >
                <img src={imgDining} alt="Pines Fine Dining" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-serif text-lg font-semibold">Pines Fine Dining Restaurant</span>
                </div>
              </div>

              <div 
                onClick={() => setLightboxImage(imgCourtyard)}
                className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-72 border border-slate-200 bg-white"
              >
                <img src={imgCourtyard} alt="Botanical Garden Courtyard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-serif text-lg font-semibold">Botanical Pine Garden Courtyard</span>
                </div>
              </div>

              <div 
                onClick={() => setLightboxImage(imgDeluxeKing)}
                className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer h-72 border border-slate-200 bg-white"
              >
                <img src={imgDeluxeKing} alt="Lounge Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-serif text-lg font-semibold">Executive Lounge & Bar</span>
                </div>
              </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxImage && (
              <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
                <button 
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <img src={lightboxImage} alt="Expanded View" className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain" referrerPolicy="no-referrer" />
              </div>
            )}
          </div>
        </main>
      )}

      {/* ---------------- PAGE 4: CONTACT & BOOKING ---------------- */}
      {activePage === 'contact' && (
        <main className="py-16 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-rose-900 text-xs font-bold tracking-widest uppercase bg-rose-50 px-3 py-1 rounded">
                Get in Touch
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F172A] mt-3 mb-4">
                Contact & Booking Inquiry
              </h1>
              <p className="text-slate-600">
                We are at your service. Reach out for reservations, event hosting, or concierge assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-rose-900 text-amber-300 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-1">Hotel Address</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    320 Parnell Road, Parnell, Auckland 1052, New Zealand
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-rose-900 text-amber-300 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-1">Direct Phone</h3>
                  <p className="text-slate-600 text-sm mb-2">Available 24/7 for reservations</p>
                  <a href="tel:+64212488436" className="text-rose-900 font-bold hover:underline">
                    +64 21 248 8436
                  </a>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-1">Instant WhatsApp</h3>
                  <p className="text-slate-600 text-sm mb-4">Chat directly with our front desk concierge.</p>
                  <a 
                    href="https://wa.me/64212488436?text=Hello%20Parnell%20Pines%20Hotel,%20I%20would%20like%20to%20inquire%20about..." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-xs font-semibold shadow transition-colors"
                  >
                    Open WhatsApp Chat
                  </a>
                </div>
              </div>

              {/* Inquiry & Booking Form */}
              <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200">
                <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-2">Send an Inquiry or Booking Request</h3>
                <p className="text-slate-600 text-sm mb-8">Fill out the form below and our reservations team will respond within 2 hours.</p>

                {contactSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                    <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto" />
                    <h4 className="font-serif text-2xl font-bold text-emerald-900">Inquiry Received Successfully!</h4>
                    <p className="text-emerald-700 text-sm max-w-md mx-auto">
                      Thank you for contacting Parnell Pines Hotel. Our reservations manager has received your request and will contact you shortly at +64 21 248 8436 or via email.
                    </p>
                    <button 
                      onClick={() => setContactSubmitted(false)}
                      className="bg-emerald-800 text-white px-6 py-2.5 rounded-lg text-xs font-semibold"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                          placeholder="e.g. Victoria Sterling"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-900 focus:outline-none text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                          placeholder="e.g. victoria@example.com"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-900 focus:outline-none text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Phone Number *</label>
                        <input 
                          type="tel" 
                          required
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                          placeholder="e.g. +64 21 123 4567"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-900 focus:outline-none text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Inquiry Type</label>
                        <select 
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-900 focus:outline-none text-sm bg-white"
                        >
                          <option>Room Reservation</option>
                          <option>Dining & Restaurant Booking</option>
                          <option>Wedding & Private Event</option>
                          <option>General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Message & Special Requests *</label>
                      <textarea 
                        rows={4}
                        required
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        placeholder="Please specify dates, number of guests, or specific requests..."
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-rose-900 focus:outline-none text-sm"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-rose-900 hover:bg-rose-950 text-white py-4 rounded-xl font-medium shadow-lg transition-all text-sm"
                    >
                      Submit Inquiry to Parnell Pines Hotel
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Google Maps Embed / Location Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div>
                  <span className="text-rose-900 text-xs font-bold tracking-widest uppercase bg-rose-50 px-3 py-1 rounded">
                    Location & Directions
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0F172A] mt-2">
                    Visit Us in Parnell, Auckland
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">
                    Located minutes from Auckland CBD, Auckland Domain, and Parnell Rose Gardens.
                  </p>
                </div>
                <a 
                  href="https://maps.google.com/?q=320+Parnell+Road+Parnell+Auckland+1052" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0F172A] hover:bg-rose-900 text-white px-5 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors shadow"
                >
                  <MapPin className="w-4 h-4 text-amber-400" /> Open in Google Maps
                </a>
              </div>

              <div className="w-full h-[400px] rounded-xl overflow-hidden border border-slate-200 relative bg-slate-100 flex items-center justify-center">
                <iframe 
                  title="Parnell Pines Hotel Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.839482912!2d174.7795!3d-36.8584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4814a0000001%3A0x123456789abcdef!2s320%20Parnell%20Rd%2C%20Parnell%2C%20Auckland%201052%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1700000000000!5m2!1sen!2snz" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ================= MODALS ================= */}

      {/* 1. BOOKING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 relative my-8">
            <button 
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-2"
            >
              <X className="w-6 h-6" />
            </button>

            {bookingSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0F172A]">Booking Request Confirmed!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold">{bookingForm.name}</span>. Your reservation request for <span className="font-semibold text-rose-900">{bookingForm.room}</span> from {bookingForm.checkIn} to {bookingForm.checkOut} has been securely submitted to Parnell Pines Hotel.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 border border-slate-200">
                  <p>Confirmation Reference: <span className="font-mono font-bold text-slate-900">PPH-2026-NZ{Math.floor(1000 + Math.random() * 9000)}</span></p>
                  <p className="mt-1">Our concierge will contact you shortly at {bookingForm.phone} or {bookingForm.email}.</p>
                </div>
                <button 
                  onClick={() => { setBookingModalOpen(false); setBookingSubmitted(false); }}
                  className="w-full bg-[#0F172A] text-white py-3 rounded-xl font-medium text-sm mt-4"
                >
                  Close & Return
                </button>
              </div>
            ) : (
              <div>
                <span className="text-rose-900 text-xs font-bold tracking-widest uppercase bg-rose-50 px-3 py-1 rounded">
                  Secure Reservation
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0F172A] mt-2 mb-1">
                  Book Your Stay at Parnell Pines
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  {320} Parnell Road, Parnell, Auckland 1052 | Direct phone: +64 21 248 8436
                </p>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Select Accommodation *</label>
                    <select 
                      value={bookingForm.room}
                      onChange={(e) => setBookingForm({...bookingForm, room: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm bg-white font-medium"
                    >
                      <option value="Deluxe King Room">Deluxe King Room ($380 NZD / night)</option>
                      <option value="Executive Suite">Executive Suite ($590 NZD / night)</option>
                      <option value="Heritage Garden Suite">Heritage Garden Suite ($750 NZD / night)</option>
                      <option value="Parnell Romantic Getaway">Parnell Romantic Getaway Package ($850 NZD)</option>
                      <option value="Auckland Explorer Package">Auckland Explorer Package (20% Off)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Check-In Date *</label>
                      <input 
                        type="date" 
                        required
                        value={bookingForm.checkIn}
                        onChange={(e) => setBookingForm({...bookingForm, checkIn: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Check-Out Date *</label>
                      <input 
                        type="date" 
                        required
                        value={bookingForm.checkOut}
                        onChange={(e) => setBookingForm({...bookingForm, checkOut: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Guests *</label>
                    <select 
                      value={bookingForm.guests}
                      onChange={(e) => setBookingForm({...bookingForm, guests: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm bg-white"
                    >
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>2 Adults, 1 Child</option>
                      <option>3 Adults</option>
                      <option>4 Adults (Garden Suite)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                        placeholder="e.g. James Kensington"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                        placeholder="+64 21 ..."
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                      placeholder="james@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-rose-900 hover:bg-rose-950 text-white py-3.5 rounded-xl font-medium shadow-md transition-all text-sm mt-4"
                  >
                    Confirm Reservation Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. QR CODE MODAL */}
      {qrModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 relative text-center">
            <button 
              onClick={() => setQrModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-2">Guest Review Portal</h3>
            <p className="text-slate-600 text-xs mb-6 leading-relaxed">
              Scan this QR code with your smartphone camera to leave your verified review for Parnell Pines Hotel on Google & Trustpilot.
            </p>
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 flex items-center justify-center mb-6">
              <div className="w-48 h-48 bg-white p-3 rounded-lg shadow-inner flex flex-col items-center justify-center border border-slate-300">
                <QrCode className="w-36 h-36 text-slate-900" />
                <span className="text-[10px] font-mono text-slate-500 mt-1">PPH-NZ-REVIEW</span>
              </div>
            </div>
            <button 
              onClick={() => setQrModalOpen(false)}
              className="w-full bg-[#0F172A] text-white py-2.5 rounded-lg text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-rose-900 text-amber-300 flex items-center justify-center font-serif font-bold text-lg">
                PP
              </div>
              <span className="font-serif text-lg font-bold text-white">Parnell Pines Hotel</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Timeless luxury and refined boutique accommodation in the historic heart of Parnell, Auckland, New Zealand.
            </p>
            <div className="pt-2">
              <a 
                href="https://wa.me/64212488436" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded text-xs font-medium transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Concierge
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => navigateTo('home')} className="hover:text-amber-400 transition-colors">Home Landing Page</button></li>
              <li><button onClick={() => navigateTo('rooms')} className="hover:text-amber-400 transition-colors">Rooms & Accommodation</button></li>
              <li><button onClick={() => navigateTo('gallery')} className="hover:text-amber-400 transition-colors">Gallery & Experience</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-amber-400 transition-colors">Contact & Booking Inquiry</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">Location & Contact</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>320 Parnell Road, Parnell, Auckland 1052, New Zealand</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <a href="tel:+64212488436" className="hover:text-white transition-colors">+64 21 248 8436</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>reservations@parnellpineshotel.co.nz</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">Red & Blue Luxury Theme</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Experience the pinnacle of New Zealand boutique hospitality with our curated red, navy blue, and gold luxury color palette.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#0F172A] border border-slate-700" title="Deep Navy Blue"></div>
              <div className="w-6 h-6 rounded-full bg-[#991B1B] border border-slate-700" title="Burgundy Red"></div>
              <div className="w-6 h-6 rounded-full bg-[#D4AF37] border border-slate-700" title="Soft Gold"></div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© 2026 Parnell Pines Hotel, Auckland, New Zealand. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-400">Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-slate-400">Terms & Conditions</a>
            <a href="#accessibility" onClick={(e) => e.preventDefault()} className="hover:text-slate-400">Accessibility</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
