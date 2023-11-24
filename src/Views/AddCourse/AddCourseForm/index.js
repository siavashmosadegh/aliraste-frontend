import React from 'react';
import {
    AddCourseFormContainer,
    Col,
    Form
} from './styles';
import { Field, Formik } from 'formik';
import FormHandler from '../../../Util/FormHandlers';

const AddCourseForm = () => {
    return (
        <AddCourseFormContainer>
            <Formik
                initialValues={{
                    courseTitle: "", // عنوان دوره
                    courseId: "", // شماره دوره
                    courseStartDateDay: "", // روز تاریخ شروع دوره
                    courseStartDateMonth: "", // ماه تاریخ شروع دوره
                    courseStartDateYear: "", // سال تاریخ شروع دوره
                    internshipStartDateDay: "", // روز تاریخ شروع کارورزی
                    internshipStartDateMonth: "", // ماه تاریخ شروع کارورزی
                    internshipStartDateYear: "", // سال تاریخ شروع کارورزی
                    courseEndDateDay: "", // روز تاریخ شروع دوره
                    courseEndDateMonth: "", // ماه تاریخ شروع دوره
                    courseEndDateYear: "", // سال تاریخ شروع دوره
                }}
                validationSchema=""
                onSubmit={(values, action) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form onSubmit={formik.handleChange}>
                        <div className="firstRow">
                            <Col>
                                <Field as="select" name="courseTitle" style={{width: "200px",height: "40px",border: "1px solid gray",borderRadius: "10px",textAlign: "right",paddingRight: "15px",fontSize: "20px",fontWeight: "bold"}}>
                                    <option value="مقدماتی رسته ای">مقدماتی رسته ای</option>
                                    <option value="تکمیل تخصصی">تکمیل تخصصی</option>
                                    <option value="عالی رسته ای">عالی رسته ای</option>
                                </Field>

                                {
                                    formik.errors.courseTitle && formik.touched.courseTitle === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.courseTitle
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input
                                    name="courseId"
                                    value={formik.values.courseId}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="نام"
                                />

                            {
                                formik.errors.courseId && formik.touched.courseId === true
                                    ?
                                    <p>
                                        {
                                            formik.errors.courseId
                                        }
                                    </p>
                                    :
                                    null
                            }
                            </Col>
                        </div>
                    </Form>
                )}
            </Formik>
        </AddCourseFormContainer>
    );
}

export default AddCourseForm;