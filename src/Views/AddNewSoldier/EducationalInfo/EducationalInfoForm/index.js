import React from 'react';
import {
    Col,
    EducationalInfoFormContainer,
    Form
} from './styles';
import { Formik, Field } from 'formik';
import FormHandler from '../../../../Util/FormHandlers';
import { SubmitButton } from '../../PersonalInfo/PersonalInfoForm/styles';
import { EducationInfoFormSchema } from '../../../../Validation/Schema';

const EducationalInfoForm = () => {
    return (
        <EducationalInfoFormContainer>
            <Formik
                initialValues={{
                    id: "", // شماره پرسنلی
                    generalScore: "", // بخش عمومی
                    expertiseScore: "", // بخش تخصص
                    protectionScore: "", // حفاظت
                    religionScore: "", // عقیدتی سیاسی
                    internshipSituation: "", // کارورزی
                    graduationSituation: "" // وضعیت تحصیلی
                }}
                validationSchema={EducationInfoFormSchema}
                onSubmit={(values, action) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form onSubmit={formik.handleSubmit}>
                        <div className='row'>
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
                                    name="generalScore"
                                    value={formik.values.generalScore}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="نمره عمومی"
                                />

                                {
                                    formik.errors.generalScore && formik.touched.generalScore === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.generalScore
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input
                                    name="expertiseScore"
                                    value={formik.values.expertiseScore}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="نمره تخصص"
                                />

                                {
                                    formik.errors.expertiseScore && formik.touched.expertiseScore === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.expertiseScore
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input
                                    name="protectionScore"
                                    value={formik.values.protectionScore}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="حفاظت"
                                />

                                {
                                    formik.errors.protectionScore && formik.touched.protectionScore === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.protectionScore
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>


                        </div>

                        <div className='rowtwo'>
                            <Col>
                                <input
                                    name="religionScore"
                                    value={formik.values.religionScore}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="عقیدتی سیاسی"
                                />

                                {
                                    formik.errors.religionScore && formik.touched.religionScore === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.religionScore
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <Field as="select" name="internshipSituation" style={{width: "200px",height: "40px",border: "1px solid gray",borderRadius: "10px",textAlign: "right",paddingRight: "15px",fontSize: "20px",fontWeight: "bold"}}>
                                    <option value="طی شده">طی شده</option>
                                    <option value="طی نشده">طی نشده</option>
                                </Field>

                                {
                                    formik.errors.internshipSituation && formik.touched.internshipSituation === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.internshipSituation
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <Field as="select" name="graduationSituation" style={{width: "200px",height: "40px",border: "1px solid gray",borderRadius: "10px",textAlign: "right",paddingRight: "15px",fontSize: "20px",fontWeight: "bold"}}>
                                    <option value="فارغ التحصیل شده">فارغ التحصیل شده</option>
                                    <option value="فارغ التحصیل نشده">فارغ التحصیل نشده</option>
                                </Field>

                                {
                                    formik.errors.graduationSituation && formik.touched.graduationSituation === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.graduationSituation
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
        </EducationalInfoFormContainer>
    );
}

export default EducationalInfoForm;