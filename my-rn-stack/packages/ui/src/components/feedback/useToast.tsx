// ui/components/feedback/useToast.ts

import { useToastContext } from "./ToastProvider";

export function useToast() {
  return useToastContext();
}
