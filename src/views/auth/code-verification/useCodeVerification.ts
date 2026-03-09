import { useSearchParams } from 'next/navigation';
import { useMemo, useState, useEffect } from 'react';
import { formatCountdown } from '@src/utils/formatCountdown';

export const useCodeVerification = () => {
  const searchParams = useSearchParams();

  // Verification target: phone or email from URL (e.g. from send-OTP redirect)
  const verificationTarget = useMemo(() => {
    const target = searchParams.get('target');
    const phone = searchParams.get('phone');
    const email = searchParams.get('email');
    return target ?? phone ?? email ?? null;
  }, [searchParams]);

  // OTP expiry: expiresAt (Unix seconds) or expiresIn (seconds from now when page loaded)
  const expiryTimestamp = useMemo(() => {
    const expiresAt = searchParams.get('expiresAt');
    const expiresIn = searchParams.get('expiresIn');
    if (expiresAt) {
      const t = Number(expiresAt);
      return Number.isFinite(t) ? t * 1000 : null;
    }
    if (expiresIn) {
      const s = Number(expiresIn);
      return Number.isFinite(s) ? Date.now() + s * 1000 : null;
    }
    return null;
  }, [searchParams]);

  const [, setTick] = useState(0);
  useEffect(() => {
    if (expiryTimestamp == null) return;
    const interval = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [expiryTimestamp]);

  const remainingSeconds = expiryTimestamp != null ? Math.max(0, Math.ceil((expiryTimestamp - Date.now()) / 1000)) : null;
  const countdownLabel = remainingSeconds !== null ? (remainingSeconds > 0 ? formatCountdown(remainingSeconds) : '00:00') : null;

  return { verificationTarget, expiryTimestamp, countdownLabel };
};
