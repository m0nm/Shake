import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

type ICLientPortal = {
  children: ReactNode;
  selector: string;
};

export default function ClientOnlyPortal({
  children,
  selector,
}: ICLientPortal) {
  const ref = useRef<any>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (ref) {
      ref.current = document.querySelector(selector);
    }
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
}
