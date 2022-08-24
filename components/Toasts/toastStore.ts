import { v4 as uuidv4 } from "uuid";
import { hookstate } from "@hookstate/core";
import { IToast } from "./Toasts";

export const toastStore = hookstate<IToast[]>([]);

export const displayToast = (
  type: IToast["type"],
  message: IToast["message"]
) => {
  const toast = { type, message, id: "toast-" + uuidv4() };

  toastStore.set((prev) => [...prev, toast]);

  setTimeout(() => {
    toastStore.set((prev) => prev.filter((item) => item.id !== toast.id));
  }, 2050);
};
