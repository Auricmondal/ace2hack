"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import ChooseTopic from "./Modals/ChooseTopic"
import { useRouter } from "next/navigation"
import useSideMenuModal from "../hooks/useSideMenuModal"

 

export function Combobox({
  datas,
  useDia,
  
}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const Router =useRouter()
  const sideNav= useSideMenuModal();

  return (
    <Popover open={open} onOpenChange={setOpen} >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? datas.find((data) => data.value === value)?.label
            : "My Subject..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* <CommandEmpty>No framework found.</CommandEmpty> */}
          <CommandGroup>
            {datas.map((data) => (
              
<div className="py-1" key={data.value}>

  <Button variant='secondary' className='w-full'
  onClick={()=>{
      Router.push(`/dashboard/${data.value}`)
      sideNav.onClose()
    }}
      >{data.label}</Button>
</div>
            ))}
            {useDia&&<ChooseTopic />}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
