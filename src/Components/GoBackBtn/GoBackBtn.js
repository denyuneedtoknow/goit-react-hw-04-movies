import s from './GoBackBtn.module.css'


const GoBackBtn = ({ onClick }) => {

    const handleGoBack = (e) => {
        onClick()
    }

    return (
        < button className={s.GoBackBtn} type='button' onClick={handleGoBack}>Go back</button>)
}

export default GoBackBtn