import { useState } from "react"

 const CreateListingImages = ({ setImages }: { setImages: (urls: string[]) => void }) => {
  const [input, setInput] = useState("")
  const [urls, setUrls] = useState<string[]>([])

  const handleAdd = () => {
    if (input.trim() === "") return
    setUrls([...urls, input.trim()])
    setInput("")
    setImages([...urls, input.trim()]) 
  }

  const handleRemove = (index: number) => {
    const newUrls = urls.filter((_, i) => i !== index)
    setUrls(newUrls)
    setImages(newUrls)
  }

  return (
    <div>
      <label>Image URLs:</label>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter image URL"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-1 rounded"
        />
        <button type="button" onClick={handleAdd}>Add</button>
      </div>

      <ul className="mt-2">
        {urls.map((url, index) => (
          <li key={index} className="flex items-center gap-2">
            <span>{url}</span>
            <button type="button" onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CreateListingImages