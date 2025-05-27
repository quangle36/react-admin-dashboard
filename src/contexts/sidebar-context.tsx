import React from 'react';

interface SidebarContextProps {
  isExpanded: boolean;
  isMobileOpen: boolean;
  isHovered: boolean;
  activeItem: string | null;
  openSubmenu: string | null;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  toggleSubmenu: (item: string) => void;
  allowHovered: (isAllow: boolean) => void;
}

const SidebarContext = React.createContext<SidebarContextProps>({
  isExpanded: true,
  isMobileOpen: false,
  isHovered: false,
  activeItem: '',
  openSubmenu: '',
  toggleSidebar: () => {},
  toggleMobileSidebar: () => {},
  toggleSubmenu:() => {},
  allowHovered: () => {}
});

export const SidebarProvider = ({ children }: React.PropsWithChildren) => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);

  React.useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if(!mobile) {
        setIsMobile(false)
      }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])


  function toggleSidebar() {
    setIsExpanded(prevState => !prevState);
  }

  function toggleMobileSidebar() {
    setIsMobileOpen(prevState => !prevState);
  }

  function toggleSubmenu(item: string) {
    setOpenSubmenu(prevState => prevState === item ? null : item);
  }

  function allowHovered(isAllow: boolean) {
    setIsHovered(isAllow)
  }

  return (
    <SidebarContext.Provider
      value={{
        isExpanded: isMobile ? false : isExpanded,
        isMobileOpen,
        isHovered,
        activeItem,
        openSubmenu,
        toggleSidebar,
        toggleMobileSidebar,
        toggleSubmenu,
        allowHovered
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
};

export const useSidebarContext = () => React.useContext(SidebarContext);