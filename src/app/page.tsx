"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="large"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Claudia Rosefeld"
          navItems={[
            { name: "What's Inside", id: "whats-inside" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Get Access", href: "#cta" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="You're Losing Her… And You Don't Even Know Why."
          description="I notice what most men don't. And once you see it… everything changes."
          tag="The Secret Revealed"
          tagAnimation="blur-reveal"
          background={{ variant: "plain" }}
          leftCarouselItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4WpKZXAsvjsUXDrvPvErsa97m/uploaded-1773749095864-l0v0f5xw.png?_wi=1",              imageAlt: "Claudia Rosefeld portrait - mysterious confidence"
            }
          ]}
          rightCarouselItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4WpKZXAsvjsUXDrvPvErsa97m/uploaded-1773749095864-br5evijf.png?_wi=1",              imageAlt: "Claudia street photography - natural feminine energy"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4WpKZXAsvjsUXDrvPvErsa97m/uploaded-1773749095864-9p8yt57i.png?_wi=1",              imageAlt: "Claudia elegant portrait - refined grace"
            }
          ]}
          buttons={[
            { text: "Unlock The Secret ($4.99)", href: "#pricing" }
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
        />
      </div>

      <div id="curiosity" data-section="curiosity">
        <InlineImageSplitTextAbout
          heading={[
            {
              type: "text",              content: "She Noticed It Instantly.\n\nYou did this… and didn't realize it.\n\nThis is where most men lose her."
            }
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "See What You're Missing", href: "#whats-inside" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="problem" data-section="problem">
        <FeatureCardTwentyFour
          title="The Problem You're Living"
          description="You replay conversations in your head… wondering what went wrong. Getting ignored. Losing interest suddenly. Confusion about mixed signals. These aren't accidents—they're patterns."
          features={[
            {
              id: "1",              title: "The Sudden Shift",              author: "Claudia",              description: "She was engaged one moment. Cold the next. You have no idea why.",              tags: ["attraction", "psychology"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4WpKZXAsvjsUXDrvPvErsa97m/uploaded-1773749095864-l0v0f5xw.png?_wi=2",              imageAlt: "Claudia explaining women's psychology"
            },
            {
              id: "2",              title: "The Confusion",              author: "Claudia",              description: "Mixed signals. Unclear intentions. You're always guessing what she really wants.",              tags: ["psychology", "signals"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4WpKZXAsvjsUXDrvPvErsa97m/uploaded-1773749095864-br5evijf.png?_wi=2",              imageAlt: "Understanding hidden patterns"
            },
            {
              id: "3",              title: "The Cost",              author: "Claudia",              description: "You chase harder. Try more. Lose control. Nothing works because you never understood the game.",              tags: ["attraction", "control"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4WpKZXAsvjsUXDrvPvErsa97m/uploaded-1773749095864-9p8yt57i.png?_wi=2",              imageAlt: "Regaining power and confidence"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Reality Check"
          tagAnimation="slide-up"
        />
      </div>

      <div id="reveal" data-section="reveal">
        <ProductCardTwo
          title="This Isn't About Tricks. It's About Understanding."
          description="The Secret Handbook breaks down exactly what women notice, what triggers attraction, and what quietly ruins it. Simple. Direct. Everything explained."
          tag="Hidden Knowledge Revealed"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          products={[
            {
              id: "handbook",              brand: "Claudia Rosefeld",              name: "The Secret Handbook",              price: "$4.99",              rating: 5,
              reviewCount: "2.3k+",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-view-white-desk-with-red-notebook-pen-glasses-it_181624-27717.jpg",              imageAlt: "The Secret Handbook - Digital Product"
            }
          ]}
          buttons={[
            { text: "Get Instant Access", href: "#pricing" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="whats-inside" data-section="whats-inside">
        <FeatureCardTwentyFour
          title="What's Inside The Handbook"
          description="A simple, direct breakdown of what women notice, what turns them off, and what actually builds attraction."
          features={[
            {
              id: "1",              title: "What She Notices In The First Seconds",              author: "Chapter 1",              description: "The exact signals women pick up on instantly. Before you even speak. This section alone changes everything.",              tags: ["first impression", "psychology"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4WpKZXAsvjsUXDrvPvErsa97m/uploaded-1773749095864-l0v0f5xw.png?_wi=3",              imageAlt: "First impression psychology"
            },
            {
              id: "2",              title: "Why She Suddenly Loses Interest",              author: "Chapter 2",              description: "The predictable patterns that kill attraction. The mistakes you're making without realizing it. How to stop them.",              tags: ["mistakes", "attraction"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4WpKZXAsvjsUXDrvPvErsa97m/uploaded-1773749095864-br5evijf.png?_wi=3",              imageAlt: "Attraction psychology explained"
            },
            {
              id: "3",              title: "The Mistakes That Quietly Ruin Attraction",              author: "Chapter 3",              description: "What confidence actually looks like. It's not what you think. The real foundation that creates lasting attraction.",              tags: ["confidence", "psychology"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4WpKZXAsvjsUXDrvPvErsa97m/uploaded-1773749095864-9p8yt57i.png?_wi=3",              imageAlt: "Real confidence revealed"
            },
            {
              id: "4",              title: "How To Stop Chasing and Stay In Control",              author: "Chapter 4",              description: "The exact framework for shifting dynamics. Stop being reactive. Start leading. How to keep her engaged without effort.",              tags: ["control", "dynamics"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4WpKZXAsvjsUXDrvPvErsa97m/uploaded-1773749095864-l0v0f5xw.png?_wi=4",              imageAlt: "Taking control of dynamics"
            },
            {
              id: "5",              title: "What Confidence Actually Looks Like",              author: "Chapter 5",              description: "Real confidence isn't arrogance. It's understanding. This chapter shows you how women perceive true confidence and how to embody it.",              tags: ["confidence", "presence"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4WpKZXAsvjsUXDrvPvErsa97m/uploaded-1773749095864-br5evijf.png?_wi=4",              imageAlt: "Authentic confidence embodied"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Full Breakdown"
          tagAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="I didn't expect this to be this accurate. Everything finally made sense. This explained things no one else did. Most men will never understand this. You either see it… or you don't."
          rating={5}
          author="Real Users"
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/expressive-woman-posing-indoor_344912-1956.jpg",              alt: "User testimonial 1"
            },
            {
              src: "http://img.b2bpic.net/free-photo/middle-age-brunette-woman-standing-wearing-orange-sweater-sticking-tongue-out-happy-with-funny-expression-emotion-concept_839833-34764.jpg",              alt: "User testimonial 2"
            },
            {
              src: "http://img.b2bpic.net/free-photo/beautiful-young-businesswoman-smiling-camera_74855-3966.jpg",              alt: "User testimonial 3"
            },
            {
              src: "http://img.b2bpic.net/free-photo/close-up-serious-businesswoman-sitting-couch_1098-3140.jpg",              alt: "User testimonial 4"
            }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="blur-reveal"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Common Questions"
          description="Everything you need to know before you buy."
          faqs={[
            {
              id: "1",              title: "Is this actually going to help me?",              content: "Yes. If you're serious about understanding attraction and getting real results, this handbook shows you exactly what to do. It's not theory—it's patterns that actually work."
            },
            {
              id: "2",              title: "How long is it?",              content: "It's concise and direct. No fluff. Just the essential knowledge you need. Most people finish it in one sitting."
            },
            {
              id: "3",              title: "Will this work for me?",              content: "If you're willing to see things differently and apply what you learn, yes. This is about understanding psychology, not manipulation. Real, lasting results."
            },
            {
              id: "4",              title: "What if I don't like it?",              content: "We back everything with a satisfaction guarantee. If it doesn't deliver, you get your money back. No questions asked."
            },
            {
              id: "5",              title: "Is this only for selling?",              content: "No. This applies to dating, relationships, first impressions, and any interaction with women. The patterns are universal."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4WpKZXAsvjsUXDrvPvErsa97m/uploaded-1773749095864-l0v0f5xw.png?_wi=5"
          mediaAnimation="blur-reveal"
          faqsAnimation="slide-up"
          textboxLayout="split"
          useInvertedBackground={false}
          mediaPosition="right"
          tag="Questions Answered"
          tagAnimation="slide-up"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardFive
          title="Stop Guessing. Start Understanding."
          description="Only $4.99. This costs less than a coffee… but changes how you see everything."
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Instant Access"
          tagAnimation="slide-up"
          plans={[
            {
              id: "handbook",              tag: "Limited Time",              price: "$4.99",              period: "One-time access",              description: "The Secret Handbook - Full Access",              button: { text: "Get Instant Access", href: "https://checkout.stripe.com" },
              featuresTitle: "You get:",              features: [
                "Instant digital download",                "Lifetime access to handbook",                "Updates included free",                "Money-back guarantee"
              ]
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Claudia Rosefeld"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms & Conditions", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}