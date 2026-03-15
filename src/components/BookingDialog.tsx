import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface BookingDialogProps {
  trigger: ReactNode;
}

const BookingDialog = ({ trigger }: BookingDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-3xl h-[80vh] bg-foreground border-border">
        <iframe
          src="https://droptop-scheduler.com/rdDIZZK2rUaG2HMeUT11O5dwGFg9yC9s9IwubayO/U3DpAjla38"
          className="w-full h-full rounded-md"
          title="Droptop Booking Portal"
        />
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
