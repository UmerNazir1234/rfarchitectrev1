import type { Metadata } from "next";
import Heading from "@/components/Heading";
import { FiHome } from "react-icons/fi";

const title = "Society Management System";
const description =
  "A centralized web-based platform that simplifies daily operations for residential communities and housing societies.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products/societymanagement-system" },
  openGraph: {
    title: `${title} | RF Technologies`,
    description,
    url: "/products/societymanagement-system",
  },
  twitter: { title: `${title} | RF Technologies`, description },
};

const responsibilities = [
  "Resident and staff records",
  "Facility bookings and events",
  "Complaints and service requests",
  "Announcements and community updates",
];

const approach = [
  "Modular architecture for separate management sections",
  "User-friendly administrative dashboard with clear navigation",
  "REST API integration to retrieve and manage application data",
  "Authentication and permission-based access control",
  "Scalable structure for future improvements",
];

const features = [
  {
    title: "Resident and community management",
    description:
      "Keep resident information and community administration organized in one platform.",
  },
  {
    title: "Staff management and permissions",
    description:
      "Manage staff access with permissions tailored to individual modules.",
  },
  {
    title: "Facilities and events",
    description:
      "Coordinate facility bookings and community events through dedicated management sections.",
  },
  {
    title: "Complaints and service requests",
    description:
      "Bring resident complaints and service requests into an organized workflow.",
  },
  {
    title: "Announcements and notifications",
    description:
      "Share important community updates through announcements and push notifications.",
  },
  {
    title: "Marketing and services",
    description:
      "Administer marketing, forms, and community services from the platform.",
  },
];

export default function SocietyManagementSystemPage() {
  return (
    <>
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
        <div className="page-width grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-xl">
            <h1 className="text-primary font-bold">{title}</h1>
            <h3 className="text-secondary max-sm:mt-2 drop-shadow-lg">
              A centralized platform for residential communities
            </h3>
            <p className="md:text-2xl text-xl mt-4">
              The Society Management System is a centralized web-based platform
              designed to simplify and digitize the daily operations of
              residential communities and housing societies. Administrators
              can manage residents, staff, bookings, events, announcements,
              complaints, facilities, and community services from one place.
            </p>
          </div>
          <div className="flex min-h-[320px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-white p-8 text-center shadow-2xl sm:min-h-[400px]">
            <FiHome
              className="mb-6 h-24 w-24 text-primary sm:h-32 sm:w-32"
              aria-hidden="true"
            />
            <h2 className="text-primary">Community operations</h2>
            <p className="mt-3 max-w-md text-lg sm:text-xl">
              Residents, facilities, services, and communication organized in
              one platform.
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {["Residents", "Facilities", "Services", "Updates"].map(
                (item) => (
                  <li
                    key={item}
                    className="rounded-full border border-primary/20 px-4 py-2 text-primary"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center max-sm:pt-10">
        <Heading
          title="THE CHALLENGE"
          icon={true}
          iconStyle="stroke-primary"
          classes="text-primary font-bold drop-shadow-lg max-sm:text-xl"
        />
        <div className="page-width grid items-center gap-8 pb-16 text-left lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="text-secondary">Many responsibilities, one community</h3>
            <p className="md:text-2xl text-lg mt-4">
              Managing a residential society involves maintaining resident
              records, handling complaints, organizing events, managing
              facility bookings, and communicating important updates. The goal
              is to bring these operations together in one organized platform.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
            <h4 className="text-primary">Operations to coordinate</h4>
            <ul className="mt-5 space-y-3">
              {responsibilities.map((item) => (
                <li
                  key={item}
                  className="border-b border-primary/10 pb-3 text-lg last:border-0 last:pb-0 sm:text-xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="page-width">
          <Heading
            title="MY APPROACH"
            icon={true}
            iconStyle="stroke-primary"
            classes="text-primary font-bold drop-shadow-lg max-sm:text-xl"
          />
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3 className="text-secondary">A clear, scalable foundation</h3>
              <p className="md:text-2xl text-lg mt-4">
                The platform is structured around distinct management areas,
                with a clear administrative experience and controlled access
                to the tools each staff member needs.
              </p>
            </div>
            <ul className="space-y-4 rounded-2xl bg-white p-6 shadow-lg sm:p-8">
              {approach.map((item) => (
                <li
                  key={item}
                  className="border-b border-primary/10 pb-4 text-lg last:border-0 last:pb-0 sm:text-xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="page-width">
          <Heading
            title="SOLUTION &amp; KEY FEATURES"
            icon={true}
            iconStyle="stroke-primary"
            classes="text-primary font-bold drop-shadow-lg max-sm:text-xl"
          />
          <p className="md:text-2xl text-lg mb-8 max-w-4xl">
            An organized administrative platform for the day-to-day needs of a
            residential community.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-primary/10 bg-white p-6 shadow-lg"
              >
                <h4 className="text-primary">{feature.title}</h4>
                <p className="mt-3 text-lg">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="flex items-stretch justify-start flex-wrap pb-10 pt-8">
        <div className="lg:basis-1/2 basis-full sm:px-16 px-3 bg-secondary lg:py-28 md:py-20 py-16">
          <h2 className="text-primary pb-6">BUSINESS IMPACT</h2>
          <p className="md:text-2xl text-xl text-white mt-4">
            The platform helps centralize society operations, improve
            administrative organization, and simplify daily workflows.
          </p>
        </div>
        <div className="lg:basis-1/2 basis-full bg-primary lg:p-14 md:p-10 p-5">
          <h3 className="text-white md:text-[32px] text-[26px]">
            A more organized community
          </h3>
          <ul className="mt-5 list-disc space-y-3 ps-8 text-white md:text-2xl text-xl">
            <li>Keep community operations together in one platform.</li>
            <li>Make routine administrative tasks easier to coordinate.</li>
            <li>Support communication with announcements and notifications.</li>
            <li>Control staff access with module-level permissions.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
