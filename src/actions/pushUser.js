const ACTION_TYPE="PUSH_USER"

const pushUser= (passedRow)=>{

    const newFormRow = {
        key: passedRow['key'],
        firstName: passedRow['firstName'],
        lastName: passedRow['lastName'],
        age: passedRow['age'],
        birthday: passedRow['birthday'].format('YYYY/MM/DD'),
        hobby: passedRow['hobby'],
    }


    return{
        type:ACTION_TYPE,
        payload:newFormRow
    }
}

export default pushUser