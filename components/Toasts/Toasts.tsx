import { useHookstate } from "@hookstate/core";
import React from "react";
import ClientOnlyPortal from "../ClientPortal";
import { toastStore } from "./toastStore";

export type IToast = {
  id: string;
  message: string;
  type: "info" | "success" | "error" | "warning";
};

function Toasts() {
  const toasts = useHookstate(toastStore).get();

  return (
    <ClientOnlyPortal selector="#toasts">
      <div className="z-50 flex flex-col fixed inset-0 space-y-4 items-end pointer-events-none">
        <div
          className="toast toast-top toast-center w-fit"
          aria-live="assertive"
        >
          {toasts.map((toast) => {
            return (
              <div
                key={toast.id}
                className={`alert alert-${toast.type} shadow-lg px-8`}
              >
                <span className="text-white font-semibold">
                  {toast.message}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </ClientOnlyPortal>
  );
}

export default Toasts;
