import { getFilters } from "@/api/filtersService/getFilters"
import { useEffect, useState } from "react"
import CreateListingImages from "./ImageList"
import type { Listing } from "@/types/ListingType"
import { instance } from "@/api/axiosInstance"
import type { CreateListing } from "@/types/CreateListing"

const CreateListing = () => {
  const [categories, setCategories] = useState<string[]>([])
  const [amenities, setAmenities] = useState<string[]>([])

  const [formData, setFormData] = useState<CreateListing>({
    title: "",
    description: "",
    price: 0,
    location: { city: "", region: "" },
    images: [],
    capacity: 1,
    category: "",
    amenities: [],
    rules: { alcoholAllowed: false, petsAllowed: false },
    address: ""
  })

  useEffect(() => {
    const loadFilters = async () => {
      const res = await getFilters()
      setCategories(res.categories)
      setAmenities(res.amenities)
    }
    loadFilters()
  }, [])

  const handleChange = (field: keyof Listing, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleLocationChange = (field: keyof Listing["location"], value: string) => {
    setFormData(prev => ({
      ...prev,
      location: { ...prev.location, [field]: value }
    }))
  }

  const handleRulesChange = (field: keyof Listing["rules"], value: boolean) => {
    setFormData(prev => ({
      ...prev,
      rules: { ...prev.rules, [field]: value }
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await instance.post("/listing/create", formData)
      console.log("Listing created:", res.data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="centers">
      <div className="create-listing-container">
        <h2 className="create-listing-title">Create your listing!</h2>
        <form className="create-form-container" onSubmit={handleSubmit}>
          <div className="form-content">
            <label htmlFor="title">Title</label>
            <input className="input"
              type="text"
              value={formData.title}
              onChange={e => handleChange("title", e.target.value)}
            />
          </div>

          <div className="form-content">
            <label htmlFor="description">Description</label>
            <textarea className="input-textarea"
              value={formData.description}
              onChange={e => handleChange("description", e.target.value)}
            />
          </div>

          <div className="form-content">
            <label htmlFor="capacity">Capacity</label>
            <input className="input-capacity"
              type="number"
              value={formData.capacity}
              onChange={e => handleChange("capacity", +e.target.value)}
            />
          </div>

          <div className="form-content">
            <label htmlFor="price">Price per day</label>
            <input className="input-capacity"
              type="number"
              value={formData.price}
              onChange={e => handleChange("price", +e.target.value)}
            />
          </div>

          <div className="form-content">
            <label htmlFor="address">Address</label>
            <input className="input"
              type="text"
              value={formData.address}
              onChange={e => handleChange("address", e.target.value)}
            />
          </div>
 
          <div className="form-content">
            <label htmlFor="city">City</label>
            <input className="input"
              type="text"
              value={formData.location.city}
              onChange={e => handleLocationChange("city", e.target.value)}
            />
          </div>

          <div className="form-content">
            <label htmlFor="region">Region</label>
            <input className="input"
              type="text"
              value={formData.location.region}
              onChange={e => handleLocationChange("region", e.target.value)}
            />
          </div>

          <p>Amenities</p>
          <div className="amenity-grid">
            {amenities.map(a => (
              <div >
                <label key={a}>
                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(a)}
                    onChange={() =>
                      setFormData(prev => ({
                        ...prev,
                        amenities: prev.amenities.includes(a)
                          ? prev.amenities.filter(x => x !== a)
                          : [...prev.amenities, a]
                      }))
                    }
                  />
                  {a}
                </label>

              </div>
            ))}
          </div>

          <div>
            <select
              value={formData.category || ""}
              onChange={(e) => handleChange("category", e.target.value)}
            >
              <option value="">Choose category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <CreateListingImages setImages={(imgs) => setFormData(prev => ({ ...prev, images: imgs }))} />
          </div>

          <button type="submit" className="create-btn">Create listing</button>
        </form>
      </div>
    </div>
  )
}

export default CreateListing
