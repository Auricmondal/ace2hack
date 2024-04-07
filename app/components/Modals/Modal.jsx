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
import { useRouter } from "next/navigation";



const Modal = ({
  buttonAction='/',
  buttonActionLabel,
  dialogTitle,
  dialogDescription,
  body,
  primaryModalActionLabel
}) => {

    const Router= useRouter()
    
  return (
     <Dialog className=' max-h-[90vh] overflow-auto'>
      <DialogTrigger asChild>
        <Button variant="outline" className='w-full'>{buttonActionLabel}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]  max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>
            {dialogDescription}
          </DialogDescription>
        </DialogHeader>
        
        {body}

      
        <DialogFooter>
          <Button type="submit" onClick={()=>Router.push(buttonAction)}>{primaryModalActionLabel}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Modal