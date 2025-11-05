import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import React from "react"
import { type DateRange } from "react-day-picker"
import { Button } from "../ui/button"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"



const BookingCalendar = () => {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  })

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="text-lg font-medium">
        {dateRange?.from && dateRange?.to ? (
          <>
            
            <span className="font-semibold">
              {format(dateRange.from, "dd MMM yyyy")} – {format(dateRange.to, "dd MMM yyyy")}
            </span>
          </>
        ) : (
          "Choose a date"
        )}
      </div>

      <Calendar
        initialFocus
        mode="range"
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={1}
        className="rounded-md border border-none w-[400px] h-[500px] text-lg p-2 border-r-2 overflow-hidden"
      />
    </div>
  );
}

export default BookingCalendar


