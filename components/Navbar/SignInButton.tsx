type IButton = {
  openModal: () => void;
  handleDisplay: (value: "login" | "register" | "forget") => void;
};

export const SignInButton = ({ handleDisplay, openModal }: IButton) => {
  return (
    <div
      onClick={() => {
        handleDisplay("login");
        openModal();
      }}
    >
      <a className="btn btn-outline btn-sm md:btn-md btn-primary rounded-3xl px-4 md:px-8">
        Sign In
      </a>
    </div>
  );
};
