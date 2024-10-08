import React, {useState, useEffect, useContext} from 'react';
import styles from './FilterAttractions.module.css'; // Adjust the path if needed
import FilterType from './FilterType';
import {fetchFilterValues} from '../../../services/utils';
import { AttractionContext } from '../../../context/AttractionContext';
import Button from "@mui/material/Button";
import Rating from '@mui/material/Rating';


const FilterAttractions = () => {
    const {filterValuesAttractions, setFilterValuesAttractions} = useContext(AttractionContext);
    const { title, ...options } = filterValuesAttractions;
    const [selectedOptions, setSelectedOptions] = useState(options);
    const [continents, setContinents] = useState([]);
    const [categories, setCategories] = useState([]);
    const rating = ["8 and up", "9 and up", "10"];

    const getValues = async () => {
        try {
            const { continents, categories } = await fetchFilterValues();

            setContinents(continents);
            setCategories(categories);
        } catch (error) {
            console.error('Error fetching filter values:', error);
        }
    }

    useEffect(() => {
        getValues()
        setFilterValuesAttractions((prevOptions) => ({
            ...prevOptions,
            continents: [],
            categories: [],
            ratings: ""
        }))
    }, []);

    useEffect(() => {
        setSelectedOptions(options);
    }, [filterValuesAttractions]);

    const handleChange = (event, filterType, checkBoxName) => {
        const { checked } = event.target;

        // Update selected options based on filter type - 
        // add or delete from the filter type array
        setSelectedOptions(prevOptions => {
            // Ensure that prevOptions[filterType] is always an array
            const currentOptions = prevOptions[filterType] || [];
            // Determine the updated options based on whether the checkbox is checked or not
            const updatedOptions = {
                ...prevOptions,
                [filterType]: checked
                    ? [...currentOptions, checkBoxName]  // Add value if checked
                    : currentOptions.filter(option => option !== checkBoxName) // Remove value if unchecked
            };
            return updatedOptions;
        });
    };


  return (
    <div className={styles.filtersContainer}>
        <h2 className={styles.filtersTitle}>Filters:</h2>
        
        <FilterType 
            type="ratings" 
            options={rating}
            selectedOptions={selectedOptions}
            handleChange={handleChange}
        />
        {continents.length > 0 && (
            <FilterType 
                type="continents" 
                options={continents}
                selectedOptions={selectedOptions}
                handleChange={handleChange}
            />
        )}
        {categories.length > 0 && (
            <FilterType 
                type="categories"
                options={categories}
                selectedOptions={selectedOptions}
                handleChange={handleChange}
            />
        )}
        <Button
            variant="contained"
            onClick={() => {
                setFilterValuesAttractions(prevOptions => ({
                ...prevOptions,
                ...selectedOptions,
                }))
            }
        }>
            Done
        </Button>

    </div>
  );
};

export default FilterAttractions;
