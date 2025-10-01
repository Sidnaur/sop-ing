import { Edit } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function FoodCard({
  id,
  name,
  description,
  price,
  availability,
  amountOfStock,
  photoURL,
}) {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={photoURL} alt={name} />
      <div className="p-6">
        <div className="gap-4 flex justify-between mb-3">
          {availability ? (
            amountOfStock > 5 ? (
              <Badge className="bg-green-500">Available</Badge>
            ) : (
              <Badge className="bg-yellow-500">Low Stock</Badge>
            )
          ) : (
            <Badge className="bg-red-500">Not Available</Badge>
          )}
          <Badge>Items in Stock: {amountOfStock}</Badge>
        </div>
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-green-600 font-semibold">₱{price}</span>
        </div>
        <Button className="w-full mt-4"><Edit size={24}/> Edit Item</Button>
      </div>
    </div>
  );
}
