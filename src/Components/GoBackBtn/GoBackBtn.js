const GoBackBtn = ({ onClick }) => {

    const handleGoBack = (e) => {
        onClick()
    }

    return (
        < button type='button' onClick={handleGoBack}>Go back</button>)
}

export default GoBackBtn