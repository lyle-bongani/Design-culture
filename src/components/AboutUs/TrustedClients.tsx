import React, { useEffect, useState } from 'react';

const fileToAlt = (filename: string) => filename.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ');

const TrustedClients: React.FC = () => {
  const [files, setFiles] = useState<string[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/images/logo/logostwo/manifest.json')
      .then((r) => {
        if (!r.ok) throw new Error('manifest not found');
        return r.json();
      })
      .then((list: string[]) => {
        if (!cancelled) setFiles(list);
      })
      .catch(() => {
        // Fallback to a static list based on current folder contents (best effort)
        const fallback = [
          'Ecobank-Logo.png',
          'Zimbabwe-Council-for-Churches-ZCC.png',
          'Harare_Coat_of_Arms.png',
          'Magaya-Logo-High-Res-1024x964.jpg',
          'Moore_Global.png',
          'Peterhouse-Crest.jpg',
          'svh-e1642588108123-1024x872.png',
          'loho.png',
          'DAIZ_bZXcAI0hhg.png',
          'images (12).png',
          'download (8).jpg',
          '34686245_1915829378468831_6804840750925217792_n (1).jpg',
        ];
        if (!cancelled) setFiles(fallback);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="w-full bg-[#1F2429]">
      <div className="container mx-auto px-4 py-12 sm:py-14">
        <h2 className="text-center text-white text-2xl sm:text-3xl font-extrabold tracking-tight">
          OUR TRUSTED PARTNERSHIP CLIENTS
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {(files ?? []).map((file) => (
            <div key={file} className="rounded-xl bg-white px-4 py-2 shadow-[0_4px_14px_rgba(0,0,0,0.12)] ring-1 ring-black/10 grid place-items-center h-20">
              <img
                src={`/images/logo/logostwo/${file}`}
                alt={fileToAlt(file)}
                className="max-h-14 sm:max-h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
          {files && files.length === 0 && (
            <div className="col-span-full text-center text-white/80 text-sm">No client logos found.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
