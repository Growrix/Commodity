import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center pt-[72px]">
      <Container className="py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">404</p>
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Page Not Found</h1>
        <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. Try navigating from the homepage.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-gold">
            Back to Home
          </Link>
          <Link href="/products" className="btn-outline-gold">
            Explore Products
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact Us
          </Link>
        </div>
      </Container>
    </div>
  );
}
