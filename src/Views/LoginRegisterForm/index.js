import React from 'react';
import {
    FormContainer,
    Form,
    SubmitButton
} from './styles';
import { Formik } from 'formik';
import FormHandlers from '../../Util/FormHandlers';
import { RegisterLoginSchema } from '../../Validation/Schema';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import AuthActions from '../../../../Redux/Auth/Actions';
// import CustomButton from '../../../../UI-Kit/CustomButton';

const LoginRegisterForm = () => {

    // const dispatch = useDispatch();

    const navigate = useNavigate();

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    mobile: ""
                }}
                validationSchema={RegisterLoginSchema}
                onSubmit={(values, action) => {
                    console.log(values);
                    // dispatch(AuthActions.login({}));
                    // navigate(localStorage.getItem("backURL"));
                    navigate('/main');
                }}
            >
                {(formik) => (
                    <Form 
                        onSubmit={formik.handleSubmit}
                        errorss={formik.errors.mobile && formik.touched.mobile}
                    >
                        <input
                            name="mobile"
                            value={formik.values.mobile}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                        />

                        <div className="errorDiv">
                            {formik.errors.mobile && formik.touched.mobile
                                ?
                                formik.errors.mobile
                                :
                                null
                            }
                        </div>

                        <SubmitButton>
                            ورود
                        </SubmitButton>
                    </Form>
                )}
            </Formik>
        </FormContainer>
    );
}

export default LoginRegisterForm;