import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import styles from './SearchForm.module.css';

const vehicleEquipment = ['AC', 'Automatic', 'Kitchen', 'TV', 'Shower/WC'];
const vehicleTypes = ['Van', 'Fully Integrated', 'Alcove'];

const SearchForm = ()=> {
  const { handleSubmit, control, setValue, watch } = useForm({
    defaultValues: {
      location: 'Kyiv, Ukraine',
      equipment: [],
      vehicleType: ''
    }
  });

  const selectedEquipment = watch('equipment');
  const selectedVehicleType = watch('vehicleType');

  const toggleEquipment = (item) => {
    const newValue = selectedEquipment.includes(item)
      ? selectedEquipment.filter(i => i !== item)
      : [...selectedEquipment, item];
    setValue('equipment', newValue);
  };

  const handleVehicleType = (type) => {
    setValue('vehicleType', type);
  };

  const onSubmit = (data) => {
    console.log('Form values:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
      <div className={styles.field}>
        <label className={styles.label}>Location</label>
        <Controller
          control={control}
          name="location"
          render={({ field }) => (
            <input
              {...field}
              className={styles.input}
              placeholder="Enter location"
            />
          )}
        />
      </div>

      <div className={styles.field}>
        <p className={styles.sectionTitle}>Vehicle equipment</p>
        <div className={styles.grid}>
          {vehicleEquipment.map(item => (
            <button
              type="button"
              key={item}
              onClick={() => toggleEquipment(item)}
              className={`${styles.optionBtn} ${
                selectedEquipment.includes(item) ? styles.optionBtnActive : ''
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.field}>
        <p className={styles.sectionTitle}>Vehicle type</p>
        <div className={styles.grid}>
          {vehicleTypes.map(type => (
            <button
              type="button"
              key={type}
              onClick={() => handleVehicleType(type)}
              className={`${styles.optionBtn} ${
                selectedVehicleType === type ? styles.optionBtnActive : ''
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <button type="submit" className={styles.searchBtn}>
        Search
      </button>
    </form>
  );
}

export default SearchForm