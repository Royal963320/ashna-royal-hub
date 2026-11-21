"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const sync = () => setCount(Number(window.localStorage.getItem("royal-cart-count") || 0));
    sync();
    window.addEventListener("royal-cart-updated", sync);
    return () => window.removeEventListener("royal-cart-updated", sync);
  }, []);
  return <header className="header"><div className="container nav"><Link className="brand" href="/"><span className="brand-mark">R</span> ROYAL HUB</Link><nav className="nav-links"><Link href="/shop">Shop</Link><Link href="/shop?type=digital">Digital</Link><Link href="/shop?type=lifestyle">Lifestyle</Link><Link href="/account">Account</Link></nav><div className="nav-actions"><Link className="icon-btn" href="/shop" aria-label="Search">⌕</Link><Link className="cart-link" href="/cart">Bag <b>{count}</b></Link></div></div></header>;
}
