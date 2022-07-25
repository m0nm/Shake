export const styleInput = (error: any) => {
  return `px-2.5 py-1 mt-2 font-medium rounded border-2 ${
    error ? "border-error" : "border-slate-200"
  } focus:border-slate-400 outline-none`;
};
