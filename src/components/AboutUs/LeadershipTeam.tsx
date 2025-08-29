import React from 'react';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';

type Member = {
  name: string;
  role: string;
  img: string;
};

const members: Member[] = [
  { name: 'Ethel Muza', role: 'Digital Marketer', img: '/images/team/Ethel Muza.jpg' },
  { name: 'Brian Makwindi', role: 'Founder', img: '/images/team/Brian Makwindi.jpg' },
  { name: 'Panashe Bwanali', role: 'Graphic Designer', img: '/images/team/Panashe Bwanali.jpg' },
  { name: 'Brilliant Muchima', role: 'Illustrator', img: '/images/team/Brilliant Muchima.jpeg' },
  { name: 'Portia Karisa', role: 'Executive Assistant', img: '/images/team/Portia Karisa.jpg' },
  { name: 'Micheal Anesu Maposa', role: 'Web Developer', img: '/images/team/Micheal Anesu Maposa.jpg' },
];

const SocialRow = () => (
  <div className="mt-3 flex items-center justify-center gap-3 text-gray-700">
    <button type="button" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full ring-4 ring-black/10 bg-black/10 text-gray-800 hover:bg-gray-900 hover:text-white transition">
      <Facebook fontSize="small" />
    </button>
    <button type="button" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full ring-4 ring-black/10 bg-black/10 text-gray-800 hover:bg-gray-900 hover:text-white transition">
      <Twitter fontSize="small" />
    </button>
    <button type="button" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full ring-4 ring-black/10 bg-black/10 text-gray-800 hover:bg-gray-900 hover:text-white transition">
      <Instagram fontSize="small" />
    </button>
  </div>
);

const Card: React.FC<Member> = ({ name, role, img }) => (
  <div className="relative w-full max-w-[280px] mx-auto rounded-2xl bg-white px-5 pb-5 pt-6 shadow-[0_10px_20px_rgba(0,0,0,0.12)] ring-1 ring-black/10">
    {/* decorative blue line on top of the card */}
    <div className="absolute inset-x-6 top-0 h-2 -translate-y-1/2 rounded bg-blue-900" />

    {/* portrait overlaps further above the card top */}
    <div className="relative z-10 mx-auto -mt-24 mb-3 w-48 overflow-hidden rounded-[1.25rem] ring-8 ring-gray-300">
      <img src={img} alt={name} className="h-56 w-full object-cover grayscale" />
    </div>
    <div className="mt-4 text-center">
      <h3 className="text-lg font-extrabold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
      <SocialRow />
    </div>
  </div>
);

const LeadershipTeam: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-10 sm:py-12">
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-700">Meet Our Team</p>
        <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">Our Leadership Team</h2>
      </div>

      <div className="mt-36 grid grid-cols-1 gap-x-6 gap-y-28 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <Card key={m.name} {...m} />
        ))}
      </div>
    </section>
  );
};

export default LeadershipTeam;
