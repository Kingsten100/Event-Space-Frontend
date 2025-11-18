import type { Filter } from "@/types/FilterType"
import { useEffect, useState } from "react"
import { Range } from 'react-range'

interface AdvancedFilterProps {
  open: boolean
  onClose: () => void
  onApply: (filters: Filter) => void
  initialFilters: Filter
  categories: string[]
  amenities: string[]
}

const AdvancedFilter = ({open, onClose, initialFilters, categories, amenities, onApply}: AdvancedFilterProps) => {

  const price_Min = 0
  const price_Max = 15000
  const [localFilters, setLocalFilters] = useState<Filter>(initialFilters);
  
  useEffect(() => {
  if (open) setLocalFilters(initialFilters)
}, [open, initialFilters])


  if(!open) return null

  const toggleCategory = (cat: string) => {
  setLocalFilters(prev => ({
    ...prev,
    categories: prev.categories.includes(cat)
      ? prev.categories.filter(c => c !== cat)
      : [...prev.categories, cat]
  }))
}


  const toggleAmenity = (amenity: string) => {
    setLocalFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
      ? prev.amenities.filter(a => a !== amenity)
      : [...prev.amenities, amenity]
    }))
  }

  const handleApply = () => {
    onApply(localFilters)
    onClose()
  }

  const handleReset = () => {
    setLocalFilters({
      minPrice: 0,
      maxPrice: 10000,
      capacity: 1,
      categories: [],
      amenities: []
    })
  }

  return (
    <div onClick={onClose} className="filter-background">
      <div onClick={(e) => e.stopPropagation()} className="filter-container-inside">
        <h2 className="text-xl font-semibold text-center">Filter</h2>

        <div className="divider"/>

        <div className="range-container">

        
       <Range
        step={100}
        min={price_Min}
        max={price_Max}
        values={[localFilters.minPrice, localFilters.maxPrice]}
        onChange={(values) =>
          setLocalFilters({
            ...localFilters,
            minPrice: values[0],
            maxPrice: values[1],
          })
        }
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="range-track"
            style={{...props.style}}
          >
              <div
                className="slidern"
                style={{
                  left: `${(localFilters.minPrice / price_Max) * 100}%`,
                  width: `${
                    ((localFilters.maxPrice - localFilters.minPrice) / price_Max) * 100
                  }%`,
                }}
              />
              {children}
            </div>
          
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={props.style}
            className="thumb"
          />
        )}
        
      />
      <div className="price-index">
        <span>{localFilters.minPrice} kr</span>
        <span>{localFilters.maxPrice} kr</span>
      </div>
      </div>
  
        
        <div className="mb-4">
          <label>Capacity</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={localFilters.capacity}
            onChange={(e) =>
              setLocalFilters({ ...localFilters, capacity: +e.target.value })
            }
          />
        </div>

        <div className="divider"/> 

     
        <div className="filter-check">
          <p className="font-medium">Categories</p>
          <div className="check-container">
            {categories.map(cat => (
              <label key={cat} className="flex flex-wrap gap-2 margin">
                <input
                  type="checkbox"
                  checked={localFilters.categories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

    
        <div className="filter-check">
          <p className="font-medium">Amenities</p>
          <div className="check-container">
            {amenities.map(a => (
              <label key={a} className="flex gap-2 margin">
                <input
                  type="checkbox"
                  checked={localFilters.amenities.includes(a)}
                  onChange={() => toggleAmenity(a)}
                />
                {a}
              </label>
            ))}
          </div>
        </div>

 
        <div className="btns-flex">
          <button onClick={handleReset} className="text-gray-500 reset-btn">
            Reset
          </button>

          <button onClick={handleApply} className="apply-btn">
            Apply 
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdvancedFilter
