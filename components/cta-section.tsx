export function CTASection() {
  return (
    <section className="card-content" style={{ display: "grid", gap: "1.6rem" }}>
      <h1 className="headline">
        Elevate Your Digital Presence
        <br />
        <span className="text-gradient">with measurable impact</span>
      </h1>
      <p className="headline-ar">
        نمو مبيعاتك يبدأ من تصميم مبدع ورسالة تلامس العملاء. دع فريقنا يصنع حضوراً رقمياً
        يبهر جمهورك ويزيد ثقة علامتك التجارية.
      </p>
      <button className="button-primary" type="button">
        احجز استشارة مجانية
        <span aria-hidden>→</span>
      </button>
    </section>
  );
}
