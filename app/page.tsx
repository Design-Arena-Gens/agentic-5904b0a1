import { CTASection } from "../components/cta-section";
import { FeatureGrid } from "../components/feature-grid";
import { HeaderSection } from "../components/header-section";
import { MetricsBar } from "../components/metrics-bar";

export default function HomePage() {
  return (
    <main>
      <article className="card">
        <div className="card-content">
          <HeaderSection />
          <CTASection />
          <FeatureGrid />
          <MetricsBar />
        </div>
      </article>
    </main>
  );
}
