
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"
import { AppSidebar } from "@/components/principal/sidebar/app-sidebar"
import { SiteHeader } from "@/components/principal/sidebar/site-header"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
      </SidebarInset>
    </SidebarProvider>
  )
}
