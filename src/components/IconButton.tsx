import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function IconButton(IconComponent: LucideIcon) {
  return (
    <Button
      variant='outline'
      size='icon'
      className='rounded-full border-none bg-popover hover:bg-primary'
    >
      <IconComponent className='h-4 w-4' />
    </Button>
  );
}
