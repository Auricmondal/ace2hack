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
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast'



const Modal = ({
  buttonAction='/',
  buttonActionLabel,
  dialogTitle,
  dialogDescription,
  body,
  primaryModalActionLabel,
  type
}) => {

    const Router= useRouter()

    const handleClick =()=>{
      if(type!=='quiz'){
        Router.push(buttonAction)
      }
      if(type=='quiz'){
        Router.refresh();
        toast.success('🥳Successfully Submitted! +20 Points')
      }
    }
    
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
          <Button type="submit" onClick={handleClick}>{primaryModalActionLabel}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Modal