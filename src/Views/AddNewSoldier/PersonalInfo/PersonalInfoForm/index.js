import React from 'react';
import {
    PersonalInfoFormContainer,
    Form,
    Col,
    SubmitButton
} from './styles';
import { Field, Formik } from 'formik';
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

                            <Field as="select" name="militaryRank" style={{width: "200px",height: "40px",border: "1px solid gray",borderRadius: "10px",textAlign: "right",paddingRight: "15px",fontSize: "20px",fontWeight: "bold"}}>
                                <option value="سرباز">سرباز</option>
                                <option value="سرباز دوم">سرباز دوم</option>
                                <option value="سرباز یکم">سرباز یکم</option>
                                <option value="سرجوخه">سرجوخه</option>
                                <option value="گروهبان سوم">گروهبان سوم</option>
                                <option value="گروهبان دوم">گروهبان دوم</option>
                                <option value="گروهبان اول">گروهبان اول</option>
                                <option value="ستوان سوم">ستوان سوم</option>
                                <option value="ستوان دوم">ستوان دوم</option>
                                <option value="ستوان یکم">ستوان یکم</option>
                                <option value="سروان">سروان</option>
                                <option value="سرگرد">سرگرد</option>
                            </Field>
                                {/* <input      
                                    name="militaryRank"
                                    value={formik.values.militaryRank}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="درجه"
                                /> */}

                                {
                                    formik.errors.militaryRank && formik.touched.militaryRank === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.militaryRank
                                            }
                                        </p>
                                        :
                                        null
                                }
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

                                {
                                    formik.errors.id && formik.touched.id === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.id
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input
                                    name="expertiseCode"
                                    value={formik.values.expertiseCode}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="شماره تخصص"
                                />

                                {
                                    formik.errors.expertiseCode && formik.touched.expertiseCode === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.expertiseCode
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input
                                    name="expertiseName"
                                    value={formik.values.expertiseName}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="عنوان تخصص"
                                />

                                {
                                    formik.errors.expertiseName && formik.touched.expertiseName === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.expertiseName
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input      
                                    name="nationalCode"
                                    value={formik.values.nationalCode}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="کد ملی"
                                />

                                {
                                    formik.errors.nationalCode && formik.touched.nationalCode === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.nationalCode
                                            }
                                        </p>
                                        :
                                        null
                                }
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

                                {
                                    formik.errors.birthCertificateCity && formik.touched.birthCertificateCity === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.birthCertificateCity
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input
                                    name="base"
                                    value={formik.values.base}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="محل خدمت"
                                />

                                {
                                    formik.errors.base && formik.touched.base === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.base
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input
                                    name="mobileNumber"
                                    value={formik.values.mobileNumber}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="شماره موبایل"
                                />

                                {
                                    formik.errors.mobileNumber && formik.touched.mobileNumber === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.mobileNumber
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input      
                                    name="sepahBankNumber"
                                    value={formik.values.sepahBankNumber}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="شماره حساب بانک سپه"
                                />

                                {
                                    formik.errors.sepahBankNumber && formik.touched.sepahBankNumber === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.sepahBankNumber
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>
                        </div>

                        <div className='row'>
                            <SubmitButton type='submit'>
                                ثبت
                            </SubmitButton>
                        </div>
                    </Form>
                )}
            </Formik>
        </PersonalInfoFormContainer>
    );
}

export default PersonalInfoForm;