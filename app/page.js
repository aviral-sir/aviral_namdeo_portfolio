"use client";
import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Mail,
  Mic,
  Users,
  BookOpen,
  Sparkles,
  Video,
  CalendarCheck,
  School,
  Quote,
  ChevronLeft,
  ChevronRight,
  Award,
  Clock,
  BookMarked,
  UserCheck,
  Home,
  User,
  MessageCircle,
  FileText,
  Phone,
  ChevronDown,
  Menu,
  X,
  Globe,
  BookOpen as BookOpenIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const carouselRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const galleryImages = [
    { src: "/interacting_with_students.jpeg", title: "Interacting with students", description: "" },
    { src: "/listening_to_students.jpeg", title: "Listening to students", description: "" },
    { src: "/aps_kamtee.jpeg", title: "Aps Kamtee", description: "" },
    { src: "/at_iim_calcutta.jpeg", title: "At IIM Calcutta", description: "" },
    { src: "/at_iit_delhi.jpeg", title: "At IIT Delhi", description: "" },
    { src: "/with_dr_vm_chariar.jpeg", title: "With Dr V M Chariar", description: "Prof IIT Delhi" },
    { src: "/with_mr_rajiv_talreha.jpeg", title: "With Mr Rajiv Talreja", description: "Business Coach at Proficon Bengaluru" },
    { src: "/at_jio_institute.jpeg", title: "At Jio Institute", description: "Navi Mumbai" },
    { src: "/with_helen_and_sarah.jpeg", title: "With Helen and Sarah", description: "Trainers - ECIS, Jio Institute" },
    { src: "/ayi_jio_institute_classroom.jpeg", title: "At Jio Institute class room", description: "" },
    { src: "/at_t_hub_hyderabad.jpeg", title: "At T-Hub Hyderabad", description: "India's largest technology incubator" },
    { src: "/rewarding_badminton_players.jpeg", title: "Rewarding badminton players", description: "" },
    { src: "/delivering_speech_iim_calcutta.jpeg", title: "Delivering speech at IIM Calcutta", description: "" },
    { src: "/didac_india_bengaluru.jpeg", title: "Didac India Bengaluru", description: "" },
    { src: "/judge_stemfield_school.jpeg", title: "As a judge in Stemfield International School", description: "" },
    { src: "/facilitated_stemfield_school.jpeg", title: "Facilitated at Stemfield International School", description: "" },
  ];

  const videos = [
    {
      src: "https://www.youtube.com/embed/nJv0RP1xTRI",
      title: "A 26 year Journey: Passionate Math & Science Teaching in the age of AI"
    },
    {
      src: "https://www.youtube.com/embed/rt-KBiFjeSQ",
      title: "The Comeback Is Stronger Than the Setback | Mihika’s Inspiring Career Journey | A1 Academy Podcast"
    },
    {
      src: "https://www.youtube.com/embed/23gr0ROGY6o",
      title: "The #1 Mistake Parents Make in Modern Education"
    }
  ];

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-advance gallery slideshow
  useEffect(() => {
    // Gallery images are now defined in main component scope

    const interval = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Parent of Riya",
      role: "Parent of 9th Grader",
      text: "Mr. Namdeo brought out the best in our daughter. His patience and encouragement changed her attitude towards studies. We've seen remarkable improvement not just in her grades but in her overall confidence.",
    },
    {
      name: "Ankit Sharma",
      role: "High School Student",
      text: "He made math fun and science exciting. I never thought I'd enjoy school this much. Sir's way of explaining complex topics with real-world examples makes everything click. Now I'm pursuing engineering because of his inspiration.",
    },
    {
      name: "Mrs. Kaur",
      role: "Parent of Kabir",
      text: "Aviral sir's teaching style is magical. Kids love attending his sessions. My son used to dread science classes but now eagerly waits for Mr. Namdeo's lectures. His approach has transformed our son's academic journey.",
    },
    {
      name: "Dr. Neha Gupta",
      role: "Former Student, Now Medical Professional",
      text: "He goes beyond textbooks: his stories and examples make every lesson memorable. Ten years later, I still remember his biology lectures that sparked my interest in medicine. His mentorship truly shaped my career.",
    },
    {
      name: "Priya Malhotra",
      role: "Current Student",
      text: "His classes are engaging, interactive, and I always learn something new! The way he uses technology and traditional teaching methods together makes complex subjects easy to understand. Every class is something to look forward to.",
    },
  ];

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={18} /> },
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "philosophy", label: "Philosophy", icon: <BookOpenIcon size={18} /> },
    { id: "achievements", label: "Achievements", icon: <Award size={18} /> },
    {
      id: "testimonials",
      label: "Testimonials",
      icon: <MessageCircle size={18} />,
    },
    { id: "podcasts", label: "Media", icon: <Mic size={18} /> },
    // { id: "publications", label: "Publications", icon: <FileText size={18} /> },
    { id: "contact", label: "Contact", icon: <Phone size={18} /> },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <main className="bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800 min-h-screen w-full relative">
      {/* Fixed Navigation Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">AN</span>
              <span className="ml-2 hidden md:block text-lg font-medium text-slate-700">
                Aviral Namdeo
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center px-2 py-1 text-sm font-medium rounded transition-colors ${activeSection === item.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-600 hover:text-blue-500 hover:bg-slate-100"
                    }`}
                >
                  <span className="mr-1">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} className="text-slate-800" />
              ) : (
                <Menu size={24} className="text-slate-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center w-full px-3 py-2 rounded text-left ${activeSection === item.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-100 hover:text-blue-500"
                    }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Blue gradient with orange accents for A1 Academy branding */}
      <section
        id="home"
        className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 text-white pt-28 pb-20 px-4 md:px-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Aviral Namdeo
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-blue-100">
                Teacher • Mentor • Educationist
              </p>
              <p className="mt-4 text-lg text-slate-100">
                For over 26 years, I've helped students not just score better—but think deeper, explore fearlessly, and fall in love with learning.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                <Button
                  className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-2 rounded-full cursor-pointer font-medium shadow-lg"
                  onClick={() => scrollToSection("about")}
                >
                  Know My Method
                </Button>
                <a
                  href="https://www.linkedin.com/in/aviral-namdeo-b0ab6b7a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-600 cursor-pointer px-6 py-2 rounded-full font-medium transition-all inline-block"
                >
                  Connect on LinkedIn
                </a>
              </div>
              <p className="mt-8 text-sm md:text-base text-blue-100 italic">
                Founder, A1 Academy & Lively Lessons | Batch Topper – Education Leadership Program, IIM Kolkata | ECIS Certified | PhD Candidate
              </p>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-orange-400/30 shadow-2xl">
                <img
                  src="/aviral_about1.png"
                  alt="Aviral Namdeo"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto py-24 px-4 md:px-20">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl font-bold text-blue-600 mb-4 flex items-center gap-2">
              <Sparkles className="text-orange-500" /> My Method
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Learning should never feel heavy. Over the years, I've built a framework that helps students learn smarter, retain longer, and perform with confidence — whether in a classroom or online.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              This method has guided thousands of CBSE students to perform better and rediscover joy in learning.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-y-3 gap-x-2">
              <li className="flex items-center text-slate-700">
                <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                Understand
              </li>
              <li className="flex items-center text-slate-700">
                <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                Simplify
              </li>
              <li className="flex items-center text-slate-700">
                <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                Strengthen
              </li>
              <li className="flex items-center text-slate-700">
                <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                Student-centered approach
              </li>
              <li className="flex items-center text-slate-700">
                <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                Spaced revision
              </li>
              <li className="flex items-center text-slate-700">
                <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                Retrieval practice
              </li>
            </ul>
          </div>
          <img
            src="/teaching1.JPG"
            alt="Aviral Teaching"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="bg-blue-50/30 py-24 px-4 md:px-20">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/teaching2.JPG"
            alt="Education Philosophy"
            className="rounded-2xl shadow-xl"
          />
          <div>
            <h2 className="text-4xl font-bold text-blue-600 mb-4 flex items-center gap-2">
              <BookOpen className="text-orange-500" /> Education isn't about marks — it's about meaning.
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Every learner deserves teaching that respects their pace, curiosity, and individuality. The best classrooms aren't silent — they're alive with curiosity, laughter, mistakes, and discovery.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              That's the philosophy behind both A1 Academy and Lively Lessons — where learning connects with life.
            </p>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-600">
                  Understand
                </h3>
                <p className="text-slate-600">
                  Every learner has a different rhythm. Before I teach, I study how a student learns — visual, auditory, reading/writing, or kinesthetic — so the method fits the mind, not the other way around.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-600">
                  Simplify
                </h3>
                <p className="text-slate-600">
                  Complex topics are broken into relatable stories, visual connections, and micro-concepts. When students see why something works, they stop memorizing and start understanding.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-600">
                  Strengthen
                </h3>
                <p className="text-slate-600">
                  Learning lasts only when it's reinforced. I use spaced revision, retrieval practice, and timed challenges — not to create pressure, but to make progress consistent.
                </p>
              </div>
            </div>
            <blockquote className="italic text-orange-600 border-l-4 border-orange-500 pl-4">
              "Teaching minds is easy. Touching hearts takes intent."
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* YouTube Video Section */}
      <section className="max-w-6xl mx-auto py-24 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4 flex items-center justify-center gap-2">
            <Video className="text-orange-500" /> Watch Aviral Sir in Action
          </h2>
          {/* <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Get to know my teaching philosophy and approach through this recent
            talk on "Reimagining Education for the 21st Century"
          </p> */}
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="w-full shadow-2xl rounded-xl overflow-hidden bg-slate-900 border border-slate-100">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videos[currentVideoIndex].src}
                title={videos[currentVideoIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="p-4 bg-white mt-4 rounded-xl shadow-sm text-center max-w-2xl mx-auto border border-slate-100">
            <h3 className="font-semibold text-slate-800 text-lg">
              {videos[currentVideoIndex].title}
            </h3>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentVideoIndex((prev) => prev === 0 ? videos.length - 1 : prev - 1)}
            className="absolute top-[40%] md:top-1/2 -left-4 md:-left-16 -translate-y-1/2 p-3 bg-white/90 shadow-lg rounded-full hover:bg-white transition-all z-10 text-blue-600 hover:text-orange-500 hover:scale-110"
            aria-label="Previous Video"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={() => setCurrentVideoIndex((prev) => (prev + 1) % videos.length)}
            className="absolute top-[40%] md:top-1/2 -right-4 md:-right-16 -translate-y-1/2 p-3 bg-white/90 shadow-lg rounded-full hover:bg-white transition-all z-10 text-blue-600 hover:text-orange-500 hover:scale-110"
            aria-label="Next Video"
          >
            <ChevronRight size={32} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideoIndex(index)}
                className={`h-3 rounded-full transition-all ${index === currentVideoIndex
                  ? "w-8 bg-orange-500"
                  : "w-3 bg-slate-300 hover:bg-slate-400"
                  }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="bg-gradient-to-br from-blue-50 to-slate-50 py-24 px-4 md:px-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center flex items-center justify-center gap-2">
            <Award className="text-orange-500" /> Achievements & Milestones
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-8 shadow-md border-t-4 border-orange-500 hover:shadow-lg hover:shadow-orange-200 transition-all">
              <CardContent>
                <School className="mx-auto text-orange-500 mb-4" size={40} />
                <h3 className="text-xl font-semibold text-slate-800">
                  26+ Years Experience
                </h3>
                <p className="text-slate-600 mt-2">
                  Taught thousands of students since 1999
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 shadow-md border-t-4 border-orange-500 hover:shadow-lg hover:shadow-orange-200 transition-all">
              <CardContent>
                <School className="mx-auto text-orange-500 mb-4" size={40} />
                <h3 className="text-xl font-semibold text-slate-800">
                  A1 Academy
                </h3>
                <p className="text-slate-600 mt-2">
                  Founder ( 2013 - Present)
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 shadow-md border-t-4 border-orange-500 hover:shadow-lg hover:shadow-orange-200 transition-all">
              <CardContent>
                <Video className="mx-auto text-orange-500 mb-4" size={40} />
                <h3 className="text-xl font-semibold text-slate-800">
                  Lively Lessons
                </h3>
                <p className="text-slate-600 mt-2">
                  Online CBSE learning platform
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 shadow-md border-t-4 border-orange-500 hover:shadow-lg hover:shadow-orange-200 transition-all">
              <CardContent>
                <CalendarCheck
                  className="mx-auto text-orange-500 mb-4"
                  size={40}
                />
                <h3 className="text-xl font-semibold text-slate-800">
                  IIM Kolkata
                </h3>
                <p className="text-slate-600 mt-2">
                  Batch Topper – Education Leadership Program
                </p>
              </CardContent>
            </Card>

          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">
              Credentials & Recognition
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md hover:shadow-blue-100 transition-shadow">
                <div className="mt-1 text-orange-500">
                  <BookMarked size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    PhD Candidate
                  </h4>
                  <p className="text-slate-600">
                    Rushford Business School, Switzerland
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md hover:shadow-blue-100 transition-shadow">
                <div className="mt-1 text-orange-500">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    ECIS Certified
                  </h4>
                  <p className="text-slate-600">
                    Leader and Coach
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md hover:shadow-blue-100 transition-shadow">
                <div className="mt-1 text-orange-500">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    Published Research Paper
                  </h4>
                  <p className="text-slate-600">
                    on underperformance of students and ways to improve them
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md hover:shadow-blue-100 transition-shadow">
                <div className="mt-1 text-orange-500">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    Army Public School Kampti
                  </h4>
                  <p className="text-slate-600">
                    Trained students on how to study effectively and teachers on student engagement and class management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="bg-white py-24 px-4 md:px-20 relative"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center flex items-center justify-center gap-2">
            <Users className="text-orange-500" /> Student & Parent Testimonials
          </h2>

          <button
            onClick={scrollPrev}
            className="absolute top-[56%] left-4 md:left-10 -translate-y-1/2 p-3 bg-white shadow-md rounded-full hover:bg-blue-50 z-10"
          >
            <ChevronLeft className="text-blue-600" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-[56%] right-4 md:right-10 -translate-y-1/2 p-3 bg-white shadow-md rounded-full hover:bg-blue-50 z-10"
          >
            <ChevronRight className="text-blue-600" />
          </button>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 scroll-smooth py-4 px-2 no-scrollbar"
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="w-[calc(100vw-4rem)] max-w-[480px] sm:min-w-[350px] md:min-w-[400px] flex-shrink-0"
              >
                <Card className="bg-gradient-to-b from-blue-50 to-slate-50 shadow-lg p-6 h-full rounded-2xl border-l-4 border-orange-500">
                  <CardContent className="p-2">
                    <Quote className="text-orange-500 mb-2" size={28} />
                    <p className="text-slate-700 mb-6 italic">"{t.text}"</p>
                    <div className="flex items-center">
                      <div className="bg-orange-500 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {t.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-slate-800">{t.name}</p>
                        <p className="text-sm text-blue-600">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts & Media Section */}
      <section id="podcasts" className="max-w-6xl mx-auto py-24 px-4 md:px-20">
        {/* <h2 className="text-4xl font-bold text-blue-600 mb-12 flex items-center gap-2">
          <Mic className="text-orange-500" /> Media & Featured Content
        </h2> */}

        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">
            Featured Podcasts
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Education",
                description:
                  "Discussing how education is evolving in the digital age and what students need to thrive in tomorrow's world.",
                duration: "45 minutes",
                date: "March 15, 2025",
                link: "#",
              },
              {
                title: "Nurturing Curiosity",
                description:
                  "Why asking the right questions is more important than knowing the right answers in today's information-rich world.",
                duration: "38 minutes",
                date: "February 22, 2025",
                link: "#",
              },
              {
                title: "Emotional Intelligence in Classrooms",
                description:
                  "How to build emotionally intelligent students and create a safe learning environment that promotes growth.",
                duration: "52 minutes",
                date: "January 10, 2025",
                link: "#",
              },
            ].map((podcast, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-md rounded-2xl hover:shadow-lg hover:shadow-blue-200 transition-shadow"
              >
                <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-600 p-6 flex items-center justify-center text-white">
                  <Mic size={64} />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <Clock size={14} />
                    <span>{podcast.duration}</span>
                    <span className="mx-1">•</span>
                    <span>{podcast.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {podcast.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{podcast.description}</p>
                  <Button
                    variant="outline"
                    className="w-full text-orange-600 border-orange-400 hover:bg-orange-50 hover:border-orange-500 transition-colors"
                    asChild
                  >
                    <a href={podcast.link} target="_blank">
                      Listen Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8">
            Media Appearances
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md hover:shadow-blue-100 transition-shadow">
              <div className="mt-1 text-orange-500 flex-shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">
                  Education Today Conference
                </h4>
                <p className="text-sm text-slate-500 mb-2">
                  Keynote Speaker, December 2024
                </p>
                <p className="text-slate-600">
                  Delivered keynote address on "Preparing Students for an
                  AI-Driven Future" at the annual educational leadership
                  conference
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md hover:shadow-blue-100 transition-shadow">
              <div className="mt-1 text-orange-500 flex-shrink-0">
                <Video size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">
                  TEDx Talk: "Unlearning to Learn"
                </h4>
                <p className="text-sm text-slate-500 mb-2">
                  Featured Speaker, October 2024
                </p>
                <p className="text-slate-600">
                  Explored how discarding outdated educational practices can
                  open new paths for effective learning
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md hover:shadow-blue-100 transition-shadow">
              <div className="mt-1 text-orange-500 flex-shrink-0">
                <Mic size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">
                  Education Reimagined Podcast
                </h4>
                <p className="text-sm text-slate-500 mb-2">
                  Guest Expert, September 2024
                </p>
                <p className="text-slate-600">
                  Discussed innovative assessment methods beyond traditional
                  examinations
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-md hover:shadow-blue-100 transition-shadow">
              <div className="mt-1 text-orange-500 flex-shrink-0">
                <BookOpen size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">
                  National Education Magazine
                </h4>
                <p className="text-sm text-slate-500 mb-2">
                  Featured Educator, August 2024
                </p>
                <p className="text-slate-600">
                  Cover story on transformative teaching methodologies for the
                  digital generation
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* Publications Section */}
      {/* <section id="publications" className="bg-slate-50 py-24 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-12 flex items-center gap-2">
            <FileText className="text-orange-500" /> Publications & Research
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              {
                title: "Modern Approaches to Science Education",
                type: "Book",
                year: "2024",
                publisher: "Education Press",
                description:
                  "A comprehensive guide for educators on integrating technology with traditional science teaching methods",
                image: "/images/book1.jpg",
              },
              {
                title: "Emotional Intelligence: The Missing Curriculum",
                type: "Research Paper",
                year: "2023",
                publisher: "Journal of Educational Psychology",
                description:
                  "Research study on the impact of emotional intelligence training on academic performance",
                image: "/images/research1.jpg",
              },
              {
                title: "Digital Literacy for Teachers",
                type: "Book",
                year: "2022",
                publisher: "Tech Education Publications",
                description:
                  "Practical handbook for educators to enhance their digital skills for classroom instruction",
                image: "/images/book2.jpg",
              },
              {
                title: "Bridging Theory and Practice in STEM Education",
                type: "Research Paper",
                year: "2021",
                publisher: "International Journal of STEM Education",
                description:
                  "Case studies of successful implementations of theory-to-practice approaches in science and mathematics",
                image: "/images/research2.jpg",
              },
            ].map((publication, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-36 h-48 bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-b from-blue-500 to-blue-600 flex items-center justify-center p-4 text-white">
                    {publication.type === "Book" ? (
                      <BookOpen size={48} />
                    ) : (
                      <FileText size={48} />
                    )}
                  </div>
                </div>
                <div className="flex-grow">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-orange-100 text-orange-700 inline-block mb-2">
                    {publication.type} • {publication.year}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {publication.title}
                  </h3>
                  <p className="text-sm text-orange-600 mb-1">
                    {publication.publisher}
                  </p>
                  <p className="text-slate-600">{publication.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Photo Gallery Section */}
      <section id="gallery" className="bg-gradient-to-br from-slate-50 to-blue-50 py-24 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-4 text-center flex items-center justify-center gap-2">
            <Video className="text-orange-500" /> Gallery
          </h2>
          <p className="text-lg text-slate-700 mb-12 text-center max-w-2xl mx-auto">
            Glimpses of my journey in education, mentorship, and beyond.
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Main Image Display */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentGalleryIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                  {/* Blurred Background Layer for "Fill" effect */}
                  <div
                    className="absolute inset-0 bg-cover bg-center blur-xl scale-110 brightness-50"
                    style={{ backgroundImage: `url(${image.src})` }}
                  />

                  {/* Main Image Layer (Contained) */}
                  <img
                    src={image.src}
                    alt={image.title}
                    className="relative w-full h-full object-contain z-10"
                  />

                  {/* Overlay with title and description */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 z-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-lg text-white/90">
                      {image.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentGalleryIndex((prev) => prev === 0 ? galleryImages.length - 1 : prev - 1)}
              className="absolute top-1/2 left-4 -translate-y-1/2 p-3 bg-white/90 shadow-lg rounded-full hover:bg-white transition-all z-10"
            >
              <ChevronLeft className="text-blue-600" size={28} />
            </button>
            <button
              onClick={() => setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length)}
              className="absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-white/90 shadow-lg rounded-full hover:bg-white transition-all z-10"
            >
              <ChevronRight className="text-blue-600" size={28} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-6 flex-wrap px-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`h-3 rounded-full transition-all ${index === currentGalleryIndex
                    ? "w-8 bg-orange-500"
                    : "w-3 bg-slate-300 hover:bg-slate-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-b from-blue-50 to-white py-24 px-4 md:px-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-4 text-center flex justify-center items-center gap-2">
            <Mail className="text-orange-500" /> Get In Touch
          </h2>
          <p className="text-lg text-slate-700 mb-12 text-center max-w-2xl mx-auto">
            If you believe learning should feel alive—let's connect.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Message
                  </label>
                  <Input
                    id="message"
                    placeholder="Your message"
                    className="w-full"
                    rows={5}
                  />
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors w-full shadow-md">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-orange-100 p-2 rounded-full text-orange-600">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700">Email</h4>
                      <p className="text-orange-600">connect@aviralnamdeo.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">

                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-orange-100 p-2 rounded-full text-orange-600">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700">Location</h4>
                      <p className="text-orange-600">Based in Jabalpur, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-orange-100 p-2 rounded-full text-orange-600">
                      <School size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700">Founder</h4>
                      <p className="text-orange-600">A1 Academy | Lively Lessons</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Guest Lectures:</span>
                    <span className="text-orange-600 font-medium">Limited availability</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Workshops:</span>
                    <span className="text-orange-600 font-medium">Now booking for 2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Consulting:</span>
                    <span className="text-orange-600 font-medium">Available online</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">Media Interviews:</span>
                    <span className="text-orange-600 font-medium">Case by case basis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="bg-blue-600 text-white py-16 px-4 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join My Educational Newsletter
          </h2>
          <p className="text-blue-100 mb-8">
            Stay updated with the latest educational insights, teaching
            resources, and upcoming events.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              placeholder="Your Email Address"
              className="bg-transparent w-full text-white placeholder-white border border-white rounded-md pl-4"
            />

            <Button className="bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-md">
              Subscribe
            </Button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">
                Aviral Namdeo
              </h3>
              <p className="text-gray-400 mb-4">
                If you believe learning should feel alive—let's connect.
              </p>
              <p className="text-gray-400 text-sm italic">
                "Teaching minds is easy. Touching hearts takes intent."
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a
                  href="#"
                  className="bg-slate-700 hover:bg-orange-500 transition-colors p-2 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-slate-700 hover:bg-orange-500 transition-colors p-2 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/aviral-namdeo-b0ab6b7a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-orange-500 transition-colors p-2 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-slate-700 hover:bg-orange-500 transition-colors p-2 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Aviral Namdeo.
                <br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-40"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </main>
  );
}
