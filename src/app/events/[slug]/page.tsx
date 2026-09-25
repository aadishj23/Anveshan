import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { eventsData } from "@/config/events";
import Typography from "@/components/Typography";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
      {/* Back button */}
      <Link
        href="/#events"
        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Events
      </Link>

      <div className="bg-white rounded-3xl border-2 border-black/10 overflow-hidden shadow-lg">
        {/* Event Banner Image */}
        <div className="relative w-full h-64 sm:h-96 bg-gray-100">
          <Image
            src={event.image}
            alt={event.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8 sm:p-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
              <Calendar size={14} />
              {event.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-gray-600">
              <MapPin size={14} />
              BPIT, New Delhi
            </span>
          </div>

          <Typography.Display className="font-sketch-block text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
            {event.name}
          </Typography.Display>

          <div className="prose max-w-none text-gray-700 leading-relaxed text-base sm:text-lg">
            <p>{event.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
