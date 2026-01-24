import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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

interface GalleryPageProps {
  onBack: () => void;
}

export function GalleryPage({ onBack }: GalleryPageProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="inline-flex items-center text-[#2596be] hover:text-[#1a7a9e] transition-colors font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Speaking Engagements & Events
          </h1>
          <div className="w-20 h-1 bg-[#2596be] mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-[#6C757D] max-w-2xl mx-auto">
            A collection of moments from international conferences, workshops, and panel discussions
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="break-inside-avoid"
            >
              <div
                onClick={() => setSelectedPhoto(photo)}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-medium text-sm leading-tight">
                        {photo.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              {/* Image */}
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {/* Title */}
              <div className="mt-4 text-center">
                <h3 className="text-white text-lg font-medium">
                  {selectedPhoto.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
