import React from 'react';
import {
    PersonalInfoFormContainer,
    Form,
    Col
} from './styles';
import { Formik } from 'formik';
import FormHandler from '../../../../Util/FormHandlers';
import {PersonalInfoFormSchema} from '../../../../Validation/Schema';

const PersonalInfoForm = () => {
    return (
        <PersonalInfoFormContainer>
            <Formik
                initialValues={{
                    firstName: "", // نام
                    lastName: "", // نشان
                    fathersName: "", // نام پدر
                    militaryRank: "", // درجه
                    id: "", // شماره پرسنلی
                    expertiseCode: "", // شماره تخصص
                    expertiseName: "", // عنوان تخصص
                    nationalCode: "", // کد ملی
                    birthCertificateCity: "", // محل صدور
                    base: "", // محل خدمت
                    mobileNumber: "", // شماره تماس
                    sepahBankNumber: "" // شماره حساب سپه
                }}
                validationSchema={PersonalInfoFormSchema}
                onSubmit={(values, action) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form 
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="row">
                            <Col>
                                <input
                                    name="firstName"
                                    value={formik.values.firstName}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="نام"
                                />

                            {
                                formik.errors.firstName && formik.touched.firstName === true
                                    ?
                                    <p>
                                        {
                                            formik.errors.firstName
                                        }
                                    </p>
                                    :
                                    null
                            }
                            </Col>

                            <Col>
                                <input
                                    name="lastName"
                                    value={formik.values.lastName}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="نشان"
                                />

                                {
                                    formik.errors.lastName && formik.touched.lastName === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.lastName
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input
                                    name="fathersName"
                                    value={formik.values.fathersName}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="نام پدر"
                                />

                                {
                                    formik.errors.fathersName && formik.touched.fathersName === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.fathersName
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input      
                                    name="militaryRank"
                                    value={formik.values.militaryRank}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="درجه"
                                />

                            </Col>
                        </div>

                        <div className="row">
                            <Col>
                                <input
                                    name="id"
                                    value={formik.values.id}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="شماره پرسنلی"
                                />

                            </Col>

                            <Col>
                                <input
                                    name="expertiseCode"
                                    value={formik.values.expertiseCode}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="شماره تخصص"
                                />

                            </Col>

                            <Col>
                                <input
                                    name="expertiseName"
                                    value={formik.values.expertiseName}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="عنوان تخصص"
                                />

                            </Col>

                            <Col>
                                <input      
                                    name="nationalCode"
                                    value={formik.values.nationalCode}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="کد ملی"
                                />

                            </Col>
                        </div>

                        <div className="row">
                            <Col>
                                <input
                                    name="birthCertificateCity"
                                    value={formik.values.birthCertificateCity}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="محل صدور"
                                />

                            </Col>

                            <Col>
                                <input
                                    name="base"
                                    value={formik.values.base}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="محل خدمت"
                                />

                            </Col>

                            <Col>
                                <input
                                    name="mobileNumber"
                                    value={formik.values.mobileNumber}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="شماره موبایل"
                                />

                            </Col>

                            <Col>
                                <input      
                                    name="sepahBankNumber"
                                    value={formik.values.sepahBankNumber}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="شماره حساب بانک سپه"
                                />

                            </Col>
                        </div>

                        <button>
                            submit
                        </button>
                    </Form>
                )}
            </Formik>
        </PersonalInfoFormContainer>
    );
}

export default PersonalInfoForm;