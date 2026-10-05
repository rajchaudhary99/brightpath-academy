import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import { CONTACT_INFO, WHATSAPP_URL, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | BrightPath Academy",
  description: "Get in touch with BrightPath Academy for admissions, course enquiries and counselling.",
};

export default function ContactPage() {
  return (
    <>
      <section className="gradient-navy py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Get In Touch
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Have questions about admissions or courses? Our counsellors are here to help.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <a href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 p-4 hover:border-blue-200 transition-colors group">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                      <p className="font-semibold text-slate-900 text-sm">{CONTACT_INFO.phone}</p>
                    </div>
                  </a>

                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 p-4 hover:border-green-200 transition-colors group">
                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">WhatsApp</p>
                      <p className="font-semibold text-slate-900 text-sm">{CONTACT_INFO.phone}</p>
                    </div>
                  </a>

                  <a href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 p-4 hover:border-blue-200 transition-colors group">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Email</p>
                      <p className="font-semibold text-slate-900 text-sm break-all">{CONTACT_INFO.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 p-4">
                    <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Address</p>
                      <p className="font-semibold text-slate-900 text-sm">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 p-4">
                    <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Office Hours</p>
                      <p className="font-semibold text-slate-900 text-sm">Mon–Sat: 8 AM – 8 PM</p>
                      <p className="text-slate-500 text-xs">Sunday: 9 AM – 2 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-200 rounded-2xl overflow-hidden h-48 flex items-center justify-center border border-slate-200">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-500 text-sm font-medium">Map Placeholder</p>
                  <p className="text-slate-400 text-xs">Google Maps embed goes here</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Send Us an Enquiry
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  );
}
