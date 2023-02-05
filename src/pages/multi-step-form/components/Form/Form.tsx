import styles from './form.module.css';

const FORM_FIELDS = [
  {
    label: "Name",
    name: "name",
    placeholder: "e.g. Stephen King",
    type: 'text'
  },
  {
    label: "Email",
    name: "email",
    placeholder: "e.g. stephen.king@foo.bar",
    type: 'text'
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    placeholder: "e.g. +91 9871251805",
    type: 'text'
  },
]

type SingleFormFieldType = typeof FORM_FIELDS[0];

function Form() {
  
  return (
    <form className={styles.form}>
      <div className={styles.formHeadings}>
        <h4>Personal Info</h4>
        <p>Please provide your name, email and phone number.</p>
      </div>
      <div className={styles.formFields}>
        {
          FORM_FIELDS.map((field: SingleFormFieldType, index: number) => (
            <div key={index} className={styles.formInputField}>
              <label htmlFor={field.name}>{field.label}</label>
              <input name={field.name} placeholder={field.placeholder} />
            </div>
          ))
        }
      </div>
      <div className={styles.formActions}>
        <button>Next Step</button>
      </div>
    </form>
  )
}

export default Form;