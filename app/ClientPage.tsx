"use client";

import { useState, useCallback, useEffect } from "react";
import Variant1 from "./variants/variant-1";
import Variant2 from "./variants/variant-2";
import Variant3 from "./variants/variant-3";
import Variant4 from "./variants/variant-4";

const VARIANTS = [Variant1, Variant2, Variant3, Variant4];
const REPO_FULL_NAME = 'ibrahim-ansari-code/new';
const LAYER = 'layer-1';
const BEACON_URL = 'http://localhost:8000';
const POOL_KEY = "landright_variant_pool";

function getPool(): number[] {
  if (typeof window === "undefined") return [1, 2, 3, 4];
  try {
    const raw = sessionStorage.getItem(POOL_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as number[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}
  return [1, 2, 3, 4];
}

function pickAndUpdatePool(): number {
  const pool = getPool();
  const idx = Math.floor(Math.random() * pool.length);
  const picked = pool[idx];
  const next = pool.filter((_, i) => i !== idx);
  if (typeof window !== "undefined") {
    try {
      sessionStorage.setItem(POOL_KEY, JSON.stringify(next.length > 0 ? next : [1, 2, 3, 4]));
    } catch {}
  }
  return picked;
}

function sendCtaClick(ctaLabel?: string, ctaId?: string) {
  const w = window as unknown as { __landrightVariantId?: number };
  fetch(BEACON_URL + "/beacon", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event: "button_click",
      repo_full_name: REPO_FULL_NAME,
      layer: LAYER,
      variant_id: String(w.__landrightVariantId ?? ""),
      cta_label: ctaLabel ?? undefined,
      cta_id: ctaId ?? undefined,
    }),
  }).catch(() => {});
}

export default function ClientPage() {
  const [v, setV] = useState<number | null>(null);
  useEffect(() => {
    setV(pickAndUpdatePool());
  }, []);
  useEffect(() => {
    if (v != null) (window as unknown as { __landrightVariantId?: number }).__landrightVariantId = v;
  }, [v]);
  const handleCtaClick = useCallback((e: React.MouseEvent) => {
    const t = (e.target as HTMLElement).closest("a, button");
    if (!t) return;
    const label = (t as HTMLElement).textContent?.trim();
    const id = (t as HTMLElement).id ?? (t as HTMLElement).getAttribute("data-cta-id") ?? undefined;
    sendCtaClick(label ?? undefined, id ?? undefined);
  }, []);
  if (v == null) return <div style={{ minHeight: "100vh" }} />;
  const VariantComponent = VARIANTS[v - 1];
  return (
    <div
      data-repo-full-name={REPO_FULL_NAME}
      data-layer={LAYER}
      data-variant-id={String(v)}
      onClick={handleCtaClick}
      role="presentation"
    >
      <VariantComponent />
    </div>
  );
}
