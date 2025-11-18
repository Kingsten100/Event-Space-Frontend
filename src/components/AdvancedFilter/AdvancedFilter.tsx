import type { Filter } from "@/types/FilterType"
import { Range } from 'react-range'

interface AdvancedFilterProps {
  open: boolean
  onClose: () => void
  onApply: (filters: Filter) => void
  filters: Filter
  setFilters: React.Dispatch<React.SetStateAction<Filter>>
  categories: string[]
  amenities: string[]
}

const AdvancedFilter = ({open, onClose, filters, setFilters, categories, amenities, onApply}: AdvancedFilterProps) => {

  const price_Min = 0
  const price_Max = 15000

  if(!open) return null

  const toggleCategory = (cat: string) => {
    setFilters(prev => ({
      ...prev, 
      categories: prev.categories.includes(cat)
      ? prev.categories.filter(c => c !== cat)
      : [...prev.categories, cat]
    }))
  }

  const toggleAmenity = (amenity: string) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
      ? prev.amenities.filter(a => a !== amenity)
      : [...prev.amenities, amenity]
    }))
  }

  const handleApply = () => {
    onApply(filters)
    onClose()
  }

  const handleReset = () => {
    setFilters({
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
        values={[filters.minPrice, filters.maxPrice]}
        onChange={(values) =>
          setFilters({
            ...filters,
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
                  left: `${(filters.minPrice / price_Max) * 100}%`,
                  width: `${
                    ((filters.maxPrice - filters.minPrice) / price_Max) * 100
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
        <span>{filters.minPrice} kr</span>
        <span>{filters.maxPrice} kr</span>
      </div>
      </div>
  
        
        <div className="mb-4">
          <label>Capacity</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={filters.capacity}
            onChange={(e) =>
              setFilters({ ...filters, capacity: +e.target.value })
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
                  checked={filters.categories.includes(cat)}
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
                  checked={filters.amenities.includes(a)}
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
