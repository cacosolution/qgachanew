
import { createContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isOpenSideBar, setIsOpenSideBar] = useState(true)
    const [isOpenSpin, setIsOpenSpin] = useState(false)
    const [isOpenQuest, setIsOpenQuest] = useState(false)
    const [isOpenRefer, setIsOpenRefer] = useState(false)
    const [isOpenSupport, setIsOpenSupport] = useState(false)
    const [isOpenProfile, setIsOpenProfile] = useState(false)
    const [isOpenProfileAll, setIsOpenProfileAll] = useState(false)
    const [isOpenProfileDetail, setIsOpenProfileDetail] = useState(false)
    const [isOpenProfileEdit, setIsOpenProfileEdit] = useState(false)
    const [isOpenBalance, SetIsOpenBalance] = useState(false)
    const [isOpenDeposit, SetIsOpenDeposit] = useState(false)
    const [isOpenWithdraw, SetIsOpenWithdraw] = useState(false)
    const [isOpenTransaction, SetIsOpenTransaction] = useState(false)
    const value = {
        isOpenSideBar,
        setIsOpenSideBar,
        isOpenSpin,
        setIsOpenSpin,
        isOpenQuest,
        setIsOpenQuest,
        isOpenRefer,
        setIsOpenRefer,
        isOpenSupport,
        setIsOpenSupport,
        isOpenProfile,
        setIsOpenProfile,
        isOpenProfileDetail,
        setIsOpenProfileDetail,
        isOpenProfileEdit,
        setIsOpenProfileEdit,
        isOpenProfileAll,
        setIsOpenProfileAll,
        isOpenBalance,
        SetIsOpenBalance,
        isOpenDeposit,
        SetIsOpenDeposit,
        isOpenWithdraw,
        SetIsOpenWithdraw,
        isOpenTransaction,
        SetIsOpenTransaction,
    }
    return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}



