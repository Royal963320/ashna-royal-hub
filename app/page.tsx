const categories = [
  { icon: "⌁", name: "Digital Essentials", text: "Tools, templates & downloads" },
  { icon: "◇", name: "Lifestyle", text: "Curated everyday upgrades" },
  { icon: "✦", name: "Premium Finds", text: "Handpicked quality products" },
  { icon: "↗", name: "Affiliate Picks", text: "Trusted recommendations" },
];

const products = [
  { icon: "▣", category: "Digital product", name: "The Creator Toolkit", price: "₹499" },
  { icon: "◈", category: "Lifestyle", name: "Minimal Desk Set", price: "₹1,299" },
  { icon: "✧", category: "Premium find", name: "Golden Hour Journal", price: "₹699" },
  { icon: "◒", category: "Affiliate pick", name: "Focus Essentials Pack", price: "₹899" },
];

export default function Home() {
  return (
    <main>
      <header className="header"><div className="container nav">
        <a className="brand" href="#top"><span className="brand-mark">R</span> ROYAL HUB</a>
        <nav className="nav-links"><a href="#categories">Categories</a><a href="#featured">Featured</a><a href="#story">Our story</a></nav>
        <div className="nav-actions"><button className="icon-btn" aria-label="Search">⌕</button><button className="icon-btn" aria-label="Shopping bag">♧</button></div>
      </div></header>

      <div id="top" className="container">
        <section className="hero"><div>
          <p className="eyebrow">A curated marketplace</p><h1>Elevate the everyday.</h1>
          <p className="hero-copy">Discover thoughtfully selected products, digital essentials and premium finds made to add a little more meaning to your everyday.</p>
          <a className="cta" href="#featured">Explore the collection <span>→</span></a>
        </div><div className="hero-art" aria-label="Royal Hub collection preview"><div className="hero-card"><span>Curated<br />for you.</span></div></div></section>

        <section id="categories" className="section"><div className="section-head"><div><p className="eyebrow">Browse by</p><h2>Explore categories</h2></div><p>Find something made for your world →</p></div><div className="grid">{categories.map((item) => <a className="category" href="#featured" key={item.name}><div className="category-icon">{item.icon}</div><h3>{item.name}</h3><p>{item.text}</p></a>)}</div></section>

        <section id="featured" className="section"><div className="section-head"><div><p className="eyebrow">Editor&apos;s selection</p><h2>Featured products</h2></div><p>View all products →</p></div><div className="grid">{products.map((item) => <article className="product" key={item.name}><div className="product-img">{item.icon}</div><div className="product-body"><div className="product-meta">{item.category}</div><h3>{item.name}</h3><div className="price-row"><span className="price">{item.price}</span><button className="buy">View product</button></div></div></article>)}</div></section>

        <section id="story" className="section"><div className="trust"><div className="trust-item"><span>✦</span><div><strong>Curated with intention</strong><span>Only things worth sharing.</span></div></div><div className="trust-item"><span>↗</span><div><strong>Made for modern life</strong><span>Useful, beautiful and considered.</span></div></div><div className="trust-item"><span>♡</span><div><strong>A little more royal</strong><span>Premium experiences, always.</span></div></div></div></section>
      </div>

      <footer className="footer"><div className="container footer-inner"><span>© 2026 ROYAL HUB. Curated with intention.</span><span>Privacy · Terms · Contact</span></div></footer>
    </main>
  );
}