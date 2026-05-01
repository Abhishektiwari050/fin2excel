'use client';

import React from 'react';
import { BlurredInfiniteSlider } from '@/components/ui/infinite-slider';

const LOGOS = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/20/JPMorgan_logo.svg", alt: "JP Morgan", h: 28 },
    { src: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg", alt: "Goldman Sachs", h: 36 },
    { src: "https://upload.wikimedia.org/wikipedia/commons/3/34/Morgan_Stanley_Logo_1.svg", alt: "Morgan Stanley", h: 26 },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Barclays-Logo.svg", alt: "Barclays", h: 32 },
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg", alt: "HSBC", h: 28 },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg", alt: "HDFC Bank", h: 26 },
    { src: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg", alt: "ICICI Bank", h: 36 },
    { src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg", alt: "Axis Bank", h: 30 },
    { src: "https://upload.wikimedia.org/wikipedia/en/3/39/Kotak_Mahindra_Group_logo.svg", alt: "Kotak Mahindra", h: 34 },
    { src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg", alt: "SBI", h: 36 },
    { src: "https://upload.wikimedia.org/wikipedia/de/b/b8/Maybank_Logo.svg", alt: "Maybank", h: 38 },
    { src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Logo_MyBank_positive.png", alt: "MyBank", h: 34 },
];

export function LogoMarquee() {
    return (
        <section className="bg-swiss-bg overflow-hidden py-8 border-b border-swiss-black/5">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row gap-12">
                    <div className="flex-shrink-0 text-center md:text-left md:max-w-[200px] md:border-r md:border-swiss-black/10 md:pr-12">
                        <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-swiss-black/30 leading-relaxed">
                            Trusted Global <br /> Financial Partners
                        </p>
                    </div>
                    <div className="w-full md:flex-1">
                        <BlurredInfiniteSlider
                            speed={35}
                            gap={100}
                            fadeWidth={80}
                        >
                             {LOGOS.map((logo, i) => (
                                <div key={`${logo.src}-${i}`} className="flex items-center justify-center px-4 transition-all duration-500 hover:scale-110">
                                    <img
                                        className="w-auto object-contain"
                                        src={logo.src}
                                        alt={logo.alt}
                                        style={{ height: `${logo.h}px` }}
                                        loading="eager"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                            ))}
                        </BlurredInfiniteSlider>
                    </div>
                </div>
            </div>
        </section>
    );
}
