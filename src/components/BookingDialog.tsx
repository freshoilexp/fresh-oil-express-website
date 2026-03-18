import { ReactNode } from "react";

interface BookingDialogProps {
  trigger: ReactNode;
}

const BookingDialog = ({ trigger }: BookingDialogProps) => {
  const handleClick = () => {
    window.open(
      "https://droptop-scheduler.com/rdDIZZK2rUaG2HMeUT11O5dwGFg9yC9s9IwubayO/U3DpAjla38",
      "_blank"
    );
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer", display: "inline-block" }}>
      {trigger}
    </div>
  );
};

export default BookingDialog;
