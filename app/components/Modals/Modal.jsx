'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button';
import { Label } from '@/components/ui/label';
import { Input } from "@/components/ui/input";



const Modal = ({
  buttonAction,
  buttonActionLabel,
  dialogTitle,
  dialogDescription,
  body,
  primaryModalActionLabel
}) => {

    
    
  return (
     <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='w-full'>{buttonActionLabel}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>
            {dialogDescription}
          </DialogDescription>
        </DialogHeader>
        {body}
        <DialogFooter>
          <Button type="submit">{primaryModalActionLabel}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Modal