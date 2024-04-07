import { create } from 'zustand';



const useMode = create((set) =>({
    isOpen: false,
    onOpen: () =>set({ isOpen: true}),
    onClose: () =>set ({isOpen : false})
}))

export default useMode;