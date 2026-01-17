// ui/components/feedback/useToast.ts

import { useToastContext } from "./ToastProvider";

export function useToast() {
  const ctx = useToastContext();

  function promise<T>(
    p: Promise<T>,
    messages: {
      loading: string;
      success: string;
      error: string;
    }
  ) {
    ctx.notify(messages.loading, "info");

    return p
      .then((res) => {
        ctx.notify(messages.success, "success");
        return res;
      })
      .catch((err) => {
        ctx.notify(messages.error, "error");
        throw err;
      });
  }

  return {
    notify: ctx.notify,
    promise,
  };
}
