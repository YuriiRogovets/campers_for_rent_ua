import React from "react"
import { useForm } from "react-hook-form";
import { CiCalendar } from "react-icons/ci";
import css from "./BookingForm.module.css"

const BookingForm = () => {

  const {register, handleSubmit, formState:{errors}} = useForm()

 

  return (
    <div className={css.wrap}>BookingForm
      <h2 className={css.title}>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>

      <form className={css.form} onSubmit={handleSubmit((data) => { console.log(data) })}>
        
        <input className={css.formInput} type="text"
            placeholder="Name"
          {...register('Name', { required: "Name is required field", maxLength: 12, minLength: 3 })}  />
        {errors.Name && <p>Name is required.</p>}

        <input className={css.formInput} 
          type="email"
          placeholder="Email" 
          {...register("Email", {
          required: true,
          pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })} />
        
        <input className={css.formInput} type="data" placeholder="Booking date" />
        
        <textarea className={css.formTextarea} type="textarea" placeholder="Comment"/>
    
      <button className={css.submitBtn} type="submit">Send</button>
      </form>
      
       
    </div>
  )
}

export default BookingForm