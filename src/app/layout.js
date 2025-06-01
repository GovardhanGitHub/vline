import Preloader from "@/components/ui/preloader";
import "./global.css"
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import Header from "@/components/sections/header";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";

export const metadata = {
  title: "Visual Line Studios - Video Production Bengaluru | Hospital, Jewellery & Product Ads",
  description: "Visual Line Studios is a leading video production company in Sahakara Nagar, Bengaluru. We create hospital videos, doctor interviews, jewellery ads, product launch films, and more. Elevate your brand with cinematic content for YouTube, Instagram, and Facebook.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <BootstrapForBrowser />
        <Preloader />
        <Header />
        {children}
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
