import { create } from 'zustand';



const useSideMenuModal = create((set) =>({
    isOpen: false,
    onOpen: () =>set({ isOpen: true}),
    onClose: () =>set ({isOpen : false})
}))

export default useSideMenuModal;