import { CircleAlert, CircleCheck, CircleX, Clock, Filter, LayoutGrid, Search } from "lucide-react";
import SharedSidebar from "../components/shared-sidebar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";

export default function CafeteriaInventory() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const inventoryData = [
    {
      name: "Total Items",
      numberOfItems: 15,
      icon: <LayoutGrid size={24} color="#6A972E" />, // green
    },
    {
      name: "Available",
      numberOfItems: 25,
      icon: <CircleCheck size={24} color="#22C55E" />, // green
    },
    {
      name: "Low Stock",
      numberOfItems: 28,
      icon: <CircleAlert size={24} color="#FACC15" />, // yellow
    },
    {
      name: "Sold Out",
      numberOfItems: 32,
      icon: <CircleX size={24} color="#EF4444" />, // red
    },
  ]

  const inventoryItems = [
    {
      name: "Chicken Adobo", 
      description: "A popular Filipino dish consisting of chicken braised in a savory and tangy sauce.", 
      price: "₱50 PHP", availability, items, photoURL
    }
  ]

  return (
    <SharedSidebar>
      <><div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#6A972E] rounded-lg flex items-center justify-center text-white font-bold text-lg">
              F
            </div>
            <h1 className="text-2xl font-bold text-gray-900">FASPeCC</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 rounded-full"
                data-testid="search-orders-input"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                data-testid="filter-button"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
        <div className="p-6">
          <div className="bg-[#6A972E] text-white p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold">Cafeteria Inventory</h2>
            <p className="text-green-100 mt-1">Manage your menu items, stock, and availability</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inventoryData.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center justify-between p-3">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-gray-600 text-sm">{item.name}</h3>
                    <p className="text-2xl font-semibold">{item.numberOfItems} items</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-full"> <div className="text-gray-600">
                    {item.icon}
                  </div></div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </>

    </SharedSidebar>
  )
}