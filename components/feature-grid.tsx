const features = [
  {
    title: "خطط محتوى ذكية",
    description: "تحليلات لحظية تحدد أفضل توقيت ورسالة لكل منصة اجتماعية.",
    icon: "AI"
  },
  {
    title: "إعلانات مدفوعة فعّالة",
    description: "حملات مدعومة بالبيانات تزيد العائد على الاستثمار بنسبة 3X.",
    icon: "ROI"
  },
  {
    title: "هويات مرئية",
    description: "تصاميم متكاملة تمنح علامتك حضوراً متماسكاً في كل نقاط التفاعل.",
    icon: "UX"
  }
];

export function FeatureGrid() {
  return (
    <section className="grid">
      {features.map((feature) => (
        <div className="feature" key={feature.title}>
          <span className="feature-icon">{feature.icon}</span>
          <strong className="feature-title">{feature.title}</strong>
          <p className="feature-desc">{feature.description}</p>
        </div>
      ))}
    </section>
  );
}
