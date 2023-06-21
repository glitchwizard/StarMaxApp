import React, { useState, useEffect } from 'react';
import { TextField, Button, FormHelperText, FormControl } from '@mui/material';
import axios from 'axios';
import moment from 'moment';

const EditStarshipForm = ({ starship, onFormSubmit }) => {
    const isEditMode = !!starship;
    const [formFields, setFormFields] = useState({
        id: '',
        name: '',
        model: '',
        manufacturer: '',
        costInCredits: '',
        length: '',
        maxAtmospheringSpeed: '',
        crew: '',
        passengers: '',
        cargoCapacity: '',
        consumables: '',
        hyperdriveRating: '',
        mglt: '',
        starshipClass: '',
        url: starship ? starship.url : '',
        created: starship ? starship.created : moment().toISOString(),
        edited: moment().toISOString(),
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (starship) {
            setFormFields({
                name: starship.name,
                model: starship.model,
                manufacturer: starship.manufacturer,
                costInCredits: starship.costInCredits,
                length: starship.length,
                maxAtmospheringSpeed: starship.maxAtmospheringSpeed,
                crew: starship.crew,
                passengers: starship.passengers,
                cargoCapacity: starship.cargoCapacity,
                consumables: starship.consumables,
                hyperdriveRating: starship.hyperdriveRating,
                mglt: starship.mglt,
                starshipClass: starship.starshipClass,
                id: starship.id,
                url: starship.url,
                created: starship.created,
                edited: moment().toISOString(),
            });
        }
    }, [starship]);

    const handleChange = (event) => {
        setFormFields({
            ...formFields,
            [event.target.name]: event.target.value
        });
    };

    const validateForm = () => {
        let formErrors = {};
        let formIsValid = true;
        // Here you can add validation rules. For example, we require almost all fields:
        for (let key in formFields) {
            if (!isEditMode && (key === 'id' || key === 'url')) {
                // Skip iteration if 'id' or 'url' key is encountered
            } else {
                if (formFields[key] === '' && key !== 'url') {
                    formIsValid = false;
                    formErrors[key] = 'This field is required';
                }
            }
        }
        setErrors(formErrors);
        return formIsValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        const updatedFormFields = {
            ...formFields,
            edited: moment().toISOString(),
        };

        try {
            let response;
            if (isEditMode) {
                response = await axios.put(`api/starships/${starship.id}`, updatedFormFields);
                alert('Starship updated successfully');
                onFormSubmit();
            } else {
                response = await axios.post(`api/starships`, updatedFormFields);
                alert('Starship created successfully');
                onFormSubmit(); 
            }
            return response.data;
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    const renderTextField = (name, label) => (
        <FormControl error= {!!errors[name]} fullWidth margin = "normal" >
            <TextField name={ name } label = { label } variant = "outlined" value = { formFields[name]} onChange = { handleChange } />
            { errors[name] && <FormHelperText>{ errors[name]} </FormHelperText> }
        </FormControl>
    );

    return (
        <form onSubmit={handleSubmit} >
            <FormControl fullWidth margin="normal" >
                <input type="hidden" name='id' value={formFields['id']} onChange={handleChange} />
            </FormControl>
            { renderTextField('name', 'Name') }
            { renderTextField('model', 'Model') }
            { renderTextField('manufacturer', 'Manufacturer') }
            { renderTextField('costInCredits', 'Cost In Credits') }
            { renderTextField('length', 'Length') }
            { renderTextField('maxAtmospheringSpeed', 'Max Atmosphering Speed') }
            { renderTextField('crew', 'Crew') }
            { renderTextField('passengers', 'Passengers') }
            { renderTextField('cargoCapacity', 'Cargo Capacity') }
            { renderTextField('consumables', 'Consumables') }
            { renderTextField('hyperdriveRating', 'Hyperdrive Rating') }
            { renderTextField('mglt', 'MGLT') }
            { renderTextField('starshipClass', 'Starship Class') }
            { renderTextField('url', 'Url') }
            <Button type="submit" variant="contained">
                {isEditMode ? 'Save Changes' : 'Create Starship'}
            </Button>
        </form>
    );
};

export default EditStarshipForm;
