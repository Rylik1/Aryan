type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export function rateLimitByIp(ip: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: limit - 1 } as const;
  }
  if (bucket.count >= limit) {
    return { success: false, remaining: 0, retryAfterMs: bucket.resetAt - now } as const;
  }
  bucket.count += 1;
  return { success: true, remaining: Math.max(0, limit - bucket.count) } as const;
}


