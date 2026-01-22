export async function fetchPublicMarketSnapshot() {
  const res = await fetch(
    "http://127.0.0.1:8000/api/market/public/snapshot/"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch market snapshot");
  }

  return res.json();
}
