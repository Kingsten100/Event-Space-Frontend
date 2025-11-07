import { Calendar } from "@/components/ui/calendar"
import React from "react"
import { type DateRange } from "react-day-picker"
import { differenceInCalendarDays, format } from "date-fns"
import { useAuth } from "@/context/AuthContext"
import { useNavigate } from "react-router"
import { useBooking } from "@/context/BookingContext"

interface BookingCalendarProps {
  price: number;
  listingId: string;
}



const BookingCalendar = ({ price, listingId }: BookingCalendarProps ) => {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  })

  const days = dateRange?.from && dateRange.to ? differenceInCalendarDays(dateRange.to, dateRange.from) + 1 : 0
  const { user } = useAuth()
  const { createBooking } = useBooking()
  const navigate = useNavigate()
  

  const handleSubmit = () => {
    if(!user) {
      return navigate('/login')
    }


    createBooking({
      listingId: listingId,
      userId: user?._id,
      startDate: dateRange?.from,
      endDate: dateRange?.to,
      days: days,
      totalPrice: days * price
      
    })

    navigate(`/${listingId}/booking`)
  }

  return (
    <div>

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
          className="rounded-md border border-none w-[400px] h-[430px] text-lg p-2 border-r-2 overflow-hidden"
        />
      </div>
        <div className="flex flex-col gap-1 pt-1">
          <div>
            <b>Days: </b> {days}
          </div>
          <div className="pb-3">
            <b>Total: </b>${days * price}
          </div>
        </div>
        <div className="flex justify-center ">
          <button onClick={handleSubmit} className="book-btn">Book</button>
        </div>
    </div>
  );
}

export default BookingCalendar


