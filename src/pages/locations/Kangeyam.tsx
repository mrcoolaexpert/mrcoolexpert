import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Kangeyam = () => {
  return (
    <>
      <SEO
        title="AC Service in Kangeyam | Washing Machine Repair Near Bus Stand"
        description="Looking for an AC Mechanic in Kangeyam? We are located at Kumarasamy Colony. 24/7 Fridge & AC repair. Call +91 82209 15207."
        keywords="AC service Kangeyam, AC mechanic Kangeyam, Kumarasamy Colony AC repair"
      />
      <Header />
      <main className="pt-24 pb-16 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">
          Expert AC & Appliance Repair in Kangeyam
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          We are the only <strong>24/7 Service Center</strong> located directly
          in Kumarasamy Colony, Kangeyam. Our technicians can reach any home in
          Kangeyam within 30 minutes.
        </p>
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-8">
          <h3 className="font-bold text-green-800 text-xl mb-2">
            Local Kangeyam Offer
          </h3>
          <p className="text-green-700">
            Get ₹100 OFF on General Service for Kangeyam residents. Use code:{" "}
            <strong>KANGEYAM100</strong>
          </p>
        </div>
        <a href="tel:+918220915207">
          <Button size="lg" className="text-lg px-8">
            Call Kangeyam Branch
          </Button>
        </a>
      </main>
      <Footer />
    </>
  );
};

export default Kangeyam;
