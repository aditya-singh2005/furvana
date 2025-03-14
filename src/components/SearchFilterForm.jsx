import { useState, useEffect, useRef } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import petOptions from '../Data/PetOptions';

const SearchFilterForm = () => {
    const [values, setValues] = useState([1000, 5000]);
    const [age, setAge] = useState([0, 5]);
    const [petType, setPetType] = useState("All");
    const [breed, setBreed] = useState("All");
    const [isPetDropdownOpen, setIsPetDropdownOpen] = useState(false);
    const [isBreedDropdownOpen, setIsBreedDropdownOpen] = useState(false);
    const [gender, setGender] = useState("both");
    const [petSize, setPetSize] = useState("All");
    const [selectedColors, setSelectedColors] = useState([]);
    const petDropdownRef = useRef(null);
    const breedDropdownRef = useRef(null);

    

    const breedMapping = {
        "All": ["All"],
        "Dogs": ["All", "Labrador", "Golden Retriever", "Siberian Husky", "Beagle"],
        "Cats": ["All", "Persian Cat", "Siamese", "Maine Coon", "Bengal Cat"],
        "Birds": ["All", "Parrot", "Cockatiel", "Canary", "Finch"],
        "Rabbits": ["All", "Holland Lop", "Mini Rex", "Lionhead", "Angora"],
        "Reptiles": ["All", "Iguana", "Gecko", "Chameleon", "Python"],
        "Turtles": ["All", "Red-Eared Slider", "Box Turtle", "Snapping Turtle"],
        "Ducks": ["All", "Pekin Duck", "Mallard", "Muscovy Duck"]
    };

    const animalColors = ["Black", "White", "Brown", "Yellow", "Orange", "Gray", "Green", "Red", "Blue"];

    const breedOptions = breedMapping[petType] || ["All"];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (petDropdownRef.current && !petDropdownRef.current.contains(event.target)) {
                setIsPetDropdownOpen(false);
            }
            if (breedDropdownRef.current && !breedDropdownRef.current.contains(event.target)) {
                setIsBreedDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleColorSelection = (color) => {
        setSelectedColors((prevColors) => 
            prevColors.includes(color) ? prevColors.filter(c => c !== color) : [...prevColors, color]
        );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected Filters:", {
            priceRange: values,
            ageRange: age,
            petType,
            breed,
            gender,
            petSize,
            selectedColors
        });
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Pricing Section */}
                <div className="pb-8">
                <h2 className="text-2xl flex items-center flex-wrap font-semibold mb-4 text-black">
                    <img src="/icons/price.png" className="w-12 h-12 mr-3 mb-2" />
                    Pricing: 
                    <span className="text-2xl ml-2 flex justify-center  w-full font-medium whitespace-nowrap">
                        <button className="border-2" onClick={ () => {setValues([Math.max(1000,values[0]-1000),values[1]])}}>-</button>
                        <span>+</span>
                        ₹ {values[0].toLocaleString('en-IN')} - ₹ {values[1].toLocaleString('en-IN')}
                        <span>-</span>
                        <span>+</span>
                    </span>
                </h2>

                    <RangeSlider
                        min={1000}
                        max={100000}
                        step={1000}
                        value={values}
                        onInput={setValues}
                        tooltip={true}
                        className="custom-slider"
                    />
                </div>

                {/* Pet Type Dropdown */}
                <div className="relative" ref={petDropdownRef}>
                    <h2 className="text-2xl flex items-center font-semibold text-black mb-2">
                        <img src="/icons/pet-shop.png" alt="pet-shop.icon" className='w-10 h-10 mr-2' ></img>
                        Pet Type:</h2>
                    <div
                        className="flex items-center justify-between bg-white text-black px-4 py-2 border rounded cursor-pointer"
                        onClick={() => setIsPetDropdownOpen(!isPetDropdownOpen)}
                    >
                        <span>{petType}</span>
                        <i className={`fa-solid fa-chevron-down text-black text-xl transition-transform ${
                            isPetDropdownOpen ? "rotate-180" : ""
                        }`}></i>
                    </div>
                    {isPetDropdownOpen && (
                        <ul className="absolute w-full bg-white border rounded shadow-md mt-1 z-10">
                            {petOptions.map((option, index) => (
                                <li
                                    key={index}
                                    className="flex items-center px-4 py-2 hover:bg-gray-200 text-xl cursor-pointer"
                                    onClick={() => {
                                        setPetType(option.name);
                                        setBreed("All"); // Reset breed when pet type changes
                                        setIsPetDropdownOpen(false);
                                    }}
                                >
                                    <img src={option.image} alt={option.name} className="w-10 h-10 mr-3" />
                                    {option.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Breed Dropdown */}
                <div className="relative mt-4" ref={breedDropdownRef}>
                    <h2 className="text-2xl flex items-center font-semibold text-black mb-2">
                        <img src="/icons/breed.png" alt="breed.png" className="w-10 h-10 mr-3"></img>
                        Breed:</h2>
                    <div
                        className="flex items-center justify-between bg-white text-black px-4 py-2 border rounded cursor-pointer"
                        onClick={() => setIsBreedDropdownOpen(!isBreedDropdownOpen)}
                    >
                        <span>{breed}</span>
                        <i className={`fa-solid fa-chevron-down text-black text-xl transition-transform ${
                            isBreedDropdownOpen ? "rotate-180" : ""
                        }`}></i>
                    </div>
                    {isBreedDropdownOpen && (
                        <ul className="absolute w-full bg-white border rounded shadow-md mt-1 z-10">
                            {breedOptions.map((option, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => {
                                        setBreed(option);
                                        setIsBreedDropdownOpen(false);
                                    }}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Gender Selection */}
                <div className="mt-4">
                    <h2 className="text-lg font-semibold text-black mb-2">Gender:</h2>
                    <div className="flex gap-4">
                        <div
                            onClick={() => setGender(gender === "male" ? "both" : "male")}
                            className={`flex items-center px-4 py-2 border rounded cursor-pointer ${
                                gender === "male" ? "bg-blue-200" : "bg-white"
                            }`}
                        >
                            <i className="fa-solid fa-mars text-blue-500 text-xl"></i>
                            <span className="ml-2 text-black">Male</span>
                        </div>

                        <div
                            onClick={() => setGender(gender === "female" ? "both" : "female")}
                            className={`flex items-center px-4 py-2 border rounded cursor-pointer ${
                                gender === "female" ? "bg-pink-200" : "bg-white"
                            }`}
                        >
                            <i className="fa-solid fa-venus text-pink-500 text-xl"></i>
                            <span className="ml-2 text-black">Female</span>
                        </div>
                    </div>
                </div>

                {/* Age Slider */}
                <div className="mt-4">
                    <h2 className="font-semibold text-lg mb-4">
                        Age:
                        <span className="text-black ml-2 font-medium">
                            {age[1] === 25 ? "25+ years" : `${age[0]} - ${age[1]} years`}
                        </span>
                    </h2>
                    <RangeSlider
                        min={0}
                        max={25}
                        step={1}
                        value={age}
                        onInput={setAge}
                        tooltip={true}
                        className="custom-slider"
                    />
                </div>

                <div className='max-w-md mx-auto '>
                    <h2 className='text-lg font-semibold mt-4 mb-2'>Size:
                        <span className='text-black ml-2 font-medium '>{petSize}</span>
                    </h2>
                    <div className='grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 w-full'>
                        {
                            ["All","Small","Medium","Large"].map( (size) => (
                                <button 
                                key={size}
                                className={`p-3 border-2 rounded-2xl hover:bg-gray-100 font-medium w-full
                                    ${ size === petSize ? "bg-gray-100" : "hover:bg-gray-100"}`}
                                onClick={ (e) => {
                                    e.preventDefault();
                                    setPetSize(size)}}>
                                    {size}
                                </button>
                            ))
                        }
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="text-lg font-semibold text-black mb-2">Color:</h2>
                    <div className="flex flex-wrap gap-2">
                        {animalColors.map((color, index) => (
                            <div
                                key={index}
                                className={`px-4 py-2 border rounded cursor-pointer ${
                                    selectedColors.includes(color) ? "bg-gray-300" : "bg-white"
                                }`}
                                onClick={() => toggleColorSelection(color)}
                            >
                                {color}
                            </div>
                        ))}
                        <button 
                        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg" 
                        onClick={(e) => { e.preventDefault(); setSelectedColors([]); }}
                    >
                        Clear Selection
                    </button>
                    </div>
                    
                <button type="submit" className="mt-4 mb-4 w-full px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600">
                    Apply Changes
                </button>
                </div>
            </form>
        </div>
    );
};

export default SearchFilterForm;
