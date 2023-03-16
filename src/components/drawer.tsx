import { XMarkIcon } from "@heroicons/react/24/outline";
import * as Dialog from "@radix-ui/react-dialog";

type Props = {
  title: string;
  trigger: React.ReactNode;
  body: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const Drawer: React.FC<Props> = ({
  trigger,
  title,
  body,
  open,
  onOpenChange
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/30" />
        <Dialog.Content
          className="flex flex-col fixed bottom-0 inset-x-0 bg-white animate-slide-up"
          aria-describedby={undefined}
        >
          <div className="flex justify-between p-2 bg-gray-100">
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Close>
              <XMarkIcon className="h-5 w-5" />
            </Dialog.Close>
          </div>
          {body}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Drawer;
