"use client";

import { useMemo, useState } from "react";

const products = [
  { id: "creator-toolkit", icon: "▣", type: "Digital", category: "Digital Essentials", name: "The Creator Toolkit", price: 499, description: "Templates and tools for a more focused creative workflow." },
  { id: "desk-set", icon: "◈", type: "Physical", category: "Lifestyle", name: "Minimal Desk Set", price: 1299, description: "A considered desk upgrade for calm, productive days." },
  { id: "golden-journal", icon: "✧", type: "Physical", category: "Premium Finds", name: "Golden Hour Journal", price: 699, description: "A premium paper journal for ideas, plans and reflections." },
  { id: "focus-pack", icon: "◒", type: "Affiliate", category: "Affiliate Picks", name: "Focus Essentials Pack", price: 899, description: "A trusted collection of everyday focus essentials." },
];

export { products };

function addToCart(id: string) {
  const cart = JSON.parse(window.localStorage.getItem("royal-cart") || "[]");
  cart.push(id);
  window.localStorage.setItem("royal-cart", JSON.stringify(cart));
  window.localStorage.setItem("royal-cart-count", String(cart.length));
  window.dispatchEvent(new Event("royal-cart-updated"));
}

export default function ShopClient() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("Featured");
  const filtered = useMemo(() => products.filter(p => (type === "All" || p.type === type) && `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase())).sort((a,b) => sort === "Price: low to high" ? a.price-b.price : sort === "Price: high to low" ? b.price-a.price : 0), [query, type, sort]);
  return <div><div className="catalog-tools"><input className="input" placeholder="Search products..." value={query} onChange={e => setQuery(e.target.value)} /><select className="input" value={type} onChange={e => setType(e.target.value)}><option>All</option><option>Digital</option><option>Physical</option><option>Affiliate</option></select><select className="input" value={sort} onChange={e => setSort(e.target.value)}><option>Featured</option><option>Price: low to high</option><option>Price: high to low</option></select></div><div className="product-grid">{filtered.map(p => <article className="product" key={p.id}><div className="product-img">{p.icon}</div><div className="product-body"><div className="product-meta">{p.type} · {p.category}</div><h3>{p.name}</h3><p className="product-description">{p.description}</p><div className="price-row"><span className="price">₹{p.price.toLocaleString("en-IN")}</span><button className="buy" onClick={() => addToCart(p.id)}>Add to bag</button></div></div></article>)}</div>{filtered.length === 0 && <p className="empty">No products match your search.</p>}</div>;
}
