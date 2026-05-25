'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import {
  ProfileCardCarousel,
  type TeamMember,
} from '@/components/ui/profile-card-testimonial-carousel';

const teamStatic = [
  {
    name: 'Ahmed Ezzeldien',
    imageUrl: '/our-team/ezz.png',
    linkedinUrl: 'https://www.linkedin.com/in/ahmeezzel-deen/',
  },
  {
    name: 'Belal Nagy',
    imageUrl: '/our-team/belalnagy.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/belalnajy/',
    githubUrl: 'https://github.com/belalnajy',
  },
  {
    name: 'Ahmed Lebda',
    imageUrl: '/our-team/lebda.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/ahmed-lebda/',
    githubUrl: 'https://github.com/AhmedLebda',
  },
  {
    name: 'Ahmed Mohamed',
    imageUrl: '/our-team/marhba.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/ahmed-mohamed-el-said/',
    githubUrl: 'https://github.com/AhmedMoh96',
  },
  {
    name: 'Ehab',
    imageUrl: '/our-team/ehab.jpg',
  },
];

const Team = () => {
  const { t } = useLanguage();

  const team: TeamMember[] = teamStatic.map((member, i) => ({
    ...member,
    title: t.team.members[i].title,
    description: t.team.members[i].description,
  }));

  return (
    <section
      id="team"
      className="relative bg-neutral-950 text-white py-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-section text-gradient-light">
            {t.team.title}{' '}
            <span className="text-gradient-primary">{t.team.subtitle}</span>
          </h2>
          <p className="mt-5 text-lg text-neutral-400 max-w-2xl mx-auto">
            {t.team.desc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ProfileCardCarousel members={team} variant="dark" />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
