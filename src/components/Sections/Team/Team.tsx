'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Linkedin, Twitter, Github } from 'lucide-react';

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Michael Ross',
    role: 'Lead Developer',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Elena Rodriguez',
    role: 'UX Director',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
  },
];

const Team = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            {t.team.title}{' '}
            <span className="text-primary">{t.team.subtitle}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.team.desc}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100">
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-primary font-medium text-sm uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
