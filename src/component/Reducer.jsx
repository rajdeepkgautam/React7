const changeNum = (state=0, action) => {
    switch(action.type) {
        case 'AddStudent' : return <AddStudent/> ;
        case 'Edit' : return <Edit/>;
        default : return <student/>;
    }
}

export default changeNum;
