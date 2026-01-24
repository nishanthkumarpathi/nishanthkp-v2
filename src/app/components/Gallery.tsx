import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

// Import all 33 photos
import photo1 from '../../assets/1 Arab International Cyber Security Summit.jpg';
import photo2 from '../../assets/2 Digital Executive Development Program - BBK.jpg';
import photo3 from '../../assets/3 AI and ChatGPT Session.jpg';
import photo4 from '../../assets/4 Project Management and Team Building Activity - HSBC.jpg';
import photo5 from '../../assets/5 NASSCOM Delegation Visit.jpg';
import photo6 from '../../assets/6 ChatGPT Integration Workshop.jpg';
import photo7 from '../../assets/7 Personal Data Protection Workshop - Gramco.jpg';
import photo8 from '../../assets/8 ISACA Volunteer Group Photo.jpg';
import photo9 from '../../assets/9 Food Distribution as an ISACA Volunteer.jpg';
import photo10 from '../../assets/10 Food Distribution as an ISACA Volunteer for Ramadan.jpg';
import photo11 from '../../assets/11 ISACA Ghabga Event - Kahoot Quiz Winner.jpg';
import photo12 from '../../assets/12 Vulnerability and Penetration Testing Workshop.jpg';
import photo13 from '../../assets/13 AWS Technical Essentials Training.jpg';
import photo14 from '../../assets/14 AWS Solutions Architect Workshop for IGA.jpg';
import photo15 from '../../assets/15 Data Analysis with Python Workhshop.jpg';
import photo16 from '../../assets/16 Lessons Learnt from Bahrain FinTech Eco System.jpg';
import photo17 from '../../assets/17 Data Engineering Workshop on AWS Cloud.jpg';
import photo18 from '../../assets/18 AI & Robotic Process Automation Workshop.jpg';
import photo19 from '../../assets/19 IGA Graudates AWS CP Workshop.jpg';
import photo20 from '../../assets/20 Certified Ethical Hacker Program.jpg';
import photo21 from '../../assets/21 AWS Certified Cloud Practitioner Workshop.jpg';
import photo22 from '../../assets/22 Arab International Cyber Security Summit 2023.jpg';
import photo23 from '../../assets/23 Software Development with Springboot.jpg';
import photo24 from '../../assets/24 ITILv4.jpg';
import photo25 from '../../assets/25 Python Automation for Software Testing.jpg';
import photo26 from '../../assets/26 AWS DevOps Professional.jpg';
import photo27 from '../../assets/27 ISACA Cloud Auditing Forum 2024.jpg';
import photo28 from '../../assets/28 CyberX Bahrain Cyber Security Excellence Award 2024.jpg';
import photo29 from '../../assets/29 Cloud Security Tends at CyberX Summit.png';
import photo30 from '../../assets/30 AI in Action for Eskan Bank.jpg';
import photo31 from '../../assets/31 Cyber Security Awareness Session for Pilots - Gulf Air Group 2025.jpg';
import photo32 from '../../assets/32 On Job Training Program for Nasser Center for Science & Technology - Gulf Air Group 2025.jpg';
import photo33 from '../../assets/33 Data Privacy Training Program in Parternship with BIBF & IAPP.jpg';

interface Photo {
  id: string;
  src: string;
  title: string;
}

// All 33 photos with titles from filenames
const photos: Photo[] = [
  { id: '1', src: photo1, title: 'Arab International Cyber Security Summit' },
  { id: '2', src: photo2, title: 'Digital Executive Development Program - BBK' },
  { id: '3', src: photo3, title: 'AI and ChatGPT Session' },
  { id: '4', src: photo4, title: 'Project Management and Team Building Activity - HSBC' },
  { id: '5', src: photo5, title: 'NASSCOM Delegation Visit' },
  { id: '6', src: photo6, title: 'ChatGPT Integration Workshop' },
  { id: '7', src: photo7, title: 'Personal Data Protection Workshop - Gramco' },
  { id: '8', src: photo8, title: 'ISACA Volunteer Group Photo' },
  { id: '9', src: photo9, title: 'Food Distribution as an ISACA Volunteer' },
  { id: '10', src: photo10, title: 'Food Distribution as an ISACA Volunteer for Ramadan' },
  { id: '11', src: photo11, title: 'ISACA Ghabga Event - Kahoot Quiz Winner' },
  { id: '12', src: photo12, title: 'Vulnerability and Penetration Testing Workshop' },
  { id: '13', src: photo13, title: 'AWS Technical Essentials Training' },
  { id: '14', src: photo14, title: 'AWS Solutions Architect Workshop for IGA' },
  { id: '15', src: photo15, title: 'Data Analysis with Python Workshop' },
  { id: '16', src: photo16, title: 'Lessons Learnt from Bahrain FinTech Eco System' },
  { id: '17', src: photo17, title: 'Data Engineering Workshop on AWS Cloud' },
  { id: '18', src: photo18, title: 'AI & Robotic Process Automation Workshop' },
  { id: '19', src: photo19, title: 'IGA Graduates AWS CP Workshop' },
  { id: '20', src: photo20, title: 'Certified Ethical Hacker Program' },
  { id: '21', src: photo21, title: 'AWS Certified Cloud Practitioner Workshop' },
  { id: '22', src: photo22, title: 'Arab International Cyber Security Summit 2023' },
  { id: '23', src: photo23, title: 'Software Development with Springboot' },
  { id: '24', src: photo24, title: 'ITILv4' },
  { id: '25', src: photo25, title: 'Python Automation for Software Testing' },
  { id: '26', src: photo26, title: 'AWS DevOps Professional' },
  { id: '27', src: photo27, title: 'ISACA Cloud Auditing Forum 2024' },
  { id: '28', src: photo28, title: 'CyberX Bahrain Cyber Security Excellence Award 2024' },
  { id: '29', src: photo29, title: 'Cloud Security Trends at CyberX Summit' },
  { id: '30', src: photo30, title: 'AI in Action for Eskan Bank' },
  { id: '31', src: photo31, title: 'Cyber Security Awareness Session for Pilots - Gulf Air Group 2025' },
  { id: '32', src: photo32, title: 'On Job Training Program for Nasser Center for Science & Technology - Gulf Air Group 2025' },
  { id: '33', src: photo33, title: 'Data Privacy Training Program in Partnership with BIBF & IAPP' },
];

interface GalleryProps {
  onViewFullGallery?: () => void;
}

export function Gallery({ onViewFullGallery }: GalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-6">Speaking Engagements & Events</h2>
          <div className="w-24 h-1 bg-[#2596be] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto font-light">
            Sharing insights and expertise at international conferences, workshops, and panel discussions
          </p>
        </motion.div>

        {/* Carousel Container with Navigation */}
        <div className="relative px-8 sm:px-12 md:px-16 lg:px-20">
          {/* Left Navigation Button */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white hover:bg-gray-50 rounded-full shadow-lg border-2 border-gray-300 transition-all hover:border-[#2596be]"
            aria-label="Previous event"
          >
            <ChevronLeft size={28} className="text-gray-800" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white hover:bg-gray-50 rounded-full shadow-lg border-2 border-gray-300 transition-all hover:border-[#2596be]"
            aria-label="Next event"
          >
            <ChevronRight size={28} className="text-gray-800" />
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 md:gap-8">
              {photos.map((photo, index) => (
                <div key={photo.id} className="flex-[0_0_100%] md:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.333%-22px)] min-w-0">
                  <PhotoCard photo={photo} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View Full Gallery Link */}
        {onViewFullGallery && (
          <div className="text-center mt-10 sm:mt-12">
            <button
              onClick={onViewFullGallery}
              className="inline-flex items-center text-[#2596be] hover:text-[#1a7a9e] transition-colors"
            >
              <ExternalLink size={16} className="mr-1" />
              View Full Gallery Here
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function PhotoCard({ photo, index }: { photo: Photo; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      {/* Photo */}
      <div className="relative h-48 sm:h-56 md:h-64 bg-gray-100">
        <img
          src={photo.src}
          alt={photo.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-base font-semibold text-gray-900 leading-tight">{photo.title}</h3>
      </div>
    </motion.div>
  );
}
