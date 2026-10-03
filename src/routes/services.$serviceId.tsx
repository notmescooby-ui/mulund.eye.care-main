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
import { serviceSeo, SITE_URL } from "@/lib/seo";

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
    const seo = serviceSeo[loaderData.id];
    const title = seo?.title ?? `${loaderData.title} | Mulund Eye Care`;
    const description = seo?.description ?? loaderData.subtitle;
    const canonical = `${SITE_URL}/services/${loaderData.id}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonical },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: ServiceDetailsPage,
});

function ServiceDetailsPage() {
  const service = Route.useLoaderData();
  const seo = serviceSeo[service.id];
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: seo?.title ?? `${service.title} | Mulund Eye Care`,
    description: seo?.description ?? service.subtitle,
    url: `${SITE_URL}/services/${service.id}`,
    isPartOf: { "@id": `${SITE_URL}/#clinic` },
    about: { "@type": "MedicalCondition", name: service.title },
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
