import * as Switch from "@radix-ui/react-switch";

type Props = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

const ToggleSwitch: React.FC<Props> = ({ checked, onCheckedChange }) => {
  return (
    <Switch.Root
      className="flex items-center h-6 w-10 rounded-full rdx-state-unchecked:bg-gray-300 rdx-state-checked:bg-green-500 relative"
      checked={checked}
      onCheckedChange={onCheckedChange}
    >
      <Switch.Thumb className="h-6 w-6 rounded-full bg-white border-4 rdx-state-unchecked:border-gray-300 rdx-state-checked:border-green-500 absolute rdx-state-checked:right-0" />
    </Switch.Root>
  );
};

export default ToggleSwitch;
