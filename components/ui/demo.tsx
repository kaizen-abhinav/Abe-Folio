'use client'

import { SplineScene } from "@/components/ui/splite";
import { MeshGradient } from "@paper-design/shaders-react"
import { Spotlight } from "@/components/ui/spotlight"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { LayeredText } from "@/components/ui/layered-text"
 
export function SplineSceneBasic() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <MeshGradient
        className="w-full h-full absolute inset-0"
        colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
        speed={1.0}
      />

      {/* Spotlight Effect on Robot */}
      <Spotlight
        className="-top-40 right-0 md:right-60 md:-top-20"
        fill="white"
      />

      {/* Lighting overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-gray-800/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '3s' }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/2 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: '2s', animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-gray-900/3 rounded-full blur-xl animate-pulse"
          style={{ animationDuration: '4s', animationDelay: '0.5s' }}
        />
      </div>
      
      <div className="flex h-full flex-col md:flex-row relative z-10">
        {/* Dark gradient overlay that spans both sections */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30 pointer-events-none"></div>
        
        {/* Left content */}
        <div className="flex-1 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10 pb-16 md:pb-24 pt-12 md:pt-20">
          {/* Content with relative positioning */}
          <div className="relative -mt-8 md:-mt-12">
            {/* Name */}
            <div className="mb-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-3 drop-shadow-lg" style={{ fontFamily: "var(--font-parkinsans)" }}>
                Abhinav Varghese
              </h1>
              <p className="text-xl md:text-2xl text-neutral-200 font-medium drop-shadow-md" style={{ fontFamily: "var(--font-satoshi)" }}>
                Engineer. Creator. Crypto Ape.
              </p>
            </div>

            {/* Hero Quote */}
            <div className="mb-8 max-w-2xl">
              <blockquote className="border-l-4 border-neutral-500 pl-4 mb-4 bg-black/20 py-2 backdrop-blur-sm">
                <p className="text-neutral-200 text-base md:text-lg italic drop-shadow-md" style={{ fontFamily: "var(--font-satoshi)" }}>
                  "There is no prize to perfection, only an end to pursuit" — Viktor.
                </p>
              </blockquote>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed drop-shadow-md" style={{ fontFamily: "var(--font-satoshi)" }}>
                Exploring the boundaries between human intuition and machine precision — from bionics and AI to experimental design and robotics.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <LiquidButton 
                size="lg"
                className="text-white"
                style={{ fontFamily: "var(--font-parkinsans)" }}
                onClick={() => window.location.href = '#work'}
              >
                View My Work
              </LiquidButton>
              <LiquidButton 
                size="lg"
                className="text-white"
                style={{ fontFamily: "var(--font-parkinsans)" }}
                onClick={() => window.location.href = '#contact'}
              >
                Contact Me
              </LiquidButton>
            </div>

            {/* Footer Quote */}
            <div className="mt-auto">
              <p className="text-neutral-400 text-sm md:text-base italic drop-shadow-md" style={{ fontFamily: "var(--font-satoshi)" }}>
                "You miss 100% of the shots you don't take" — Basketball Machine
              </p>
            </div>
          </div>
        </div>

        {/* Right content - 3D Scene */}
        <div className="flex-1 relative">
          {/* Layered Text Behind Robot */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <LayeredText 
              fontSize="140px"
              fontSizeMd="70px"
              lineHeight={125}
              lineHeightMd={63}
              className="py-0"
            />
          </div>
          
          {/* Spline Robot Scene */}
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full relative z-10"
          />
        </div>
      </div>
    </div>
  )
}
