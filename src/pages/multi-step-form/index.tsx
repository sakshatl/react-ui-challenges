import Form from './components/Form/Form';
import styles from './styles.module.css';

function MultiStepForm() {
  return (
    <div className={styles.multiStepFormPage}>
      <div className={styles.multiStepFormContainer}>
        <div className={styles.multiStepFormContainerLeft}>

        </div>
        <div className={styles.multiStepFormContainerRight}>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default MultiStepForm;