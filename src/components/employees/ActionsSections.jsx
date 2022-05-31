import React from 'react'
import Card from '../ui/Card/Card';
import EmployeeDetail from './EmployeeDetail';
import FormAddNewEmploye from './FormAddNewEmploye';

const ActionsSections = ({ optionsState }) => {
    
    const renderAddEmployeeForm = () => {
        return (
           <FormAddNewEmploye/>
        );
    };

    const renderVieEmploye = () => {    
        return (
           <EmployeeDetail/>
        );
    }


    const renderMain = () => {
        switch (optionsState) {
            case "addEmploye":
                return renderAddEmployeeForm();
            case "viewEmploye":
                return renderVieEmploye();
            
            default:
                return <div>Nada</div>;
        }
    };
    return renderMain();
};

export default ActionsSections;