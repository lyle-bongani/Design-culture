import React from 'react';

type Client = {
  name: string;
  src?: string; // optional path to logo in public/images/clients
};

const clients: Client[] = [
  { name: 'Just Property' },
  { name: 'ZCC' },
  { name: 'Ecobank' },
  { name: 'ZIB' },
  { name: 'Govt Emblem' },
  { name: 'REDAN' },
  { name: 'Magaya' },
  { name: 'ZRP' },
  { name: 'Zimpapers' },
  { name: 'Tennis Zimbabwe' },
  { name: 'Moore' },
  { name: 'Peterhouse' },
];

const Card: React.FC<Client> = ({ name, src }) => (
  <div className="rounded-xl bg-white px-4 py-3 shadow-[0_4px_14px_rgba(0,0,0,0.12)] ring-1 ring-black/10 grid place-items-center h-20">
    {src ? (
      // When logos are added under public/images/clients/, set src and alt
      <img src={src} alt={name} className="max-h-12 w-auto object-contain" />
    ) : (
      <span className="text-xs font-semibold tracking-wide text-gray-700 select-none">{name}</span>
    )}
  </div>
);

const TrustedClients: React.FC = () => {
  return (
    <section className="w-full bg-[#1F2429]">
      <div className="container mx-auto px-4 py-12 sm:py-14">
        <h2 className="text-center text-white text-2xl sm:text-3xl font-extrabold tracking-tight">
          OUR TRUSTED PARTNERSHIP CLIENTS
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {clients.map((c) => (
            <Card key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
