import { createFileRoute, useParams, redirect } from "@tanstack/react-router";
import { servicesDetailed } from "@/data/services-detailed";
import { ServiceHero } from "@/components/site/service-page/ServiceHero";
import { ServiceOverview } from "@/components/site/service-page/ServiceOverview";
import { ServiceSymptoms } from "@/components/site/service-page/ServiceSymptoms";
import { ServiceTimeline } from "@/components/site/service-page/ServiceTimeline";
import { ServiceFAQs } from "@/components/site/service-page/ServiceFAQs";
import { ServiceTrust } from "@/components/site/service-page/ServiceTrust";
import { ServiceCTA } from "@/components/site/service-page/ServiceCTA";
import { ServiceVisual } from "@/components/site/service-page/ServiceVisual";
import cataractSurgeryImg from "@/assets/cataract-surgery.png";

export const Route = createFileRoute("/services/$serviceId")({
  loader: ({ params }) => {
    const service = servicesDetailed[params.serviceId];
    if (!service) {
      throw redirect({ to: "/services" });
    }
    return service;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        { title: `${loaderData.title} — Mulund Eye Care` },
        { name: "description", content: loaderData.subtitle },
      ],
    };
  },
  component: ServiceDetailsPage,
});

function ServiceDetailsPage() {
  const service = Route.useLoaderData();

  return (
    <div className="bg-white">
      <ServiceHero 
        title={service.title} 
        subtitle={service.subtitle} 
        description={service.shortDescription}
        icon={service.icon}
      />
      
      <ServiceOverview 
        explanation={service.conditionExplanation} 
        image={service.overviewImage} 
      />
      
      <ServiceSymptoms 
        symptoms={service.symptoms} 
      />
      
      {service.id === 'cataract' && (
        <section className="py-12 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto rounded-[40px] overflow-hidden shadow-2xl border border-sky-100">
              <img 
                src={cataractSurgeryImg} 
                alt="Cataract Surgery Process" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      )}

      <ServiceTimeline 
        steps={service.timeline} 
      />
      
      <ServiceVisual type={service.simulationType} />
      
      <ServiceFAQs 
        faqs={service.faqs} 
      />
      
      <ServiceTrust 
        stats={service.stats} 
      />
      
      <ServiceCTA />
    </div>
  );
}
