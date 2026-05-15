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

export const Route = createFileRoute("/services/$serviceId")({
  loader: ({ params }) => {
    const service = servicesDetailed[params.serviceId];
    if (!service) {
      throw redirect({ to: "/services" });
    }
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title} — Mulund Eye Care` },
      { name: "description", content: loaderData?.subtitle },
    ],
  }),
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
