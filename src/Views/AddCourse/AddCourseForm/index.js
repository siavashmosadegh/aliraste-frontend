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
                    <Form onSubmit={formik.handleSubmit}>
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

                        <div className="firstRow">


                            <Col>
                                <p style={{marginBottom: "10px"}}>تاریخ شروع دوره</p>                        
                            </Col>

                            <Col>
                                <input
                                    name="courseStartDateDay"
                                    value={formik.values.courseStartDateDay}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="روز"
                                />

                                {
                                    formik.errors.courseStartDateDay && formik.touched.courseStartDateDay === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.courseStartDateDay
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input
                                    name="courseStartDateMonth"
                                    value={formik.values.courseStartDateMonth}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="ماه"
                                />

                                {
                                    formik.errors.courseStartDateMonth && formik.touched.courseStartDateMonth === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.courseStartDateMonth
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input
                                    name="startStartDateYear"
                                    value={formik.values.startStartDateYear}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="سال"
                                />

                                {
                                    formik.errors.startStartDateYear && formik.touched.startStartDateYear === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.startStartDateYear
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>
                        </div>

                        <div className="firstRow">

                            <Col>
                                <p>تاریخ شروع کارورزی</p>
                            </Col>

                            <Col>
                                <input
                                    name="internshipStartDateDay"
                                    value={formik.values.internshipStartDateDay}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="روز"
                                />

                                {
                                    formik.errors.internshipStartDateDay && formik.touched.internshipStartDateDay === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.internshipStartDateDay
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input
                                    name="internshipStartDateMonth"
                                    value={formik.values.internshipStartDateMonth}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="ماه"
                                />

                                {
                                    formik.errors.internshipStartDateMonth && formik.touched.internshipStartDateMonth === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.internshipStartDateMonth
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input
                                    name="internshipStartDateYear"
                                    value={formik.values.internshipStartDateYear}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="سال"
                                />

                                {
                                    formik.errors.internshipStartDateYear && formik.touched.internshipStartDateYear === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.internshipStartDateYear
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>
                        </div>

                        <div className="firstRow">

                            <Col>
                                <p>تاریخ پایان</p>
                            </Col>

                            <Col>
                                <input
                                    name="courseEndDateDay"
                                    value={formik.values.courseEndDateDay}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="روز"
                                />

                                {
                                    formik.errors.courseEndDateDay && formik.touched.courseEndDateDay === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.courseEndDateDay
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input
                                    name="courseEndDateMonth"
                                    value={formik.values.courseEndDateMonth}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="ماه"
                                />

                                {
                                    formik.errors.courseEndDateMonth && formik.touched.courseEndDateMonth === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.courseEndDateMonth
                                            }
                                        </p>
                                        :
                                        null
                                }
                            </Col>

                            <Col>
                                <input
                                    name="courseEndDateYear"
                                    value={formik.values.courseEndDateYear}
                                    onChange={(e) => FormHandler.onChange(e,formik)}
                                    placeholder="سال"
                                />

                                {
                                    formik.errors.courseEndDateYear && formik.touched.courseEndDateYear === true
                                        ?
                                        <p>
                                            {
                                                formik.errors.courseEndDateYear
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