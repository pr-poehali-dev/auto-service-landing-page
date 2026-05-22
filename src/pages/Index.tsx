import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactModal from "@/components/ContactModal";
import HomeTopBar from "@/components/home/HomeTopBar";
import HomeHero from "@/components/home/HomeHero";
import HomeContent from "@/components/home/HomeContent";
import { TIRE_SLIDES } from "@/components/home/homeData";

export default function Index() {
  const [activeService, setActiveService] = useState(0);
  const [time, setTime] = useState(new Date());
  const [contactOpen, setContactOpen] = useState(false);
  const [tireSlide, setTireSlide] = useState(0);
  const [tireFade, setTireFade] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTireFade(false);
      setTimeout(() => {
        setTireSlide((prev) => (prev + 1) % TIRE_SLIDES.length);
        setTireFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      <HomeTopBar
        activeService={activeService}
        time={time}
        onServiceHover={setActiveService}
        onServiceClick={(path) => navigate(path)}
      />

      <HomeHero
        activeService={activeService}
        tireSlide={tireSlide}
        tireFade={tireFade}
        onContactOpen={() => setContactOpen(true)}
        onNavigate={(path) => navigate(path)}
        onSetActiveService={setActiveService}
        onSetTireSlide={setTireSlide}
        onSetTireFade={setTireFade}
      />

      <HomeContent
        activeService={activeService}
        onServiceHover={setActiveService}
        onServiceClick={(path) => navigate(path)}
        onContactOpen={() => setContactOpen(true)}
        onNavigate={(path) => navigate(path)}
      />
    </div>
  );
}
