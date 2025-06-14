import { ArrowRight, CheckCircle, Users, FileText, MessageCircle, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import React, { useState } from 'react';

const Index = () => {
  const skills = [
    "রিকোয়ারমেন্ট সংগ্রহ",
    "ব্যবসায়িক বিশ্লেষণ",
    "স্টেকহোল্ডার ব্যবস্থাপনা",
    "প্রক্রিয়া মডেলিং",
    "ডকুমেন্টেশন",
    "ইউজার স্টোরি লেখা",
    "গ্যাপ বিশ্লেষণ",
    "সিস্টেম ডিজাইন",
    "অ্যাজাইল পদ্ধতি",
    "ঝুঁকি মূল্যায়ন"
  ];

  const services = [
    {
      icon: FileText,
      title: "রিকোয়ারমেন্ট ডকুমেন্টেশন",
      description: "স্পষ্ট স্পেসিফিকেশন সহ ফাংশনাল এবং নন-ফাংশনাল রিকোয়ারমেন্টের বিস্তৃত ডকুমেন্টেশন।"
    },
    {
      icon: Users,
      title: "স্টেকহোল্ডার বিশ্লেষণ",
      description: "প্রকল্পের সারিবদ্ধতা এবং সফল ফলাফল নিশ্চিত করতে মূল স্টেকহোল্ডারদের চিহ্নিতকরণ এবং সম্পৃক্তকরণ।"
    },
    {
      icon: CheckCircle,
      title: "প্রক্রিয়া অপ্টিমাইজেশন",
      description: "বর্ধিত দক্ষতা এবং কার্যকারিতার জন্য বিদ্যমান প্রক্রিয়া বিশ্লেষণ এবং উন্নতির সুপারিশ।"
    },
    {
      icon: MessageCircle,
      title: "রিকোয়ারমেন্ট যাচাইকরণ",
      description: "নিয়মতান্ত্রিক যাচাইকরণ প্রক্রিয়ার মাধ্যমে রিকোয়ারমেন্ট সম্পূর্ণ, সামঞ্জস্যপূর্ণ এবং পরীক্ষাযোগ্য তা নিশ্চিত করা।"
    }
  ];

  // Slider images and captions
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      title: "রিকোয়ারমেন্ট অ্যানালিস্ট",
      subtitle: "ও ব্যবসায়িক কৌশলবিদ",
      description: "জটিল ব্যবসায়িক প্রয়োজনীয়তাকে স্পষ্ট, কার্যকর রিকোয়ারমেন্টে রূপান্তর করি। আমি স্টেকহোল্ডার এবং ডেভেলপমেন্ট টিমের মধ্যে সেতুবন্ধন হিসেবে কাজ করে সফল প্রকল্প সরবরাহ করি।"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      title: "স্ট্র্যাটেজিক বিজনেস অ্যানালাইসিস",
      subtitle: "আপনার ব্যবসার জন্য",
      description: "আপনার ব্যবসার চাহিদা বুঝে কার্যকর সমাধান প্রদান করি, যা আপনাকে প্রতিযোগিতায় এগিয়ে রাখে।"
    },
    {
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      title: "ডিজিটাল ট্রান্সফরমেশন",
      subtitle: "স্মার্ট প্রসেস ডিজাইন",
      description: "প্রযুক্তি ও ব্যবসায়িক লক্ষ্য একত্রিত করে, উন্নত প্রক্রিয়া ডিজাইন ও অপ্টিমাইজেশন নিশ্চিত করি।"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-emerald-700">মুহাম্মাদ মাহফুজ খলিফা</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-emerald-700 transition-colors">আমার সম্পর্কে</a>
              <a href="#skills" className="text-gray-700 hover:text-emerald-700 transition-colors">দক্ষতা</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-700 transition-colors">সেবা</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-700 transition-colors">যোগাযোগ</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Image Slider */}
      <section className="pt-24 pb-16 px-0 relative">
        <div className="relative w-full rounded-none overflow-hidden shadow-lg">
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-96 object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow">
              {heroSlides[currentSlide].title}
              <span className="block text-emerald-300">{heroSlides[currentSlide].subtitle}</span>
            </h1>
            <p className="text-lg text-emerald-50 mb-6">{heroSlides[currentSlide].description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3">
                আমার কাজ দেখুন <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 border-emerald-100 text-emerald-100 hover:bg-emerald-900">
                যোগাযোগ করুন
              </Button>
            </div>
          </div>
          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition"
            aria-label="Previous Slide"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition"
            aria-label="Next Slide"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${idx === currentSlide ? 'bg-emerald-400' : 'bg-white/50'} border border-white`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">আমার সম্পর্কে</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  রিকোয়ারমেন্ট বিশ্লেষণ এবং ব্যবসায়িক প্রক্রিয়া অপ্টিমাইজেশনে ৮ বছরের অভিজ্ঞতা নিয়ে, 
                  আমি জটিল ব্যবসায়িক প্রয়োজনীয়তাকে স্পষ্ট, কার্যকর স্পেসিফিকেশনে রূপান্তর করতে বিশেষজ্ঞ 
                  যা সফল প্রকল্পের ফলাফল নিশ্চিত করে।
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  আমার দক্ষতা স্বাস্থ্যসেবা, অর্থ এবং প্রযুক্তি সহ বিভিন্ন শিল্পে বিস্তৃত। 
                  আমি স্টেকহোল্ডার সহযোগিতা এবং প্রতিটি প্রকল্প ব্যবসায়ের জন্য সর্বোচ্চ মূল্য প্রদান 
                  নিশ্চিত করতে আগ্রহী।
                </p>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">সার্টিফাইড বিজনেস অ্যানালাইসিস প্রফেশনাল (CBAP)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">অ্যাজাইল অ্যানালাইসিস সার্টিফিকেশন (AAC)</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">মূল অর্জনসমূহ</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">৫০+</span>
                    </div>
                    <span>সফল প্রকল্প সম্পন্ন</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">৯৫%</span>
                    </div>
                    <span>ক্লায়েন্ট সন্তুষ্টির হার</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">৩০%</span>
                    </div>
                    <span>গড় খরচ হ্রাস অর্জিত</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">মূল দক্ষতা</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105 transform"
                >
                  <span className="text-gray-700 font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">সেবাসমূহ</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                        <service.icon className="h-6 w-6 text-emerald-700" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 ml-4">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-emerald-700 to-green-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">আসুন একসাথে কাজ করি</h2>
            <p className="text-xl text-emerald-100 mb-12">
              আপনার ব্যবসায়িক রিকোয়ারমেন্টকে সফল ফলাফলে রূপান্তর করতে প্রস্তুত? 
              আপনার পরবর্তী প্রকল্পে আমি কীভাবে সাহায্য করতে পারি তা নিয়ে আলোচনা করি।
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">ইমেইল</h3>
                <p className="text-emerald-100">mahfuz.khalifa@email.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">ফোন</h3>
                <p className="text-emerald-100">+৮৮০ ১৭১২ ৩৪৫৬৭৮</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">অবস্থান</h3>
                <p className="text-emerald-100">ঢাকা, বাংলাদেশ</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <Button variant="secondary" size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                <Linkedin className="mr-2 h-5 w-5" />
                লিংকডইন
              </Button>
              <Button variant="secondary" size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                <Github className="mr-2 h-5 w-5" />
                পোর্টফোলিও
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © ২০২৪ মুহাম্মাদ মাহফুজ খলিফা। সকল অধিকার সংরক্ষিত। | রিকোয়ারমেন্ট অ্যানালিস্ট ও ব্যবসায়িক কৌশলবিদ
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
