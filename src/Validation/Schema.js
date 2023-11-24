import * as Yup from 'yup';
const mobileRegex = /^(\+98|0)9\d{9}$/;

export const PersonalInfoFormSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    lastName: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    fathersName: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    militaryRank: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    id: Yup.string()
        .required('وارد کردن این فیلد الزامی است')
        .matches(/^[0-9]+$/, 'فقط باید ارقام وارد شود')
        .min(8,'باید ۸ رقم باشد')
        .max(8,'باید ۸ رقم باشد'),
    expertiseCode: Yup.string()
        .required('وارد کردن این فیلد الزامی است')
        .matches(/^[0-9]+$/, 'فقط باید ارقام وارد شود')
        .min(8,'باید ۸ رقم باشد')
        .max(8,'باید ۸ رقم باشد'),
    expertiseName: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    nationalCode: Yup.string()
        .required('وارد کردن این فیلد الزامی است')
        .matches(/^[0-9]+$/, 'فقط باید ارقام وارد شود')
        .min(8,'باید ۸ رقم باشد')
        .max(8,'باید ۸ رقم باشد'),
    birthCertificateCity: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    base: Yup.string()
        .required('وارد کردن این فیلد الزامی است'),
    mobileNumber: Yup.string()
        .matches(mobileRegex,'شماره وارد شده نادرست میباشد')
        .required('وارد کردن این فیلد الزامی است'),
    sepahBankNumber: Yup.string()
        .required('وارد کردن این فیلد الزامی است')
        .matches(/^[0-9]+$/, 'فقط باید ارقام وارد شود')
});