import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="min-h-[60vh] flex items-center justify-center bg-white py-20">
        <div className="text-center max-w-lg px-4">
          <div className="text-8xl font-bold text-[#e5e7eb] mb-4">404</div>
          <h1 className="text-3xl font-bold text-[var(--color-ink)] mb-4">Page Not Found</h1>
          <p className="text-[#6b7280] mb-8 leading-relaxed">
            The page you are looking for does not exist or may have moved.
            Use the navigation to find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/" variant="primary">
              <Home className="w-4 h-4" />
              Return Home
            </Button>
            <Button href="/products" variant="outline-white">
              Browse Products
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
